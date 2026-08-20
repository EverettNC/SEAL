export type Stage = "LAB" | "FIELD" | "ASK" | "CLOSED";

export type PipelineStepId =
  | "intake"
  | "dossier"
  | "thesis"
  | "math"
  | "ask"
  | "close";

export type Being = {
  id: string;
  mark: string;
  name: string;
  tag: string;
  line: string;
  stage: Stage;
  patent: string;
  /** Headline TAM before the conservative haircut. */
  tamRaw: number;
  ask: number;
  round: string;
  color: string;
  thesis: string;
  whyThisRound: string;
  pipeline: Record<PipelineStepId, string>;
};

export type Valuation = {
  tamRaw: number;
  tam: number;
  sam: number;
  som: number;
  ask: number;
  haircut: number;
  samShare: number;
  somShare: number;
};
