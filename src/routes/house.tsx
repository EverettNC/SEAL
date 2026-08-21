import { createFileRoute } from "@tanstack/react-router";
import { Note, Page } from "@/components/seal/ui";
import { TEAM_GAPS } from "@/lib/seal/objections";
import { HOUSE } from "@/lib/seal/house";

export const Route = createFileRoute("/house")({ component: HousePage });

function HousePage() {
  return (
    <Page
      kicker="House"
      title={HOUSE.name}
      lead={
        <>
          {HOUSE.formed}. Operating as {HOUSE.trade}. {HOUSE.operates}. {HOUSE.ipOwner}
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
        <ul className="mt-4 grid gap-4 md:grid-cols-3">
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
          Three people. The round hires the rest. We do not seat ghosts to look staffed.
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
        <h2 className="font-serif text-2xl">Later. Not valued.</h2>
        <p className="mt-3 max-w-2xl text-muted">
          These rooms exist in the house. They do not sit on the ledger. A partner who wants them
          in the TAM is asking us to lie.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {HOUSE.later.map((item) => (
            <li key={item.name} className="rounded-lg border border-line px-4 py-3">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted">{item.line}</p>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
