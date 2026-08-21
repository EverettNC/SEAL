import { createFileRoute, Link } from "@tanstack/react-router";
import { SealMark } from "@/components/seal/mark";
import { CopyListenRow } from "@/components/seal/desk-tools";
import { Kicker, Note, Stat } from "@/components/seal/ui";
import { BEINGS, HAIRCUT } from "@/lib/seal/catalog";
import { usd, pct } from "@/lib/seal/format";
import { HEALTH_FOR } from "@/lib/seal/health";
import { HOUSE } from "@/lib/seal/house";
import { PARTNER_PATH } from "@/lib/seal/nav";
import { useStamps } from "@/lib/seal/stamps";
import { INSTRUMENT } from "@/lib/seal/terms";
import { value, valueAll } from "@/lib/seal/valuation";


export const Route = createFileRoute("/")({ component: Command });

function Command() {
  const stamps = useStamps((s) => s.stamps);
  const total = valueAll(BEINGS);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Kicker>Command · The Christman AI Project LLC</Kicker>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
        Five beings. Sourced math. One close at a time.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        This desk is the closer that goes in front of a partner. This week it also opens to NVIDIA
        Health — not as a logo, not as a check. Start in Health if that is the room you are in.
        Every dollar has a source or a unit. Burden is not TAM. Provisional is not a grant.
        Inception is not capital. No revenue is printed because none has been collected.
      </p>

      <section className="mt-8">
        <Link
          to="/health"
          className="flex flex-col rounded-xl border border-wax/40 bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] md:p-6"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink">
            This week · {HEALTH_FOR.house} {HEALTH_FOR.role}
          </span>
          <span className="mt-2 font-serif text-3xl tracking-tight md:text-4xl">
            NVIDIA Health briefing
          </span>
          <span className="mt-2 max-w-2xl text-sm text-muted">
            For {HEALTH_FOR.name}. Not a term sheet. Three health beings, the edge, the door we
            need named. The 2:32am house is the clinical environment. We do not run on a named
            NVIDIA SKU today. We will not dress Inception as capital.
          </span>
          <span className="mt-4 inline-flex min-h-11 w-fit items-center rounded-md bg-wax px-4 text-sm font-medium text-wax-fg">
            Open Health
          </span>
        </Link>
      </section>

      <CopyListenRow className="mt-4" />


      <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat
          k="Family TAM"
          v={usd(total.tam)}
          hint={`${pct(1 - HAIRCUT)} already off the sourced headline`}
        />
        <Stat k="Family SAM" v={usd(total.sam)} hint="Channel we can actually sell into" />
        <Stat k="Family SOM" v={usd(total.som)} hint="Units × price, 5-year reachable" />
        <Stat k="Family ask" v={usd(total.ask)} hint="One LLC. Five beings. Seed." />
      </dl>

      <p className="mt-3 text-xs text-faint">
        This-round field modeled {usd(total.fieldDollars)} at list — units × seated price. Not
        booked. Paper is a {INSTRUMENT.paper}. Cap is blank until a term sheet is a term sheet.
        Conversion of {HOUSE.patent.docket} is due {INSTRUMENT.conversion.due}.
      </p>

      <section className="mt-10">
        <Kicker>The rooms a partner actually opens</Kicker>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          A ledger of five beings is not a meeting. The paper, the eighteen months, the empty
          folders, and the questions we ask ourselves first — those are.
        </p>
        <ol className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {PARTNER_PATH.map((room) => (
            <li key={room.to}>
              <Link
                to={room.to}
                className="flex min-h-28 flex-col rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <span className="font-mono text-xs text-faint">{room.n}</span>
                <span className="mt-2 font-serif text-2xl">{room.label}</span>
                <span className="mt-1 text-sm text-muted">{room.line}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-8 grid gap-3 md:grid-cols-3">
        <Note>
          <span className="block text-xs uppercase tracking-widest text-faint">Entity</span>
          {HOUSE.name}. {HOUSE.formed}. Operating as {HOUSE.trade}. {HOUSE.operates}.
        </Note>
        <Note>
          <span className="block text-xs uppercase tracking-widest text-faint">IP</span>
          {HOUSE.patent.docket} · {HOUSE.patent.filed} · {HOUSE.patent.status}. {HOUSE.inventor}.
        </Note>
        <Note>
          <span className="block text-xs uppercase tracking-widest text-faint">
            Traction we will speak
          </span>
          NVIDIA Inception, Aug 15 2026 — membership, not a check. 2018 Knox County Board of DD
          award. Founder taught 3,000+ students.
        </Note>
      </div>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {BEINGS.map((being) => {
          const v = value(being);
          return (
            <li key={being.id}>
              <Link
                to="/beings/$beingId"
                params={{ beingId: being.id }}
                className="flex min-h-32 w-full items-start gap-4 rounded-xl border border-line bg-surface p-4 text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] md:p-5"
              >
                <SealMark mark={being.mark} color={being.color} />
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-serif text-2xl">{being.name}</span>
                    <span className="text-xs uppercase tracking-widest text-muted">
                      {being.stage}
                      {stamps[being.id] ? " · stamped" : ""}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm text-muted">{being.line}</span>
                  <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm">
                    <span>TAM {usd(v.tam)}</span>
                    <span>SAM {usd(v.sam)}</span>
                    <span>SOM {usd(v.som)}</span>
                  </span>
                  <span className="mt-2 block text-xs text-faint">
                    This round: {being.fieldUnits.toLocaleString()} {being.fieldLabel} · ask{" "}
                    {usd(being.ask)}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/health"
          className="inline-flex min-h-11 items-center rounded-md bg-wax px-5 text-sm font-medium text-wax-fg"
        >
          Open Health
        </Link>
        <Link
          to="/math"
          className="inline-flex min-h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-bg"
        >
          Open the math
        </Link>
        <Link
          to="/terms"
          className="inline-flex min-h-11 items-center rounded-md border border-line px-5 text-sm"
        >
          Open the paper
        </Link>
      </div>
    </main>
  );
}
