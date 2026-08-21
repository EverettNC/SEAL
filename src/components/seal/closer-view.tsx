import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { BEINGS, beingById } from "@/lib/seal/catalog";
import { usd, people } from "@/lib/seal/format";
import { HOUSE } from "@/lib/seal/house";
import { useStamps } from "@/lib/seal/stamps";
import type { PipelineStepId } from "@/lib/seal/types";
import { value } from "@/lib/seal/valuation";
import { Button } from "@/components/ui/button";
import { SealMark } from "./mark";
import { Funds, Kicker, Note, Stat } from "./ui";
import { cn } from "@/lib/utils";

const STEPS: { id: PipelineStepId; label: string }[] = [
  { id: "intake", label: "Intake" },
  { id: "dossier", label: "Dossier" },
  { id: "thesis", label: "Thesis" },
  { id: "math", label: "Math" },
  { id: "ask", label: "Ask" },
  { id: "close", label: "Close" },
];

export function CloserView({ beingId }: { beingId?: string }) {
  const navigate = useNavigate();
  const stamps = useStamps((s) => s.stamps);
  const stamp = useStamps((s) => s.stamp);
  const [picked, setPicked] = useState(beingId ?? BEINGS[0]?.id ?? "alphawolf");
  const current = beingById(beingId ?? picked) ?? BEINGS[0];
  const v = useMemo(() => (current ? value(current) : null), [current]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (beingId) {
      setPicked(beingId);
      setStep(0);
    }
  }, [beingId]);

  if (!current || !v) return null;
  const currentStep = STEPS[step] ?? STEPS[0];
  const stamped = Boolean(stamps[current.id]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Kicker>Closer</Kicker>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">Walk the close.</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Six steps. The math does not move because someone wants a bigger slide. Stamp only what
        you will say out loud.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {BEINGS.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => {
              setPicked(b.id);
              setStep(0);
              void navigate({ to: "/closer/$beingId", params: { beingId: b.id } });
            }}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm",
              current.id === b.id ? "border-wax bg-wax text-wax-fg" : "border-line bg-surface",
            )}
          >
            {b.name}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[220px_1fr]">
        <ol className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
          {STEPS.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => setStep(i)}
                className={cn(
                  "flex min-h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm",
                  i === step ? "bg-raised text-fg" : "text-muted",
                )}
              >
                <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </button>
            </li>
          ))}
        </ol>

        <section className="rounded-xl border border-line bg-surface p-5 md:p-8">
          <div className="flex items-start gap-4">
            <SealMark mark={current.mark} color={current.color} size="sm" />
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-faint">
                {currentStep.label}
              </p>
              <h2 className="mt-1 font-serif text-3xl">{current.name}</h2>
            </div>
          </div>
          <p className="mt-6 max-w-prose text-lg">{current.pipeline[currentStep.id]}</p>

          {currentStep.id === "math" ? (
            <>
              <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Stat k="TAM" v={usd(v.tam)} hint={current.tamHow} />
                <Stat k="SAM" v={usd(v.sam)} hint={current.samHow} />
                <Stat
                  k="SOM"
                  v={usd(v.som)}
                  hint={`${people(current.som.units)} × ${usd(current.som.arpu)}`}
                />
              </dl>
              {current.comparable ? (
                <div className="mt-4">
                  <Note>
                    <span className="block text-xs uppercase tracking-widest text-faint">
                      Comparable — not our price
                    </span>
                    ${current.comparable.low.toLocaleString()}–$
                    {current.comparable.high.toLocaleString()} / {current.comparable.unit}.{" "}
                    {current.comparable.note}
                  </Note>
                </div>
              ) : null}
            </>
          ) : null}

          {currentStep.id === "ask" ? (
            <div className="mt-8">
              <p className="font-mono text-3xl">
                {usd(current.ask)} <span className="text-lg text-muted">{current.round}</span>
              </p>
              <p className="mt-2 text-sm text-muted">
                Buys {current.fieldUnits.toLocaleString()} {current.fieldLabel}. Modeled{" "}
                {usd(v.fieldDollars)} at list. Not booked.
              </p>
              <div className="mt-6 overflow-x-auto">
                <Funds ask={current.ask} lines={current.useOfFunds} />
              </div>
            </div>
          ) : null}

          {currentStep.id === "close" ? (
            <div className="mt-8">
              <p className="font-mono text-sm text-muted">
                {current.stage} · {HOUSE.patent.docket} · {HOUSE.patent.status}
              </p>
              {stamped ? (
                <p className="mt-4 text-sm">This close is already stamped on the ledger.</p>
              ) : (
                <Button tone="wax" className="mt-6" onClick={() => stamp(current.id)}>
                  Stamp the close
                </Button>
              )}
            </div>
          ) : null}

          <div className="mt-10 flex flex-wrap gap-3">
            <Button disabled={step === 0} onClick={() => setStep((n) => Math.max(0, n - 1))}>
              Back
            </Button>
            {step < STEPS.length - 1 ? (
              <Button
                tone="paper"
                onClick={() => setStep((n) => Math.min(STEPS.length - 1, n + 1))}
              >
                Next
              </Button>
            ) : (
              <Link
                to="/beings/$beingId"
                params={{ beingId: current.id }}
                className="inline-flex min-h-11 items-center rounded-md border border-line px-4 text-sm"
              >
                Open the dossier
              </Link>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
