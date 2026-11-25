import type { Finding, PiiType } from "../pii/types";

/**
 * On-device inference through Chrome's built-in AI (Gemini Nano) using the
 * Prompt API (window.LanguageModel). This is the exact same on-device path
 * Firebase AI Logic uses under the hood for web hybrid inference; calling it
 * directly is what lets ContractLens mask text with NO Firebase project and
 * NO network, which is the state the app ships in until the Sprint 3 Google
 * account is issued. When a Firebase config exists, the cloud review in
 * cloud.ts goes through the Firebase AI Logic SDK as designed.
 *
 * Requires Chrome 139+ on desktop. Availability is reported honestly:
 * the UI shows whatever LanguageModel.availability() actually returns.
 */

type Availability =
  | "available"
  | "downloadable"
  | "downloading"
  | "unavailable"
  | "unsupported";

interface LanguageModelSession {
  prompt(input: string): Promise<string>;
  destroy(): void;
}

interface LanguageModelStatic {
  availability(): Promise<string>;
  create(options?: {
    initialPrompts?: Array<{ role: string; content: string }>;
    monitor?: (m: {
      addEventListener: (ev: string, cb: (e: { loaded: number }) => void) => void;
    }) => void;
  }): Promise<LanguageModelSession>;
}

declare global {
  interface Window {
    LanguageModel?: LanguageModelStatic;
  }
}

export function promptApiSupported(): boolean {
  return typeof window !== "undefined" && "LanguageModel" in window;
}

export async function onDeviceAvailability(): Promise<Availability> {
  if (!promptApiSupported()) return "unsupported";
  try {
    const a = await window.LanguageModel!.availability();
    if (
      a === "available" ||
      a === "downloadable" ||
      a === "downloading" ||
      a === "unavailable"
    ) {
      return a;
    }
    return "unavailable";
  } catch {
    return "unavailable";
  }
}

/** Trigger the Gemini Nano download. Must be called from a user gesture. */
export async function downloadOnDeviceModel(
  onProgress?: (fraction: number) => void,
): Promise<void> {
  if (!promptApiSupported()) throw new Error("Prompt API not supported");
  const session = await window.LanguageModel!.create({
    monitor(m) {
      m.addEventListener("downloadprogress", (e) => onProgress?.(e.loaded));
    },
  });
  session.destroy();
}

const DETECT_SYSTEM = [
  "You are a privacy filter running locally on the user's device.",
  "Find every piece of personal data in the contract excerpt the user gives you:",
  "person names, resident registration / national ID numbers, phone numbers,",
  "email addresses, bank account numbers, card numbers, and postal addresses.",
  'Reply with ONLY a JSON array like [{"type":"NAME","value":"..."}].',
  'Use types NAME, RRN, PHONE, EMAIL, ACCOUNT, CARD, ADDRESS.',
  "Every value must be an exact substring of the excerpt. If there is none, reply [].",
].join(" ");

const VALID_TYPES: PiiType[] = ["NAME", "RRN", "PHONE", "EMAIL", "ACCOUNT", "ADDRESS", "CARD"];

/**
 * Split into paragraph chunks that fit Gemini Nano's small context window.
 * Measured in a real Chrome 158 run: a ~3000-char chunk plus the system
 * prompt overflows the window ("The input is too large."), so chunks stay
 * near 1000 chars and oversized chunks are split and retried (see below).
 */
function chunkText(text: string, maxChars = 1000): Array<{ start: number; text: string }> {
  const chunks: Array<{ start: number; text: string }> = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(text.length, start + maxChars);
    if (end < text.length) {
      const nl = text.lastIndexOf("\n", end);
      if (nl > start + 500) end = nl;
    }
    chunks.push({ start, text: text.slice(start, end) });
    start = end;
  }
  return chunks;
}

/**
 * Ask Gemini Nano to find personal data the rules cannot (names in prose,
 * unusual address formats, ...). Returned values are verified to be exact
 * substrings before they are trusted.
 */
export async function modelDetect(text: string): Promise<Finding[]> {
  if (!promptApiSupported()) return [];
  const findings: Finding[] = [];
  const session = await window.LanguageModel!.create({
    initialPrompts: [{ role: "system", content: DETECT_SYSTEM }],
  });

  const promptChunk = async (chunk: { start: number; text: string }): Promise<string> => {
    try {
      return await session.prompt(
        `Contract excerpt:\n"""\n${chunk.text}\n"""\nJSON array only:`,
      );
    } catch (err) {
      // Window overflow: split the chunk in half and retry each half once.
      if (chunk.text.length > 240 && /too large|context|quota/i.test((err as Error).message)) {
        const mid = Math.floor(chunk.text.length / 2);
        const left = await promptChunk({ start: chunk.start, text: chunk.text.slice(0, mid) });
        const right = await promptChunk({
          start: chunk.start + mid,
          text: chunk.text.slice(mid),
        });
        return `${left}\n${right}`;
      }
      throw err;
    }
  };

  try {
    for (const chunk of chunkText(text)) {
      let raw: string;
      try {
        raw = await promptChunk(chunk);
      } catch {
        continue; // one bad chunk must not discard the other chunks' findings
      }
      const jsonText = raw.slice(raw.indexOf("["), raw.lastIndexOf("]") + 1);
      if (!jsonText) continue;
      let parsed: unknown;
      try {
        parsed = JSON.parse(jsonText);
      } catch {
        continue;
      }
      if (!Array.isArray(parsed)) continue;
      for (const item of parsed) {
        const rec = item as { type?: string; value?: string };
        if (!rec.value || !rec.type) continue;
        const type = rec.type.toUpperCase() as PiiType;
        if (!VALID_TYPES.includes(type)) continue;
        // Locate every occurrence of the value inside this chunk.
        let idx = chunk.text.indexOf(rec.value);
        while (idx !== -1) {
          findings.push({
            type,
            value: rec.value,
            start: chunk.start + idx,
            end: chunk.start + idx + rec.value.length,
            layer: "model",
          });
          idx = chunk.text.indexOf(rec.value, idx + rec.value.length);
        }
      }
    }
  } finally {
    session.destroy();
  }
  return findings;
}

/**
 * Optional on-device plain-language summary of the local review findings.
 * Returns null when the model is unavailable; the caller then shows the
 * deterministic review on its own. Never sends anything anywhere.
 */
export async function modelSummarizeLocalReview(
  maskedText: string,
  clauseTitles: string[],
): Promise<string | null> {
  if (!promptApiSupported()) return null;
  const availability = await onDeviceAvailability();
  if (availability !== "available") return null;
  const session = await window.LanguageModel!.create({
    initialPrompts: [
      {
        role: "system",
        content:
          "You explain contract risks in plain, friendly language in 3 short sentences. " +
          "The contract text contains placeholders like [NAME_1]; never invent real names or numbers.",
      },
    ],
  });
  try {
    const excerpt = maskedText.slice(0, 1400);
    const out = await session.prompt(
      `Risky clauses found: ${clauseTitles.join("; ") || "none"}.\n` +
        `Masked contract excerpt:\n"""\n${excerpt}\n"""\n` +
        `Write a 3-sentence plain-language summary of what the signer should watch out for.`,
    );
    return out.trim() || null;
  } catch {
    return null;
  } finally {
    session.destroy();
  }
}
