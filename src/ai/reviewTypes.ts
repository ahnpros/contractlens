export type RiskLevel = "high" | "medium" | "low";

export type ClauseCategory =
  | "unilateral-termination"
  | "excessive-penalty"
  | "rights-waiver"
  | "auto-renewal"
  | "unilateral-change"
  | "liability-waiver"
  | "non-compete"
  | "other";

export interface ClauseFinding {
  category: ClauseCategory;
  title: string;
  risk: RiskLevel;
  /** Exact quote from the (masked) contract text this finding is about. */
  quote: string;
  why: string;
  counterProposal: string;
}

export interface ReviewResult {
  /** Where this review actually ran. Shown honestly in the UI. */
  source: "cloud" | "on-device";
  clauses: ClauseFinding[];
  summary: string;
  negotiationPoints: string[];
}
