export type Stage = "LAB" | "FIELD";

export type PipelineStepId =
  | "intake"
  | "dossier"
  | "thesis"
  | "math"
  | "ask"
  | "close";

export type Citation = {
  id: string;
  title: string;
  publisher: string;
  year: string;
  url: string;
  usedFor: string;
};

export type FundLine = {
  label: string;
  pct: number;
  note: string;
};

export type BottomsUp = {
  units: number;
  unitLabel: string;
  arpu: number;
  window: string;
};

export type Being = {
  id: string;
  mark: string;
  name: string;
  legalLine: string;
  tag: string;
  line: string;
  stage: Stage;
  round: string;
  ask: number;
  fieldUnits: number;
  fieldLabel: string;
  color: string;
  coveredInvention: string;
  architecture: string[];
  safety: string[];
  thesis: string;
  whyThisRound: string;
  problem: string;
  solution: string;
  /** Sourced category or unit-ceiling we haircut. Not societal burden. */
  tamRaw: number;
  tamHow: string;
  sam: number;
  samHow: string;
  som: BottomsUp;
  somHow: string;
  comparable?: {
    low: number;
    high: number;
    unit: string;
    note: string;
  };
  refuse: string[];
  useOfFunds: FundLine[];
  risks: string[];
  built: string[];
  notYet: string[];
  pipeline: Record<PipelineStepId, string>;
  citations: string[];
};

export type Valuation = {
  tamRaw: number;
  tam: number;
  sam: number;
  som: number;
  ask: number;
  haircut: number;
  fieldDollars: number;
};
