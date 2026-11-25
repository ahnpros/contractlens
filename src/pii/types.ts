export type PiiType =
  | "NAME"
  | "RRN"
  | "PHONE"
  | "EMAIL"
  | "ACCOUNT"
  | "ADDRESS"
  | "CARD";

/** Which detection layer produced a finding. Shown honestly in the UI. */
export type Layer = "regex" | "field" | "model";

export interface Finding {
  type: PiiType;
  /** The exact substring found in the source text. Never leaves the device. */
  value: string;
  start: number;
  end: number;
  layer: Layer;
}

export interface MaskResult {
  maskedText: string;
  /** Findings in document order, each with its assigned placeholder token. */
  items: Array<Finding & { token: string }>;
}
