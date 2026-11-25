import { SAMPLES } from "./samples";
import { cloudConfigured, cloudModel } from "./config";
import { deterministicDetect } from "./pii/regexLayer";
import { maskText } from "./pii/mask";
import type { Finding, Layer } from "./pii/types";
import {
  downloadOnDeviceModel,
  modelDetect,
  modelSummarizeLocalReview,
  onDeviceAvailability,
} from "./ai/onDevice";
import { cloudReview } from "./ai/cloud";
import { localReview } from "./ai/localReview";
import type { ReviewResult } from "./ai/reviewTypes";

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

const input = $<HTMLTextAreaElement>("contract-input");
const analyzeBtn = $<HTMLButtonElement>("analyze");
const downloadBtn = $<HTMLButtonElement>("download-model");
const simulateOffline = $<HTMLInputElement>("simulate-offline");
const progress = $("progress");

let deviceState = "checking";
let lastMaskedText = "";

const isOnline = () => navigator.onLine && !simulateOffline.checked;
const effectiveOffline = () => !isOnline();

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setChip(chipId: string, statusId: string, state: "ok" | "warn" | "bad" | "unknown", text: string) {
  const chip = $(chipId);
  const dot = chip.querySelector(".dot") as HTMLElement;
  dot.className = `dot dot-${state}`;
  $(statusId).textContent = text;
}

async function refreshStatus() {
  const availability = await onDeviceAvailability();
  deviceState = availability;
  const deviceText: Record<string, [string, string]> = {
    available: ["ok", "ready"],
    downloadable: ["warn", "not downloaded yet"],
    downloading: ["warn", "downloading…"],
    unavailable: ["bad", "unavailable on this device"],
    unsupported: ["bad", "not supported in this browser"],
  };
  const [st, tx] = deviceText[availability] ?? ["unknown", availability];
  setChip("chip-device", "device-status", st as never, tx);
  downloadBtn.classList.toggle(
    "hidden",
    !(availability === "downloadable" || availability === "downloading"),
  );

  const online = navigator.onLine;
  setChip(
    "chip-network",
    "network-status",
    online ? "ok" : "warn",
    online ? "online" : "offline",
  );

  setChip(
    "chip-cloud",
    "cloud-status",
    cloudConfigured ? "ok" : "warn",
    cloudConfigured ? `configured (${cloudModel})` : "not configured yet",
  );

  const banner = $("mode-banner");
  if (effectiveOffline()) {
    banner.textContent =
      "Mode: ON-DEVICE ONLY. The network is off (or simulated off). Masking and the basic review run entirely on this device; nothing is uploaded.";
    banner.dataset.mode = "device";
  } else if (cloudConfigured) {
    banner.textContent =
      "Mode: HYBRID. Personal data is masked on this device first; only the masked text goes to the cloud for a deep review.";
    banner.dataset.mode = "hybrid";
  } else {
    banner.textContent =
      "Mode: ON-DEVICE ONLY. Cloud review is not configured yet (waiting for the Sprint 3 Firebase project), so nothing is uploaded. Masking and the basic review run on this device.";
    banner.dataset.mode = "device";
  }
}

const LAYER_LABEL: Record<Layer, string> = {
  regex: "Safety-net rules",
  field: "Form-field rules",
  model: "Gemini Nano (on-device)",
};

function renderMask(maskedText: string, items: Array<Finding & { token: string }>) {
  const summary = $("mask-summary");
  if (items.length === 0) {
    summary.textContent =
      "No personal data was found by the rule layers" +
      (deviceState === "available" ? " or by Gemini Nano." : ". (Gemini Nano is not available in this browser, so only the rule layers ran.)");
  } else {
    const byLayer = new Map<Layer, number>();
    for (const i of items) byLayer.set(i.layer, (byLayer.get(i.layer) ?? 0) + 1);
    const parts = [...byLayer.entries()]
      .map(([l, n]) => `${n} by ${LAYER_LABEL[l]}`)
      .join(", ");
    summary.textContent = `${items.length} personal data item${items.length > 1 ? "s" : ""} masked: ${parts}.`;
  }

  const table = $("findings-table");
  const body = $("findings-body");
  body.innerHTML = "";
  table.classList.toggle("hidden", items.length === 0);
  items.forEach((item, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML =
      `<td>${idx + 1}</td><td>${escapeHtml(item.type)}</td>` +
      `<td class="value">${escapeHtml(item.value)}</td>` +
      `<td>${escapeHtml(LAYER_LABEL[item.layer])}</td>` +
      `<td><code>${escapeHtml(item.token)}</code></td>`;
    body.appendChild(tr);
  });

  $("masked-output").innerHTML = escapeHtml(maskedText).replace(
    /\[([A-Z]+_\d+)\]/g,
    "<mark>[$1]</mark>",
  );
}

