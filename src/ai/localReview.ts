import type { ClauseCategory, ClauseFinding, ReviewResult, RiskLevel } from "./reviewTypes";

/**
 * Basic on-device review used when the cloud is unreachable or unconfigured.
 *
 * This is a deterministic clause-pattern scan (Korean + English). It is
 * instant, works fully offline, and never pretends to be the deep cloud
 * review: the UI labels it "On-device basic review" and lists exactly which
 * patterns fired. Gemini Nano may add a plain-language summary on top when
 * it is available (see onDevice.ts), but the clause findings themselves do
 * not depend on any model.
 */

interface Pattern {
  category: ClauseCategory;
  title: string;
  risk: RiskLevel;
  re: RegExp;
  why: string;
  counterProposal: string;
}

const PATTERNS: Pattern[] = [
  {
    category: "unilateral-termination",
    title: "One-sided termination right",
    risk: "high",
    re: /(언제든|언제든지)[^.\n]{0,40}해지할 수 있|일방적[^.\n]{0,20}해지|may terminate[^.\n]{0,60}for convenience|terminate this agreement at any time/i,
    why: "Only one side can end the contract early, at will. The other side is locked in even if the work or the relationship breaks down.",
    counterProposal:
      "Make termination mutual: either party may terminate with at least 30 days' written notice, and work already performed is paid in full.",
  },
  {
    category: "excessive-penalty",
    title: "Excessive penalty clause",
    risk: "high",
    re: /계약금액의\s*(\d+)\s*%\s*에 해당하는 위약금|위약금[^.\n]{0,20}(\d+)\s*%|liquidated damages of\s*(\d+)\s*%/i,
    why: "The penalty is charged as a large fixed share of the whole contract value, on top of separate damages. Courts often reduce penalties that far exceed the actual loss, but you would have to fight for that reduction.",
    counterProposal:
      "Cap the penalty at 10% of the contract value, state that it is the full remedy for the breach, and remove the separate open-ended damages claim.",
  },
  {
    category: "rights-waiver",
    title: "Blanket rights waiver",
    risk: "high",
    re: /모든 권리를 포기|일체의 권리[^.\n]{0,30}포기|waives? (any|all|the) right|waiver of[^.\n]{0,30}rights?/i,
    why: "A blanket waiver gives up rights you may not even know you have yet, including rights that cannot legally be waived in advance in many jurisdictions.",
    counterProposal:
      "Limit the transfer to the final deliverables listed in the contract, keep moral rights and pre-existing IP with the creator, and delete the blanket waiver.",
  },
  {
    category: "auto-renewal",
    title: "Auto-renewal trap",
    risk: "medium",
    re: /자동으로 갱신|자동 갱신|automatically renews?|auto-?renew/i,
    why: "The contract renews by itself unless you object long before the deadline. Miss the notice window once and you are committed for another full term.",
    counterProposal:
      "Shorten the non-renewal notice window to 30 days, require a reminder from the other party 45 days before the deadline, and cap any price increase at renewal to 5%.",
  },
  {
    category: "unilateral-change",
    title: "Terms can be changed unilaterally",
    risk: "high",
    re: /may (change|modify)[^.\n]{0,80}(at any time|sole discretion)|사전 통지 없이[^.\n]{0,20}변경|일방적[^.\n]{0,20}변경할 수 있/i,
    why: "The other side can rewrite the deal, including prices, at any moment, and your continued use counts as agreement. You could end up bound by terms you never negotiated.",
    counterProposal:
      "Changes require 30 days' written notice, price changes apply only from the next term, and you may terminate without penalty if you do not accept a change.",
  },
  {
    category: "liability-waiver",
    title: "Broad liability waiver",
    risk: "medium",
    re: /shall not be liable|어떠한 손해[^.\n]{0,20}책임지지|책임지지 않/i,
    why: "The provider excludes liability even for serious losses, so if the service fails at a critical moment you may have no practical remedy.",
    counterProposal:
      "Cap liability at the fees paid in the last 12 months instead of excluding it, and carve out wilful misconduct, gross negligence and data breaches.",
  },
  {
    category: "non-compete",
    title: "Non-compete restriction",
    risk: "medium",
    re: /경업금지|동종 업계[^.\n]{0,30}할 수 없|동종 업체[^.\n]{0,20}취업할 수 없|non-?compete/i,
    why: "A broad non-compete can block your livelihood after the contract ends. Long, industry-wide bans are frequently narrowed or struck down, but only after a dispute.",
    counterProposal:
      "Limit the non-compete to named direct competitors, shorten it to 6 months, and tie it to a paid restriction period.",
  },
];

/** Sentence (or line) containing the match, trimmed for display. */
function sentenceAround(text: string, index: number, matchLen: number): string {
  const start = Math.max(
    text.lastIndexOf("\n", index),
    text.lastIndexOf(". ", index),
    text.lastIndexOf("。", index),
  );
  let end = text.indexOf("\n", index + matchLen);
  if (end === -1) end = text.length;
  const dot = text.indexOf(". ", index + matchLen);
  if (dot !== -1 && dot < end) end = dot + 1;
  return text.slice(start + 1, end).trim().slice(0, 300);
}

export function localReview(maskedText: string): ReviewResult {
  const clauses: ClauseFinding[] = [];
  const seen = new Set<ClauseCategory>();

  for (const p of PATTERNS) {
    const m = p.re.exec(maskedText);
    if (!m || seen.has(p.category)) continue;
    seen.add(p.category);

    let risk = p.risk;
    let why = p.why;
    if (p.category === "excessive-penalty") {
      const pct = Number(m[1] ?? m[2] ?? m[3]);
      if (Number.isFinite(pct)) {
        why = `The penalty is fixed at ${pct}% of the contract value, on top of separate damages. Penalties far above the actual expected loss are often reduced by courts, but only after a dispute.`;
        risk = pct >= 30 ? "high" : pct >= 15 ? "medium" : "low";
      }
    }

    clauses.push({
      category: p.category,
      title: p.title,
      risk,
      quote: sentenceAround(maskedText, m.index, m[0].length),
      why,
      counterProposal: p.counterProposal,
    });
  }

  const high = clauses.filter((c) => c.risk === "high").length;
  const summary =
    clauses.length === 0
      ? "The basic on-device scan found none of the common one-sided clause patterns. This is a pattern scan, not legal advice; the cloud review reads the full text more deeply."
      : `The basic on-device scan flagged ${clauses.length} clause${clauses.length > 1 ? "s" : ""}` +
        (high > 0 ? `, ${high} of them high risk` : "") +
        ". This is a pattern scan of the masked text, not legal advice.";

  return {
    source: "on-device",
    clauses,
    summary,
    negotiationPoints: clauses.map((c) => `${c.title}: ${c.counterProposal}`),
  };
}
