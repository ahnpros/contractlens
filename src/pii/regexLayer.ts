import type { Finding, PiiType } from "./types";

/**
 * Deterministic detection layer.
 *
 * Two kinds of rules:
 *  - "regex": structured patterns that are reliable anywhere in the text
 *    (emails, resident-registration numbers, phone numbers, card numbers,
 *    bank-account-like digit groups, road addresses).
 *  - "field": labelled form fields that are typical in contracts
 *    (e.g. "대표자: 이서연", "계좌번호: 123456-78-901234", "Address: ...").
 *    The label anchors the value, so names and bare digit strings can be
 *    caught without guessing at ordinary prose.
 *
 * This layer is a safety net UNDER the on-device model: it runs instantly,
 * offline, with no model at all, and every hit is attributed to its rule.
 */

interface RuleHit {
  type: PiiType;
  value: string;
  start: number;
  end: number;
}

function collect(
  text: string,
  re: RegExp,
  type: PiiType,
  group = 0,
  validate?: (value: string) => boolean,
): RuleHit[] {
  const hits: RuleHit[] = [];
  re.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const value = m[group];
    if (!value) continue;
    if (validate && !validate(value)) continue;
    const start = group === 0 ? m.index : m.index + m[0].indexOf(value);
    hits.push({ type, value, start, end: start + value.length });
    if (m[0].length === 0) re.lastIndex++;
  }
  return hits;
}

const digitCount = (s: string) => s.replace(/\D/g, "").length;

/** Structured patterns, valid anywhere in the document. Layer: "regex". */
export function regexDetect(text: string): Finding[] {
  const hits: RuleHit[] = [];

  // Email
  hits.push(
    ...collect(
      text,
      /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/g,
      "EMAIL",
    ),
  );

  // Korean resident registration number: YYMMDD-[1-4]XXXXXX
  hits.push(...collect(text, /\b\d{6}-[1-4]\d{6}\b/g, "RRN"));

  // Card number: 4x4 hyphenated digits
  hits.push(...collect(text, /\b\d{4}-\d{4}-\d{4}-\d{4}\b/g, "CARD"));

  // Korean mobile / landline phone numbers
  hits.push(
    ...collect(text, /\b01[016789]-\d{3,4}-\d{4}\b/g, "PHONE"),
    ...collect(text, /\b0\d{1,2}-\d{3,4}-\d{4}\b/g, "PHONE"),
    ...collect(text, /\b01[016789]\d{7,8}\b/g, "PHONE"),
  );

  // International phone, e.g. +1-415-555-0132
  hits.push(...collect(text, /\+\d{1,3}-\d{3}-\d{3,4}-\d{4}\b/g, "PHONE"));

  // Bank-account-like digit groups: 2-3 hyphenated groups, 10-16 digits total.
  // (Phone/RRN/card spans overlap-resolve against this in mask.ts by priority.)
  hits.push(
    ...collect(
      text,
      /\b\d{2,6}-\d{2,6}(?:-\d{2,7})?\b/g,
      "ACCOUNT",
      0,
      (v) => {
        const n = digitCount(v);
        return n >= 10 && n <= 16;
      },
    ),
  );

  // Korean road addresses (metropolitan: 특별시/광역시 + 구; province: 도 + 시 + 구/군)
  hits.push(
    ...collect(
      text,
      /(?:서울특별시|부산광역시|대구광역시|인천광역시|광주광역시|대전광역시|울산광역시|세종특별자치시)\s+[가-힣]{1,}(?:구|군)\s+[가-힣0-9]{1,}(?:로|길)\s*\d+(?:-\d+)?(?:\s*,\s*\d+층)?/g,
      "ADDRESS",
    ),
    ...collect(
      text,
      /(?:경기도|강원특별자치도|강원도|충청북도|충청남도|전북특별자치도|전라북도|전라남도|경상북도|경상남도|제주특별자치도)\s+[가-힣]{1,}시\s+[가-힣]{1,}(?:구|군)\s+[가-힣0-9]{1,}(?:로|길)\s*\d+(?:-\d+)?(?:\s*,\s*\d+층)?/g,
      "ADDRESS",
    ),
  );

  // US-style street address
  hits.push(
    ...collect(
      text,
      /\b\d{1,6}\s+[A-Z][A-Za-z.]*(?:\s+[A-Z][A-Za-z.]*)*\s+(?:Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Lane|Ln\.|Drive|Dr\.)(?:\s*,\s*[A-Za-z .]+,\s*[A-Z]{2}\s+\d{5})?/g,
      "ADDRESS",
    ),
  );

  return hits.map((h) => ({ ...h, layer: "regex" as const }));
}

/** Label-anchored fields, typical in contract headers. Layer: "field". */
export function fieldDetect(text: string): Finding[] {
  const hits: RuleHit[] = [];

  // Korean person-name labels: 대표자: 이서연 / 수급자): 김민준 / 성명: 홍길동
  hits.push(
    ...collect(
      text,
      /(?:대표자|담당자|성명|이름|수급자|계약자)\s*\)?\s*[:：]\s*([가-힣]{2,4})(?![가-힣])/g,
      "NAME",
      1,
    ),
  );

  // English person-name labels: Customer: Jane Cooper / Full name: John Smith
  hits.push(
    ...collect(
      text,
      /(?:Full name|Customer|Client|Contractor|Account holder|Name)\s*[:：]\s*([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,2})/g,
      "NAME",
      1,
    ),
  );

  // Account number labels followed by bare digits (no hyphens), 10-16 digits.
  // Korean bank name may precede the digits: 계좌번호: 국민은행 123456-78-901234
  hits.push(
    ...collect(
      text,
      /(?:계좌번호|계좌|Account(?:\s*number)?|Payment account)\s*[:：]?\s*(?:[가-힣]{2,6}은행\s*)?(\d[\d-]{8,18}\d)/g,
      "ACCOUNT",
      1,
      (v) => {
        const n = digitCount(v);
        return n >= 10 && n <= 16;
      },
    ),
  );

  // Address labels: take the rest of the line.
  hits.push(
    ...collect(
      text,
      /(?:주소|Address|Billing address)\s*[:：]\s*([^\n]{6,80})/g,
      "ADDRESS",
      1,
      (v) => /\d/.test(v),
    ),
  );

  return hits.map((h) => ({ ...h, layer: "field" as const }));
}

/** Both deterministic layers. */
export function deterministicDetect(text: string): Finding[] {
  return [...regexDetect(text), ...fieldDetect(text)];
}
