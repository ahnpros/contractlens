import type { Finding, MaskResult, PiiType } from "./types";

/**
 * Overlap priority: when two findings cover the same characters, the more
 * specific type wins (an email is never "part of an address"), and a longer
 * span wins over a shorter one at the same priority.
 */
const TYPE_PRIORITY: Record<PiiType, number> = {
  EMAIL: 0,
  RRN: 1,
  CARD: 2,
  PHONE: 3,
  ACCOUNT: 4,
  ADDRESS: 5,
  NAME: 6,
};

/** Merge findings from all layers, resolve overlaps, sort in document order. */
export function mergeFindings(findings: Finding[]): Finding[] {
  const sorted = [...findings].sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    const p = TYPE_PRIORITY[a.type] - TYPE_PRIORITY[b.type];
    if (p !== 0) return p;
    return b.end - b.start - (a.end - a.start);
  });

  const accepted: Finding[] = [];
  for (const f of sorted) {
    if (f.end <= f.start || !f.value) continue;
    const overlaps = accepted.some((a) => f.start < a.end && a.start < f.end);
    if (!overlaps) accepted.push(f);
  }
  return accepted.sort((a, b) => a.start - b.start);
}

/** Replace each finding with a stable token like [PHONE_1]. */
export function applyMask(text: string, findings: Finding[]): MaskResult {
  const counters = new Map<PiiType, number>();
  const items = findings.map((f) => {
    const n = (counters.get(f.type) ?? 0) + 1;
    counters.set(f.type, n);
    return { ...f, token: `[${f.type}_${n}]` };
  });

  let out = "";
  let cursor = 0;
  for (const item of items) {
    out += text.slice(cursor, item.start) + item.token;
    cursor = item.end;
  }
  out += text.slice(cursor);
  return { maskedText: out, items };
}

export function maskText(text: string, findings: Finding[]): MaskResult {
  return applyMask(text, mergeFindings(findings));
}
