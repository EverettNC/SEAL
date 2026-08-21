import { createFileRoute, Link } from "@tanstack/react-router";
import { MoneyBars } from "@/components/seal/funds-chart";
import { Note, Page, Stat } from "@/components/seal/ui";
import { BEINGS } from "@/lib/seal/catalog";
import { usd, pct } from "@/lib/seal/format";
import { INSTRUMENT, TERMS_LAW } from "@/lib/seal/terms";
import { familyUseOfFunds, valueAll } from "@/lib/seal/valuation";

export const Route = createFileRoute("/terms")({ component: TermsPage });

function TermsPage() {
  const family = valueAll(BEINGS);
  const funds = familyUseOfFunds(BEINGS);

  return (
    <Page
      kicker="Terms"
      title="The paper, including the blanks."
      lead={INSTRUMENT.paperNote}
    >
      <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat k="Vehicle" v="One LLC" hint={INSTRUMENT.formed} />
        <Stat k="Paper" v="SAFE" hint={`${INSTRUMENT.round} · post-money`} />
        <Stat k="Family ask" v={usd(INSTRUMENT.familyAsk)} hint="One wire, or a being-level check" />
        <Stat
          k="Conversion"
          v="Apr 27"
          hint={`${INSTRUMENT.conversion.docket} due ${INSTRUMENT.conversion.due}`}
        />
      </dl>

      <ul className="mt-8 grid gap-2 text-sm text-muted md:grid-cols-2">
        {TERMS_LAW.map((line) => (
          <li key={line} className="rounded-lg border border-line bg-surface px-4 py-3">
            {line}
          </li>
        ))}
      </ul>

      <section className="mt-12 grid gap-3 md:grid-cols-2">
        {INSTRUMENT.checks.map((check) => (
          <Note key={check.label}>
            <span className="block text-xs uppercase tracking-widest text-faint">
              {check.label}
              {check.amount ? ` · ${usd(check.amount)}` : ""}
            </span>
            {check.note}
          </Note>
        ))}
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <article>
          <h2 className="font-serif text-2xl">What they buy</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {INSTRUMENT.theyBuy.map((line) => (
              <li key={line} className="rounded-lg border border-line px-4 py-3">
                {line}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="font-serif text-2xl">What they do not buy</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {INSTRUMENT.theyDoNotBuy.map((line) => (
              <li key={line} className="rounded-lg border border-line px-4 py-3">
                {line}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Blanks we will not fill in to take a meeting</h2>
        <ul className="mt-4 grid gap-2 text-sm text-muted md:grid-cols-2">
          {INSTRUMENT.blanks.map((line) => (
            <li key={line} className="rounded-lg border border-line bg-raised px-4 py-3">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">One-check use of funds · {usd(family.ask)}</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Rolled from the five beings. Not a new budget invented for the family slide. Field
          modeled this round {usd(family.fieldDollars)} at list — not booked.
        </p>
        <div className="mt-6 rounded-xl border border-line bg-surface p-4">
          <MoneyBars
            rows={funds.map((row) => ({
              name: row.label,
              value: row.dollars,
              fill: "#8b3a32",
            }))}
            height={260}
          />
        </div>
        <div className="mt-4 overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-xs uppercase tracking-widest text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Bucket</th>
                <th className="px-4 py-3 font-medium">Share</th>
                <th className="px-4 py-3 font-medium">Dollars</th>
              </tr>
            </thead>
            <tbody>
              {funds.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <td className="px-4 py-3">{row.label}</td>
                  <td className="px-4 py-3 font-mono tabular-nums">{pct(row.pct)}</td>
                  <td className="px-4 py-3 font-mono tabular-nums">{usd(row.dollars)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">The clock</h2>
        <p className="mt-3 max-w-2xl text-muted">{INSTRUMENT.conversion.note}</p>
        <p className="mt-4 text-sm text-muted">{INSTRUMENT.counsel}</p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/vault"
          className="inline-flex min-h-11 items-center rounded-md bg-wax px-5 text-sm font-medium text-wax-fg"
        >
          Open the vault
        </Link>
        <Link
          to="/room"
          className="inline-flex min-h-11 items-center rounded-md border border-line px-5 text-sm"
        >
          Open the room
        </Link>
      </div>
    </Page>
  );
}
