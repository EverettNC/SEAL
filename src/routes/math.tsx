import { createFileRoute, Link } from "@tanstack/react-router";
import { MoneyBars } from "@/components/seal/funds-chart";
import { Page, Stat } from "@/components/seal/ui";
import { BEINGS, beingById, HAIRCUT } from "@/lib/seal/catalog";
import { usd, pct, people } from "@/lib/seal/format";
import { HOUSE } from "@/lib/seal/house";
import { SOURCES } from "@/lib/seal/sources";
import { familyUseOfFunds, value, valueAll } from "@/lib/seal/valuation";

export const Route = createFileRoute("/math")({ component: MathPage });

function MathPage() {
  const wolf = beingById("alphawolf")!;
  const wv = value(wolf);
  const family = valueAll(BEINGS);
  const funds = familyUseOfFunds(BEINGS);

  return (
    <Page
      kicker="Math"
      title="What we will defend in the room."
      lead="If a partner asks where a number came from, the answer is this page. Market-research prints disagree with each other. We take the low one, then haircut 20% more."
    >
      <ul className="mt-6 grid gap-2 text-sm text-muted md:grid-cols-2">
        {HOUSE.law.map((line) => (
          <li key={line} className="rounded-lg border border-line bg-surface px-4 py-3">
            {line}
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Family, seated.</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Ask {usd(family.ask)} is the round. This-round field {usd(family.fieldDollars)} is units
          × price — not booked. SOM {usd(family.som)} is five-year reachable. Attack the units.
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat k="TAM" v={usd(family.tam)} hint={`${pct(1 - HAIRCUT)} off sourced headlines`} />
          <Stat k="SAM" v={usd(family.sam)} hint="Channel we can sell into" />
          <Stat k="SOM" v={usd(family.som)} hint="Units × price" />
          <Stat k="Ask" v={usd(family.ask)} hint={`Field modeled ${usd(family.fieldDollars)}`} />
        </dl>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-4">
            <p className="text-xs uppercase tracking-widest text-faint">Ask by being</p>
            <MoneyBars
              rows={BEINGS.map((b) => ({ name: b.name, value: b.ask, fill: b.color }))}
              height={260}
            />
          </div>
          <div className="rounded-xl border border-line bg-surface p-4">
            <p className="text-xs uppercase tracking-widest text-faint">
              One-check use of funds
            </p>
            <MoneyBars
              rows={funds.map((row) => ({
                name: row.label,
                value: row.dollars,
                fill: "#8b3a32",
              }))}
              height={260}
            />
            <p className="mt-2 text-xs text-faint">
              Rolled from each being's use of funds. Engineering includes Brockston core and
              the HNDL path. Studio seats sit in Field.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">AlphaWolf, worked.</h2>
        <p className="mt-3 max-w-2xl text-muted">{wolf.tamHow}</p>
        <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Stat k="People" v="7.4M" hint="Alz.org 2026 · Americans 65+ with Alzheimer's" />
          <Stat
            k="Price"
            v={usd(wolf.som.arpu)}
            hint="Home license / year. Not a facility day-rate."
          />
          <Stat k="Uncut ceiling" v={usd(wolf.tamRaw)} hint="People × price. Then haircut." />
          <Stat k="TAM" v={usd(wv.tam)} hint={`${pct(1 - HAIRCUT)} off`} />
          <Stat k="SAM" v={usd(wv.sam)} hint={wolf.samHow} />
          <Stat
            k="SOM"
            v={usd(wv.som)}
            hint={`${people(wolf.som.units)} homes × ${usd(wolf.som.arpu)}`}
          />
        </dl>
        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            We refuse to speak
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {wolf.refuse.map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </div>
        <Link
          to="/beings/$beingId"
          params={{ beingId: "alphawolf" }}
          className="mt-8 inline-flex min-h-11 items-center rounded-md bg-wax px-5 text-sm font-medium text-wax-fg"
        >
          Open the AlphaWolf dossier
        </Link>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl">Sources</h2>
        <p className="mt-3 max-w-2xl text-muted">
          If a partner asks “where did you get that,” the answer is this page.
        </p>
        <ol className="mt-6 space-y-4">
          {SOURCES.map((src) => (
            <li key={src.id} className="rounded-lg border border-line bg-surface px-4 py-4">
              <p className="font-medium">
                {src.title}{" "}
                <span className="font-sans text-sm font-normal text-muted">
                  · {src.publisher} · {src.year}
                </span>
              </p>
              <p className="mt-2 text-sm text-muted">{src.usedFor}</p>
              <a
                className="mt-2 inline-block break-all text-sm text-ink underline"
                href={src.url}
                target="_blank"
                rel="noreferrer"
              >
                {src.url}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </Page>
  );
}
