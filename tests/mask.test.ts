import { describe, expect, it } from "vitest";
import { SAMPLE_EN, SAMPLE_KO } from "../src/samples";
import { deterministicDetect } from "../src/pii/regexLayer";
import { maskText } from "../src/pii/mask";
import { localReview } from "../src/ai/localReview";

describe("Korean sample: every planted PII item is masked", () => {
  const { maskedText, items } = maskText(SAMPLE_KO, deterministicDetect(SAMPLE_KO));

  const planted = [
    "이서연",
    "010-9876-5432",
    "seoyeon.lee@hanbitsoft.example.com",
    "테헤란로 123",
    "김민준",
    "900423-2123456",
    "010-1234-5678",
    "minjun.kim@example.com",
    "판교로 45",
    "301호",
    "123456-78-901234",
  ];

  for (const value of planted) {
    it(`masks ${value}`, () => {
      expect(maskedText).not.toContain(value);
    });
  }

  it("finds 10 items in total", () => {
    expect(items.length).toBe(10);
  });

  it("attributes names to the form-field layer", () => {
    const names = items.filter((i) => i.type === "NAME");
    expect(names.map((n) => n.value).sort()).toEqual(["김민준", "이서연"]);
    expect(names.every((n) => n.layer === "field")).toBe(true);
  });

  it("does not over-mask ordinary contract content", () => {
    for (const keep of ["5,000,000원", "50%", "2026년 1월 5일", "한빛소프트", "위약금", "자동으로 갱신"]) {
      expect(maskedText).toContain(keep);
    }
  });
});

describe("English sample: every planted PII item is masked", () => {
  const { maskedText, items } = maskText(SAMPLE_EN, deterministicDetect(SAMPLE_EN));

  const planted = [
    "Jane Cooper",
    "jane.cooper@example.com",
    "+1-415-555-0132",
    "Mission Street",
    "94112",
    "001122334455",
  ];

  for (const value of planted) {
    it(`masks ${value}`, () => {
      expect(maskedText).not.toContain(value);
    });
  }

  it("finds 5 items in total", () => {
    expect(items.length).toBe(5);
  });

  it("does not over-mask ordinary terms content", () => {
    for (const keep of ["20%", "90 days", "12-month", "automatically renews"]) {
      expect(maskedText).toContain(keep);
    }
  });
});

describe("on-device basic review (deterministic clause scan)", () => {
  it("flags the planted risky clauses in the Korean sample", () => {
    const { maskedText } = maskText(SAMPLE_KO, deterministicDetect(SAMPLE_KO));
    const review = localReview(maskedText);
    const cats = review.clauses.map((c) => c.category);
    expect(cats).toContain("unilateral-termination");
    expect(cats).toContain("excessive-penalty");
    expect(cats).toContain("rights-waiver");
    expect(cats).toContain("auto-renewal");
    expect(cats).toContain("non-compete");
    const penalty = review.clauses.find((c) => c.category === "excessive-penalty");
    expect(penalty?.risk).toBe("high");
    expect(review.source).toBe("on-device");
  });

  it("flags the planted risky clauses in the English sample", () => {
    const { maskedText } = maskText(SAMPLE_EN, deterministicDetect(SAMPLE_EN));
    const review = localReview(maskedText);
    const cats = review.clauses.map((c) => c.category);
    expect(cats).toContain("auto-renewal");
    expect(cats).toContain("unilateral-change");
    expect(cats).toContain("unilateral-termination");
    expect(cats).toContain("rights-waiver");
    expect(cats).toContain("liability-waiver");
  });

  it("quotes come from the masked text (placeholders, never raw PII)", () => {
    const { maskedText } = maskText(SAMPLE_KO, deterministicDetect(SAMPLE_KO));
    const review = localReview(maskedText);
    for (const c of review.clauses) {
      expect(maskedText).toContain(c.quote);
      expect(c.quote).not.toContain("김민준");
      expect(c.quote).not.toContain("010-");
    }
  });
});
