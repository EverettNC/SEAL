import { createFileRoute } from "@tanstack/react-router";
import { Note, Page } from "@/components/seal/ui";
import { TEAM_GAPS } from "@/lib/seal/objections";
import { COMPOUND, DIVISIONS, FAMILY_COUNT, NO_PRINT_YET, OUTSIDE, TOOLS, marketLines } from "@/lib/seal/family";
import { usd } from "@/lib/seal/format";
import { HOUSE } from "@/lib/seal/house";

export const Route = createFileRoute("/house")({ component: HousePage });

function HousePage() {
  return (
    <Page
      kicker="House"
      title={HOUSE.name}
      lead={
        <>
          {HOUSE.formed}. {HOUSE.trade}. {HOUSE.operates}. {HOUSE.ipOwner}
        </>
      }
    >
      <dl className="mt-8 grid gap-3 sm:grid-cols-2">
        <Note>
          <span className="block text-xs uppercase tracking-widest text-faint">Patent</span>
          {HOUSE.patent.docket}. Filed {HOUSE.patent.filed}. {HOUSE.patent.status}.{" "}
          {HOUSE.patent.covers}
        </Note>
        <Note>
          <span className="block text-xs uppercase tracking-widest text-faint">Contact</span>
          {HOUSE.contact}
          <br />
          {HOUSE.web}
        </Note>
      </dl>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Law of the family</h2>
        <blockquote className="mt-4 max-w-3xl border-l-2 border-wax pl-4 text-muted">
          {HOUSE.framework.carbonSilicon}
        </blockquote>
        <blockquote className="mt-4 max-w-3xl border-l-2 border-wax pl-4 text-muted">
          {HOUSE.framework.sovereignty}
        </blockquote>
        <blockquote className="mt-4 max-w-3xl border-l-2 border-wax pl-4 text-muted">
          {HOUSE.framework.dignity}
        </blockquote>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">What is already true</h2>
        <ol className="mt-4 space-y-3">
          {HOUSE.traction.map((t) => (
            <li key={t.what} className="rounded-lg border border-line bg-surface px-4 py-4">
              <p className="font-mono text-xs text-faint">{t.when}</p>
              <p className="mt-1 font-medium">{t.what}</p>
              <p className="mt-1 text-sm text-muted">{t.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">People</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {HOUSE.team.map((person) => (
            <li key={person.name} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-serif text-xl">{person.name}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">{person.role}</p>
              <p className="mt-3 text-sm text-muted">{person.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Seats that do not sit yet</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Four people. The round hires the rest. We do not seat ghosts to look staffed.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {TEAM_GAPS.map((gap) => (
            <li key={gap.seat} className="rounded-lg border border-line bg-surface px-4 py-4">
              <p className="font-medium">{gap.seat}</p>
              <p className="mt-1 text-sm text-muted">{gap.why}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Open work, named as such</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {HOUSE.opensource.map((item) => (
            <li key={item.name} className="rounded-lg border border-line bg-surface px-4 py-4">
              <p className="font-medium">{item.name}</p>
              <p className="mt-1 text-sm text-muted">{item.line}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">
          The whole family. {FAMILY_COUNT.beings} beings, {FAMILY_COUNT.tools} tools.
        </h2>
        <p className="mt-3 max-w-3xl text-muted">
          Every being here is fully structured and working, and every one is counted:{" "}
          {FAMILY_COUNT.compound} in the Compound and {FAMILY_COUNT.outside} outside it. Each
          division&apos;s market is in the family TAM and SAM from its own published print, cut
          20%. A being&apos;s SOM prints when its unit and price are named. Nothing is left off
          the ledger, and nothing is invented to fill it.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {marketLines().map((line) => (
            <li key={line.id} className="rounded-lg border border-line bg-surface px-4 py-3">
              <p className="font-medium">
                {line.label} · {line.covers}
              </p>
              <p className="mt-1 font-mono text-sm">
                TAM {usd(line.tam)} · SAM {usd(line.sam)}
              </p>
              <p className="mt-1 text-sm text-muted">{line.source}</p>
            </li>
          ))}
          {NO_PRINT_YET.map((item) => (
            <li key={item.label} className="rounded-lg border border-line px-4 py-3">
              <p className="font-medium">
                {item.label} · {item.covers}
              </p>
              <p className="mt-1 text-sm text-muted">{item.why}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-8">
          {DIVISIONS.map((division) => {
            const members = COMPOUND.filter((being) => being.division === division.id);
            return (
              <div key={division.id}>
                <h3 className="font-serif text-xl">
                  {division.name}{" "}
                  <span className="font-sans text-sm text-muted">· {members.length}</span>
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {members.map((being) => (
                    <li key={being.id} className="rounded-lg border border-line px-4 py-2">
                      <p className="font-medium">{being.name}</p>
                      {being.line ? <p className="text-sm text-muted">{being.line}</p> : null}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div>
            <h3 className="font-serif text-xl">
              Outside the Compound{" "}
              <span className="font-sans text-sm text-muted">· {OUTSIDE.length}</span>
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {OUTSIDE.map((name) => (
                <li key={name} className="rounded-lg border border-line px-4 py-2 font-medium">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl">
              Tools{" "}
              <span className="font-sans text-sm text-muted">· {TOOLS.length}</span>
            </h3>
            <p className="mt-1 text-sm text-muted">
              What the family uses in order to function. Counted, not beings.
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {TOOLS.map((name) => (
                <li key={name} className="rounded-lg border border-line px-4 py-2">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Page>
  );
}
