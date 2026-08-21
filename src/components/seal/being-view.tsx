import { Link } from "@tanstack/react-router";
import { HOUSE } from "@/lib/seal/house";
import { usd, people } from "@/lib/seal/format";
import type { Being } from "@/lib/seal/types";
import { value } from "@/lib/seal/valuation";
import { CHANNELS, COMPETITORS } from "@/lib/seal/field";
import { SealMark } from "./mark";
import { Funds, Note, Stat } from "./ui";

export function BeingView({ being, stamped }: { being: Being; stamped: boolean }) {
  const v = value(being);
  const channel = CHANNELS.find((c) => c.beingId === being.id);
  const rival = COMPETITORS.find((c) => c.beingId === being.id);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <SealMark mark={being.mark} color={being.color} size="lg" />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">{being.tag}</p>
          <h1 className="mt-2 font-serif text-5xl tracking-tight md:text-6xl">{being.name}</h1>
          <p className="mt-3 text-lg text-muted">{being.line}</p>
          <p className="mt-2 text-sm text-faint">{being.legalLine}</p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest text-faint">Stage</dt>
              <dd className="mt-1 font-mono">{being.stage}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-faint">IP</dt>
              <dd className="mt-1 font-mono">{HOUSE.patent.docket}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-faint">Ask</dt>
              <dd className="mt-1 font-mono">
                {usd(being.ask)} {being.round}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-faint">This round</dt>
              <dd className="mt-1 font-mono">
                {being.fieldUnits.toLocaleString()} {being.fieldLabel}
              </dd>
            </div>
            {stamped ? (
              <div>
                <dt className="text-xs uppercase tracking-widest text-faint">Stamp</dt>
                <dd className="mt-1 font-mono">Seated</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </div>

      <section className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Stat k="TAM" v={usd(v.tam)} hint={`from ${usd(v.tamRaw)} sourced headline`} />
        <Stat k="SAM" v={usd(v.sam)} hint="Channel, written" />
        <Stat
          k="SOM"
          v={usd(v.som)}
          hint={`${people(being.som.units)} ${being.som.unitLabel} × ${usd(being.som.arpu)}`}
        />
      </section>
      <p className="mt-3 text-sm text-muted">{being.tamHow}</p>
      <p className="mt-2 text-sm text-muted">{being.somHow}</p>
      {being.comparable ? (
        <div className="mt-4">
          <Note>
            <span className="block text-xs uppercase tracking-widest text-faint">
              Comparable — not our price
            </span>
            ${being.comparable.low.toLocaleString()}–${being.comparable.high.toLocaleString()} /{" "}
            {being.comparable.unit}. {being.comparable.note}
          </Note>
        </div>
      ) : null}
      <p className="mt-2 text-xs text-faint">
        This-round model: {being.fieldUnits.toLocaleString()} × {usd(being.som.arpu)} ={" "}
        {usd(v.fieldDollars)}. That is not booked revenue.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <article>
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">Problem</h2>
          <p className="mt-3 max-w-prose">{being.problem}</p>
        </article>
        <article>
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">Solution</h2>
          <p className="mt-3 max-w-prose">{being.solution}</p>
        </article>
        <article>
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">Thesis</h2>
          <p className="mt-3 max-w-prose">{being.thesis}</p>
        </article>
        <article>
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">Why this round</h2>
          <p className="mt-3 max-w-prose">{being.whyThisRound}</p>
        </article>
      </div>

      {channel ? (
        <section className="mt-12 grid gap-3 md:grid-cols-3">
          <Note>
            <span className="block text-xs uppercase tracking-widest text-faint">Who buys</span>
            {channel.whoBuys}
          </Note>
          <Note>
            <span className="block text-xs uppercase tracking-widest text-faint">Who sells this round</span>
            {channel.whoSells}
          </Note>
          <Note>
            <span className="block text-xs uppercase tracking-widest text-faint">Not yet — do not say it is</span>
            {channel.notYet}
          </Note>
        </section>
      ) : null}

      {rival ? (
        <section className="mt-8 rounded-xl border border-line bg-surface p-5">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">In the room already</h2>
          <p className="mt-3">{rival.names}</p>
          <p className="mt-3 text-sm text-muted">We win: {rival.weWin}</p>
          <p className="mt-2 text-sm text-muted">We lose if: {rival.weLoseIf}</p>
        </section>
      ) : null}

      <section className="mt-12">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted">Architecture</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {being.architecture.map((line) => (
            <li key={line} className="rounded-lg border border-line bg-surface px-4 py-3">
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-muted">Covered invention: {being.coveredInvention}</p>
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <article>
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">Safety law</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {being.safety.map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">We refuse</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {being.refuse.map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <article>
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">Built</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {being.built.map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
            Not yet — do not say it is
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {being.notYet.map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
          Use of funds · {usd(being.ask)}
        </h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-surface px-4">
          <Funds ask={being.ask} lines={being.useOfFunds} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted">Risks we name first</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {being.risks.map((line) => (
            <li key={line} className="rounded-lg border border-line px-4 py-3">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/closer/$beingId"
          params={{ beingId: being.id }}
          className="inline-flex min-h-11 items-center rounded-md bg-wax px-5 text-sm font-medium text-wax-fg"
        >
          Walk the close
        </Link>
        <Link
          to="/math"
          className="inline-flex min-h-11 items-center rounded-md border border-line px-5 text-sm"
        >
          Open the sources
        </Link>
        <Link
          to="/field"
          className="inline-flex min-h-11 items-center rounded-md border border-line px-5 text-sm"
        >
          Open the field plan
        </Link>
      </div>
    </main>
  );
}
