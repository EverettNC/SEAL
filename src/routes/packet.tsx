import { createFileRoute } from "@tanstack/react-router";
import { SealMark } from "@/components/seal/mark";
import { Button } from "@/components/ui/button";
import { BEINGS } from "@/lib/seal/catalog";
import { usd, pct } from "@/lib/seal/format";
import { HOUSE } from "@/lib/seal/house";
import { useTake } from "@/lib/seal/take";
import { INSTRUMENT } from "@/lib/seal/terms";
import { familyUseOfFunds, value, valueAll } from "@/lib/seal/valuation";

export const Route = createFileRoute("/packet")({ component: PacketPage });

function PacketPage() {
  const family = valueAll(BEINGS);
  const funds = familyUseOfFunds(BEINGS);
  const openTake = useTake((s) => s.openTake);


  return (
    <div className="bg-paper text-paper-ink">
      <div className="no-print mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <p className="text-sm text-paper-muted">Printable partner packet · cream paper</p>
        <Button tone="wax" onClick={() => void openTake({ download: "html" })}>
          Print
        </Button>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-8 md:px-0 md:py-12">
        <header className="border-b border-paper-line pb-6">
          <p className="font-display text-sm tracking-[0.35em]">SEAL</p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight">The Christman AI Project LLC</h1>
          <p className="mt-2 text-paper-muted">
            {HOUSE.formed}. Operating as {HOUSE.trade}. {HOUSE.operates}.
          </p>
          <p className="mt-4 max-w-xl">
            Five beings. Sourced math. One close at a time. Burden is not TAM. Provisional is
            pending. Inception is membership. No revenue is printed because none has been
            collected.
          </p>
        </header>

        <section className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <PacketStat k="Family TAM" v={usd(family.tam)} />
          <PacketStat k="Family SAM" v={usd(family.sam)} />
          <PacketStat k="Family SOM" v={usd(family.som)} />
          <PacketStat k="Family ask" v={usd(family.ask)} />
        </section>
        <p className="mt-3 text-xs text-paper-muted">
          This-round field modeled {usd(family.fieldDollars)} at list. Not booked. Paper:{" "}
          {INSTRUMENT.paper}. Cap is blank. Conversion of {HOUSE.patent.docket} due{" "}
          {INSTRUMENT.conversion.due}.
        </p>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">Law</h2>
          <ul className="mt-3 space-y-1 text-sm">
            {HOUSE.law.map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">Five beings</h2>
          <ul className="mt-4 space-y-4">
            {BEINGS.map((being) => {
              const v = value(being);
              return (
                <li
                  key={being.id}
                  className="flex items-start gap-4 border-b border-paper-line pb-4 last:border-0"
                >
                  <SealMark mark={being.mark} color={being.color} size="sm" />
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-xl">
                      {being.name}{" "}
                      <span className="font-sans text-xs uppercase tracking-widest text-paper-muted">
                        {being.stage}
                      </span>
                    </p>
                    <p className="text-sm text-paper-muted">{being.line}</p>
                    <p className="mt-2 font-mono text-xs">
                      TAM {usd(v.tam)} · SAM {usd(v.sam)} · SOM {usd(v.som)} · ask {usd(being.ask)}{" "}
                      · {being.fieldUnits.toLocaleString()} {being.fieldLabel}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">One-check use of funds · {usd(family.ask)}</h2>
          <ul className="mt-3 space-y-1 text-sm">
            {funds.map((row) => (
              <li key={row.label} className="flex justify-between gap-4 border-b border-paper-line py-2">
                <span>
                  {row.label}{" "}
                  <span className="text-paper-muted">({pct(row.pct)})</span>
                </span>
                <span className="font-mono">{usd(row.dollars)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">Paper</h2>
          <p className="mt-3 text-sm">{INSTRUMENT.paperNote}</p>
          <p className="mt-3 text-sm">
            {HOUSE.patent.docket} · filed {HOUSE.patent.filed} · {HOUSE.patent.status}.{" "}
            {HOUSE.inventor}
          </p>
          <p className="mt-3 text-sm">
            Contact {HOUSE.contact} · {HOUSE.web}
          </p>
        </section>

        <p className="mt-12 font-display text-xs tracking-[0.3em] text-paper-muted">
          STAMP ONLY WHAT YOU WILL SAY OUT LOUD
        </p>
      </article>
    </div>
  );
}

function PacketStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border border-paper-line px-3 py-3">
      <p className="text-xs uppercase tracking-widest text-paper-muted">{k}</p>
      <p className="mt-1 font-mono text-xl tabular-nums">{v}</p>
    </div>
  );
}
