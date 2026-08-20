import type { Being, Valuation } from "./types";

/** Twenty percent off the headline TAM. We do not sell the top of the range. */
export const HAIRCUT = 0.8;
/** Serviceable slice of the already-cut TAM. */
export const SAM_SHARE = 0.2;
/** Reachable slice of SAM in the window of this round. */
export const SOM_SHARE = 0.025;

export function value(being: Being): Valuation {
  const tam = being.tamRaw * HAIRCUT;
  const sam = tam * SAM_SHARE;
  const som = sam * SOM_SHARE;
  return {
    tamRaw: being.tamRaw,
    tam,
    sam,
    som,
    ask: being.ask,
    haircut: HAIRCUT,
    samShare: SAM_SHARE,
    somShare: SOM_SHARE,
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
        samShare: SAM_SHARE,
        somShare: SOM_SHARE,
      };
    },
    {
      tamRaw: 0,
      tam: 0,
      sam: 0,
      som: 0,
      ask: 0,
      haircut: HAIRCUT,
      samShare: SAM_SHARE,
      somShare: SOM_SHARE,
    } satisfies Valuation,
  );
}