function renderReview(review: ReviewResult, note: string) {
  const src = $("review-source");
  src.textContent =
    review.source === "cloud"
      ? `Deep review by cloud Gemini via Firebase AI Logic (${cloudModel}), run on the masked text only.`
      : "Basic review computed on this device (deterministic clause-pattern scan of the masked text). No text left the device for this review.";
  if (note) src.textContent += ` ${note}`;
  src.dataset.source = review.source;

  $("review-summary").textContent = review.summary;

  const list = $("clause-list");
  list.innerHTML = "";
  if (review.clauses.length === 0) {
    list.innerHTML = '<p class="empty">No risky clause patterns were flagged.</p>';
  }
  for (const c of review.clauses) {
    const card = document.createElement("article");
    card.className = `clause risk-${c.risk}`;
    card.innerHTML =
      `<header><span class="risk-badge">${escapeHtml(c.risk.toUpperCase())}</span>` +
      `<h4>${escapeHtml(c.title)}</h4></header>` +
      `<blockquote>${escapeHtml(c.quote)}</blockquote>` +
      `<p><strong>Why it matters.</strong> ${escapeHtml(c.why)}</p>` +
      `<p><strong>Counter-proposal.</strong> ${escapeHtml(c.counterProposal)}</p>`;
    list.appendChild(card);
  }

  const neg = $("negotiation-list");
  neg.innerHTML = "";
  if (review.negotiationPoints.length === 0) {
    neg.innerHTML = '<li class="empty">Nothing to negotiate from this scan.</li>';
  }
  for (const p of review.negotiationPoints) {
    const li = document.createElement("li");
    li.textContent = p;
    neg.appendChild(li);
  }
}

function renderPayload(sent: boolean, maskedText: string) {
  $("payload-note").textContent = sent
    ? "This is the exact payload that was sent to the cloud for the deep review. Check it: no names, numbers or addresses, only placeholders."
    : "Nothing was sent anywhere for this analysis. If a cloud review runs, the payload will be exactly this masked text:";
  $("payload-output").textContent = maskedText;
}

async function analyze() {
  const text = input.value;
  if (!text.trim()) {
    progress.textContent = "Paste a contract or load a sample first.";
    return;
  }
  analyzeBtn.disabled = true;
  try {
    // Step 1: deterministic layers. Instant, offline, no model needed.
    progress.textContent = "Step 1 of 2 · Masking personal data on this device…";
    const findings: Finding[] = [...deterministicDetect(text)];

    // Step 2: Gemini Nano layer, when the model is actually ready.
    let modelNote = "";
    if (deviceState === "available") {
      try {
        const modelFindings = await modelDetect(text);
        findings.push(...modelFindings);
        modelNote = `Gemini Nano added ${modelFindings.length} candidate item(s); duplicates with the rule layers were merged.`;
      } catch (err) {
        modelNote = `Gemini Nano pass failed (${(err as Error).message}); rule layers only.`;
      }
    } else if (deviceState === "downloadable" || deviceState === "downloading") {
      modelNote =
        "Gemini Nano is not downloaded yet, so this run used the rule layers only. Use the “Enable on-device model” button to download it.";
    } else {
      modelNote =
        "Gemini Nano is not available in this browser, so this run used the rule layers only. Open this page in Chrome 139+ on desktop for the on-device model layer.";
    }

    const { maskedText, items } = maskText(text, findings);
    lastMaskedText = maskedText;
    renderMask(maskedText, items);
    progress.textContent = modelNote;

    // Step 3: review. Cloud only when online AND configured; the payload is
    // the masked text. Otherwise the on-device basic review runs.
    let review: ReviewResult;
    let sent = false;
    let reviewNote = "";
    if (!effectiveOffline() && cloudConfigured) {
      progress.textContent = "Step 2 of 2 · Sending the MASKED text to cloud Gemini for a deep review…";
      try {
        review = await cloudReview(maskedText);
        sent = true;
      } catch (err) {
        reviewNote = `Cloud review failed (${(err as Error).message}); fell back to the on-device basic review.`;
        review = localReview(maskedText);
      }
    } else {
      progress.textContent = "Step 2 of 2 · Running the on-device basic review…";
      review = localReview(maskedText);
      if (effectiveOffline()) {
        reviewNote = "Offline: the cloud review was not attempted.";
      } else if (!cloudConfigured) {
        reviewNote = "Cloud review is not configured yet, so it was not attempted.";
      }
    }
    renderReview(review, reviewNote);
    renderPayload(sent, maskedText);

    // Optional: Gemini Nano plain-language summary of the local review.
    const nanoBox = $("nano-summary");
    nanoBox.classList.add("hidden");
    nanoBox.textContent = "";
    if (review.source === "on-device" && deviceState === "available") {
      const s = await modelSummarizeLocalReview(
        maskedText,
        review.clauses.map((c) => c.title),
      );
      if (s) {
        nanoBox.innerHTML =
          `<strong>Plain-language summary by Gemini Nano (on-device):</strong> ${escapeHtml(s)}`;
        nanoBox.classList.remove("hidden");
      }
    }

    progress.textContent = modelNote;
  } finally {
    analyzeBtn.disabled = false;
  }
}

function init() {
  const row = $("sample-row");
  for (const sample of SAMPLES) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "sample-btn";
    b.textContent = sample.label;
    b.addEventListener("click", () => {
      input.value = sample.text;
      input.focus();
    });
    row.appendChild(b);
  }

  analyzeBtn.addEventListener("click", () => void analyze());
  downloadBtn.addEventListener("click", () => {
    downloadBtn.disabled = true;
    downloadBtn.textContent = "Downloading on-device model… 0%";
    void downloadOnDeviceModel((f) => {
      downloadBtn.textContent = `Downloading on-device model… ${Math.round(f * 100)}%`;
    })
      .then(() => refreshStatus())
      .finally(() => {
        downloadBtn.disabled = false;
        downloadBtn.textContent = "Enable on-device model";
      });
  });
  simulateOffline.addEventListener("change", () => void refreshStatus());
  window.addEventListener("online", () => void refreshStatus());
  window.addEventListener("offline", () => void refreshStatus());
  void refreshStatus();
}

init();
