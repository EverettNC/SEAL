import { HAIRCUT } from "./catalog";
import type { Being, Valuation } from "./types";

export { HAIRCUT };

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
