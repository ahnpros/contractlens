import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  getAI,
  getGenerativeModel,
  GoogleAIBackend,
  InferenceMode,
  type GenerativeModel,
} from "firebase/ai";
import { cloudConfigured, cloudModel, firebaseConfig } from "../config";
import type { ClauseFinding, ReviewResult, RiskLevel } from "./reviewTypes";

/**
 * Cloud deep review through the Firebase AI Logic SDK (Gemini Developer API
 * backend). Only the MASKED text is ever sent: this module has no access to
 * the original document or to the unmasked values.
 *
 * Until a Firebase project is configured (Sprint 3 account pending), every
 * function here reports "unconfigured" and the app stays in on-device mode
 * instead of failing silently.
 */

export type CloudStatus =
  | { state: "unconfigured" }
  | { state: "ready"; model: string }
  | { state: "error"; message: string };

let app: FirebaseApp | null = null;
let model: GenerativeModel | null = null;
let status: CloudStatus = cloudConfigured
  ? { state: "ready", model: cloudModel }
  : { state: "unconfigured" };

export function getCloudStatus(): CloudStatus {
  return status;
}

function ensureModel(): GenerativeModel {
  if (model) return model;
  if (!cloudConfigured) {
    throw new Error("Firebase is not configured yet (Sprint 3 account pending).");
  }
  app = initializeApp(firebaseConfig);
  const ai = getAI(app, { backend: new GoogleAIBackend() });
  model = getGenerativeModel(ai, {
    model: cloudModel,
    // Deep review wants the cloud model; on-device is only a fallback here.
    mode: InferenceMode.PREFER_IN_CLOUD,
    generationConfig: { responseMimeType: "application/json" },
  });
  return model;
}

const REVIEW_PROMPT = `You are a contract risk reviewer. The user gives you a contract in which all personal data has ALREADY been replaced with placeholders like [NAME_1], [PHONE_1], [ACCOUNT_1]. Never ask for or invent the real values.

Read the contract clause by clause. Flag clauses that are one-sided or risky for the signing party, especially: unilateral termination rights, excessive penalties or liquidated damages, blanket rights waivers, auto-renewal traps with long notice windows, unilateral right to change terms or prices, broad liability exclusions, and over-broad non-competes.

Reply with ONLY a JSON object of this shape:
{
  "clauses": [
    {
      "category": "unilateral-termination | excessive-penalty | rights-waiver | auto-renewal | unilateral-change | liability-waiver | non-compete | other",
      "title": "short title",
      "risk": "high | medium | low",
      "quote": "exact quote from the contract text",
      "why": "plain-language explanation of why this is risky, 1-2 sentences",
      "counterProposal": "a concrete replacement wording the signer could propose"
    }
  ],
  "summary": "2-3 sentence overall assessment",
  "negotiationPoints": ["short negotiation ask", "..."]
}
Write explanations in the same language as the contract. Quotes must be copied exactly from the contract text. This is general information, not legal advice.`;

const VALID_RISK: RiskLevel[] = ["high", "medium", "low"];

export async function cloudReview(maskedText: string): Promise<ReviewResult> {
  const m = ensureModel();
  const result = await m.generateContent(
    `${REVIEW_PROMPT}\n\nCONTRACT (personal data already masked):\n"""\n${maskedText}\n"""`,
  );
  const raw = result.response.text();
  const jsonText = raw.slice(raw.indexOf("{"), raw.lastIndexOf("}") + 1);
  const parsed = JSON.parse(jsonText) as {
    clauses?: Array<Partial<ClauseFinding>>;
    summary?: string;
    negotiationPoints?: string[];
  };

  const clauses: ClauseFinding[] = (parsed.clauses ?? [])
    .filter((c) => c && typeof c.quote === "string" && typeof c.why === "string")
    .map((c) => ({
      category: (c.category as ClauseFinding["category"]) ?? "other",
      title: c.title ?? "Clause to review",
      risk: VALID_RISK.includes(c.risk as RiskLevel) ? (c.risk as RiskLevel) : "medium",
      quote: c.quote as string,
      why: c.why as string,
      counterProposal: c.counterProposal ?? "",
    }));

  return {
    source: "cloud",
    clauses,
    summary: parsed.summary ?? "",
    negotiationPoints: parsed.negotiationPoints ?? [],
  };
}
