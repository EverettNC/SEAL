import { HAIRCUT } from "./catalog";
import type { Being, Valuation } from "./types";

export { HAIRCUT };

export const FUND_BUCKETS = ["Field", "Engineering", "Clinical", "IP", "Runway"] as const;
export type FundBucket = (typeof FUND_BUCKETS)[number];

export function somOf(being: Being): number {
  return being.som.units * being.som.arpu;
}

export function value(being: Being): Valuation {
  const tam = being.tamRaw * HAIRCUT;
  return {
    tamRaw: being.tamRaw,
    tam,
    sam: being.sam,
    som: somOf(being),
    ask: being.ask,
    haircut: HAIRCUT,
    fieldDollars: being.fieldUnits * being.som.arpu,
  };
}

export function valueAll(beings: Being[]): Valuation {
  return beings.reduce(
    (acc, being) => {
      const v = value(being);
      return {
        tamRaw: acc.tamRaw + v.tamRaw,
        tam: acc.tam + v.tam,
        sam: acc.sam + v.sam,
        som: acc.som + v.som,
        ask: acc.ask + v.ask,
        haircut: HAIRCUT,
        fieldDollars: acc.fieldDollars + v.fieldDollars,
      };
    },
    {
      tamRaw: 0,
      tam: 0,
      sam: 0,
      som: 0,
      ask: 0,
      haircut: HAIRCUT,
      fieldDollars: 0,
    } satisfies Valuation,
  );
}

export function bucketOf(label: string): FundBucket {
  const l = label.toLowerCase();
  if (l.includes("ip conversion")) return "IP";
  if (l.includes("runway")) return "Runway";
  if (l.includes("clinical") || l.includes("caregiver")) return "Clinical";
  if (l.includes("field") || l.includes("studio")) return "Field";
  return "Engineering";
}

export function familyUseOfFunds(beings: Being[]) {
  const acc: Record<FundBucket, number> = {
    Field: 0,
    Engineering: 0,
    Clinical: 0,
    IP: 0,
    Runway: 0,
  };
  let ask = 0;
  for (const being of beings) {
    ask += being.ask;
    for (const line of being.useOfFunds) {
      acc[bucketOf(line.label)] += being.ask * line.pct;
    }
  }
  return FUND_BUCKETS.map((label) => ({
    label,
    dollars: acc[label],
    pct: ask === 0 ? 0 : acc[label] / ask,
  }));
}
