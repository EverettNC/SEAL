import { createFileRoute, Link } from "@tanstack/react-router";
import { SealMark } from "@/components/seal/mark";
import { Note, Page } from "@/components/seal/ui";
import { beingById } from "@/lib/seal/catalog";
import { CHANNELS, COMPETITORS, QUARTERS, SEQUENCE } from "@/lib/seal/field";
import { usd } from "@/lib/seal/format";

export const Route = createFileRoute("/field")({ component: FieldPage });

function FieldPage() {
  return (
    <Page
      kicker="Field"
      title="Eighteen months. Who else is in the room."
      lead="Sequence is a choice. AlphaVox first because the founder lived it and the comparable is a board. Brockston last because it is LAB, and the others ride it. Units that have not sat are not spoken as shipped."
    >
      <section className="mt-10">
        <h2 className="font-serif text-2xl">Order we will defend</h2>
        <ol className="mt-5 space-y-3">
          {SEQUENCE.map((item) => {
            const being = beingById(item.id);
            if (!being) return null;
            return (
              <li key={item.id}>
                <Link
                  to="/beings/$beingId"
                  params={{ beingId: being.id }}
                  className="flex items-start gap-4 rounded-xl border border-line bg-surface p-4"
                >
                  <span className="font-mono text-xs text-faint">
                    {String(item.order).padStart(2, "0")}
                  </span>
                  <SealMark mark={being.mark} color={being.color} size="sm" />
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-serif text-xl">{being.name}</span>
                      <span className="text-xs uppercase tracking-widest text-muted">
                        {being.stage} · {being.fieldUnits.toLocaleString()} {being.fieldLabel} ·{" "}
                        {usd(being.ask)}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm text-muted">{item.why}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl">The eighteen months</h2>
        <p className="mt-3 max-w-2xl text-muted">
          April 27, 2027 is the provisional clock. This is not a hockey stick. It is whether the
          architecture survives a real room before the priority date has to be converted.
        </p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {QUARTERS.map((q) => (
            <li key={q.id} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-faint">{q.label}</p>
              <h3 className="mt-2 font-serif text-2xl">{q.title}</h3>
              <p className="mt-2 text-sm text-muted">{q.body}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {q.sits.map((line) => (
                  <li key={line} className="text-muted">
                    — {line}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl">Who buys. Who sells. What we will not say.</h2>
        <div className="mt-5 grid gap-3">
          {CHANNELS.map((ch) => {
            const being = beingById(ch.beingId);
            if (!being) return null;
            return (
              <div key={ch.beingId} className="rounded-xl border border-line p-5">
                <p className="font-serif text-xl">{being.name}</p>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  <Note>
                    <span className="block text-xs uppercase tracking-widest text-faint">
                      Who buys
                    </span>
                    {ch.whoBuys}
                  </Note>
                  <Note>
                    <span className="block text-xs uppercase tracking-widest text-faint">
                      Who sells this round
                    </span>
                    {ch.whoSells}
                  </Note>
                  <Note>
                    <span className="block text-xs uppercase tracking-widest text-faint">
                      Not yet
                    </span>
                    {ch.notYet}
                  </Note>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl">Named competitors</h2>
        <p className="mt-3 max-w-2xl text-muted">
          We win on dignity, offline, and the safety law. We lose if the buyer wants a facility,
          a bed, a Copilot clone, or engagement metrics on lonely people.
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {COMPETITORS.map((c) => {
            const being = beingById(c.beingId);
            if (!being) return null;
            return (
              <li key={c.beingId} className="rounded-xl border border-line bg-surface p-5">
                <p className="font-serif text-xl">{being.name}</p>
                <p className="mt-2 text-sm">{c.names}</p>
                <p className="mt-3 text-sm text-muted">We win: {c.weWin}</p>
                <p className="mt-1 text-sm text-muted">We lose if: {c.weLoseIf}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </Page>
  );
}
