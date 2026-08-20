import { useEffect, useMemo, useState } from "react";
import { BEINGS, beingById, HAIRCUT } from "./catalog";
import { usd, pct, people } from "./format";
import { HOUSE } from "./house";
import { SealMark } from "./mark";
import { SOURCES } from "./sources";
import type { Being, PipelineStepId } from "./types";
import { Funds, Kicker, Note, Stat } from "./ui";
import { value, valueAll } from "./valuation";

const STEPS: { id: PipelineStepId; label: string }[] = [
  { id: "intake", label: "Intake" },
  { id: "dossier", label: "Dossier" },
  { id: "thesis", label: "Thesis" },
  { id: "math", label: "Math" },
  { id: "ask", label: "Ask" },
  { id: "close", label: "Close" },
];

const STAMP_KEY = "seal-stamps-v1";

function usePath() {
  const [path, setPath] = useState(() => window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  function go(to: string) {
    if (to === path) return;
    window.history.pushState({}, "", to);
    setPath(to);
  }
  return { path, go };
}

function readStamps(): Record<string, string> {
  try {
    const raw = localStorage.getItem(STAMP_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

export function App() {
  const { path, go } = usePath();
  const [stamps, setStamps] = useState<Record<string, string>>(readStamps);

  function stamp(id: string) {
    const next = { ...stamps, [id]: new Date().toISOString() };
    setStamps(next);
    localStorage.setItem(STAMP_KEY, JSON.stringify(next));
  }

  const beingMatch = path.match(/^\/beings\/([^/]+)/);
  const closerMatch = path.match(/^\/closer\/([^/]+)/);
  const being = beingMatch ? beingById(beingMatch[1] ?? "") : undefined;
  const closerBeing = closerMatch ? beingById(closerMatch[1] ?? "") : undefined;

  let page: "command" | "ledger" | "math" | "house" | "closer" | "being" = "command";
  if (path.startsWith("/ledger")) page = "ledger";
  else if (path.startsWith("/math")) page = "math";
  else if (path.startsWith("/house")) page = "house";
  else if (path.startsWith("/closer")) page = "closer";
  else if (beingMatch) page = "being";

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="no-print border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 md:px-6">
          <button type="button" onClick={() => go("/")} className="text-left">
            <p className="font-display text-lg tracking-widest text-fg">SEAL</p>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              The closing agent
            </p>
          </button>
          <nav className="flex flex-1 flex-wrap items-center gap-1 text-sm">
            <NavLink active={page === "command"} onClick={() => go("/")}>
              Command
            </NavLink>
            <NavLink active={page === "ledger"} onClick={() => go("/ledger")}>
              Ledger
            </NavLink>
            <NavLink active={page === "math"} onClick={() => go("/math")}>
              Math
            </NavLink>
            <NavLink active={page === "house"} onClick={() => go("/house")}>
              House
            </NavLink>
            <NavLink active={page === "closer"} onClick={() => go("/closer")}>
              Closer
            </NavLink>
          </nav>
          <button
            type="button"
            onClick={() => go(page === "being" && being ? `/closer/${being.id}` : "/closer")}
            className="min-h-11 rounded-md bg-wax px-4 text-sm font-medium text-wax-fg"
          >
            Walk the close
          </button>
        </div>
      </header>

      {page === "command" ? <Command go={go} stamps={stamps} /> : null}
      {page === "ledger" ? <Ledger go={go} stamps={stamps} /> : null}
      {page === "math" ? <MathPage go={go} /> : null}
      {page === "house" ? <HousePage /> : null}
      {page === "closer" ? (
        <Closer go={go} being={closerBeing} stamps={stamps} onStamp={stamp} />
      ) : null}
      {page === "being" && being ? (
        <BeingPage go={go} being={being} stamped={Boolean(stamps[being.id])} />
      ) : null}
      {page === "being" && !being ? (
        <main className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="text-muted">That being is not in this vault.</p>
          <button type="button" className="mt-4 text-sm text-fg underline" onClick={() => go("/")}>
            Back to command
          </button>
        </main>
      ) : null}
    </div>
  );
}

function NavLink({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-md px-3 ${active ? "text-fg" : "text-muted"}`}
    >
      {children}
    </button>
  );
}

function Command({
  go,
  stamps,
}: {
  go: (to: string) => void;
  stamps: Record<string, string>;
}) {
  const total = valueAll(BEINGS);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Kicker>Command · The Christman AI Project LLC</Kicker>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
        Five beings. Sourced math. One close at a time.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        This desk is the closer that goes in front of a partner. Every dollar has a source or a
        unit. Burden is not TAM. Provisional is not a grant. Inception is not capital. No
        revenue is printed because none has been collected. It should be free. The structure
        does not allow free. We still do not charge a facility rate for a being that sits in
        the house.
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat k="Family TAM" v={usd(total.tam)} hint={`${pct(1 - HAIRCUT)} already off the sourced headline`} />
        <Stat k="Family SAM" v={usd(total.sam)} hint="Channel we can actually sell into" />
        <Stat k="Family SOM" v={usd(total.som)} hint="Units × price, 5-year reachable" />
        <Stat k="Family ask" v={usd(total.ask)} hint="One LLC. Five beings. Seed." />
      </dl>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <Note>
          <span className="block text-xs uppercase tracking-widest text-faint">Entity</span>
          {HOUSE.name}. {HOUSE.formed}. Operating as {HOUSE.trade}. {HOUSE.operates}.
        </Note>
        <Note>
          <span className="block text-xs uppercase tracking-widest text-faint">IP</span>
          {HOUSE.patent.docket} · {HOUSE.patent.filed} · {HOUSE.patent.status}. {HOUSE.inventor}.
        </Note>
        <Note>
          <span className="block text-xs uppercase tracking-widest text-faint">Traction we will speak</span>
          NVIDIA Inception, Aug 15 2026 — membership, not a check. 2018 Knox County Board of DD
          award. Founder taught 3,000+ students.
        </Note>
      </div>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {BEINGS.map((being) => {
          const v = value(being);
          return (
            <li key={being.id}>
              <button
                type="button"
                onClick={() => go(`/beings/${being.id}`)}
                className="flex min-h-32 w-full items-start gap-4 rounded-xl border border-line bg-surface p-4 text-left md:p-5"
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
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => go("/math")}
          className="min-h-11 rounded-md bg-fg px-5 text-sm font-medium text-bg"
        >
          Open the math
        </button>
        <button
          type="button"
          onClick={() => go("/ledger")}
          className="min-h-11 rounded-md border border-line px-5 text-sm"
        >
          Open the ledger
        </button>
      </div>
    </main>
  );
}

function Ledger({
  go,
  stamps,
}: {
  go: (to: string) => void;
  stamps: Record<string, string>;
}) {
  const total = valueAll(BEINGS);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Kicker>Ledger</Kicker>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">Every number, seated.</h1>
      <p className="mt-3 max-w-2xl text-muted">
        TAM is sourced headline × {pct(HAIRCUT)}. SOM is units × price. Ask is the round. Field
        dollars are this-round units × the same price — that is the only revenue we will model
        until money is actually in the door.
      </p>
      <div className="mt-8 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[960px] text-left text-sm">
          <thead className="bg-surface text-xs uppercase tracking-widest text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Being</th>
              <th className="px-4 py-3 font-medium">Stage</th>
              <th className="px-4 py-3 font-medium">TAM</th>
              <th className="px-4 py-3 font-medium">SAM</th>
              <th className="px-4 py-3 font-medium">SOM</th>
              <th className="px-4 py-3 font-medium">Units</th>
              <th className="px-4 py-3 font-medium">Ask</th>
              <th className="px-4 py-3 font-medium">Stamp</th>
            </tr>
          </thead>
          <tbody>
            {BEINGS.map((being) => {
              const v = value(being);
              return (
                <tr key={being.id} className="border-t border-line">
                  <td className="px-4 py-3">
                    <button type="button" className="text-left" onClick={() => go(`/beings/${being.id}`)}>
                      <span className="block font-medium">{being.name}</span>
                      <span className="block text-xs text-muted">{being.legalLine}</span>
                    </button>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">{being.stage}</td>
                  <td className="px-4 py-3 font-mono">{usd(v.tam)}</td>
                  <td className="px-4 py-3 font-mono">{usd(v.sam)}</td>
                  <td className="px-4 py-3 font-mono">{usd(v.som)}</td>
                  <td className="px-4 py-3 font-mono text-xs">
                    {people(being.som.units)} × {usd(being.som.arpu)}
                  </td>
                  <td className="px-4 py-3 font-mono">
                    {usd(v.ask)} {being.round}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted">
                    {stamps[being.id] ? stamps[being.id].slice(0, 10) : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t border-line bg-surface">
              <td className="px-4 py-3 font-medium">Family</td>
              <td className="px-4 py-3 font-mono text-xs">LLC</td>
              <td className="px-4 py-3 font-mono">{usd(total.tam)}</td>
              <td className="px-4 py-3 font-mono">{usd(total.sam)}</td>
              <td className="px-4 py-3 font-mono">{usd(total.som)}</td>
              <td className="px-4 py-3 text-xs text-muted">units named per being</td>
              <td className="px-4 py-3 font-mono">{usd(total.ask)}</td>
              <td className="px-4 py-3 text-xs text-muted">
                {Object.keys(stamps).length} of {BEINGS.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="mt-4 text-xs text-faint">
        Haircut {pct(1 - HAIRCUT)} on every sourced headline. SOM window is five years. Field
        this-round is smaller on purpose — that is what the ask buys.
      </p>
    </main>
  );
}

function MathPage({ go }: { go: (to: string) => void }) {
  const wolf = beingById("alphawolf")!;
  const wv = value(wolf);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Kicker>Math</Kicker>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">What we will defend in the room.</h1>
      <ul className="mt-6 grid gap-2 text-sm text-muted md:grid-cols-2">
        {HOUSE.law.map((line) => (
          <li key={line} className="rounded-lg border border-line bg-surface px-4 py-3">
            {line}
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">AlphaWolf, worked.</h2>
        <p className="mt-3 max-w-2xl text-muted">{wolf.tamHow}</p>
        <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Stat k="People" v="7.4M" hint="Alz.org 2026 · Americans 65+ with Alzheimer's" />
          <Stat k="Price" v={usd(wolf.som.arpu)} hint="Home license / year. Not a facility day-rate." />
          <Stat k="Uncut ceiling" v={usd(wolf.tamRaw)} hint="People × price. Then haircut." />
          <Stat k="TAM" v={usd(wv.tam)} hint={`${pct(1 - HAIRCUT)} off`} />
          <Stat k="SAM" v={usd(wv.sam)} hint={wolf.samHow} />
          <Stat k="SOM" v={usd(wv.som)} hint={`${people(wolf.som.units)} homes × ${usd(wolf.som.arpu)}`} />
        </dl>
        <div className="mt-6">
          <Kicker>We refuse to speak</Kicker>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {wolf.refuse.map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => go("/beings/alphawolf")}
          className="mt-8 min-h-11 rounded-md bg-wax px-5 text-sm font-medium text-wax-fg"
        >
          Open the AlphaWolf dossier
        </button>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl">Sources</h2>
        <p className="mt-3 max-w-2xl text-muted">
          If a partner asks “where did you get that,” the answer is this page. Market-research
          prints disagree with each other. We take the low one.
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
    </main>
  );
}

function HousePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Kicker>House</Kicker>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">{HOUSE.name}</h1>
      <p className="mt-3 max-w-2xl text-muted">
        {HOUSE.formed}. Operating as {HOUSE.trade}. {HOUSE.operates}. {HOUSE.ipOwner}
      </p>
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
    </main>
  );
}

function BeingPage({
  go,
  being,
  stamped,
}: {
  go: (to: string) => void;
  being: Being;
  stamped: boolean;
}) {
  const v = value(being);
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
        <Stat k="SOM" v={usd(v.som)} hint={`${people(being.som.units)} ${being.som.unitLabel} × ${usd(being.som.arpu)}`} />
      </section>
      <p className="mt-3 text-sm text-muted">{being.tamHow}</p>
      <p className="mt-2 text-sm text-muted">{being.somHow}</p>
      {being.comparable ? (
        <div className="mt-4">
          <Note>
            <span className="block text-xs uppercase tracking-widest text-faint">
              Comparable — not our price
            </span>
            ${being.comparable.low.toLocaleString()}–$
            {being.comparable.high.toLocaleString()} / {being.comparable.unit}.{" "}
            {being.comparable.note}
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
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted">Not yet — do not say it is</h2>
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
        <button
          type="button"
          onClick={() => go(`/closer/${being.id}`)}
          className="min-h-11 rounded-md bg-wax px-5 text-sm font-medium text-wax-fg"
        >
          Walk the close
        </button>
        <button
          type="button"
          onClick={() => go("/math")}
          className="min-h-11 rounded-md border border-line px-5 text-sm"
        >
          Open the sources
        </button>
      </div>
    </main>
  );
}

function Closer({
  go,
  being,
  stamps,
  onStamp,
}: {
  go: (to: string) => void;
  being: Being | undefined;
  stamps: Record<string, string>;
  onStamp: (id: string) => void;
}) {
  const [picked, setPicked] = useState(being?.id ?? BEINGS[0]?.id ?? "alphawolf");
  const current = beingById(being?.id ?? picked) ?? BEINGS[0];
  const v = useMemo(() => (current ? value(current) : null), [current]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (being) {
      setPicked(being.id);
      setStep(0);
    }
  }, [being]);

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
              go(`/closer/${b.id}`);
            }}
            className={`min-h-11 rounded-full border px-4 text-sm ${
              current.id === b.id ? "border-wax bg-wax text-wax-fg" : "border-line bg-surface"
            }`}
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
                className={`flex min-h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm ${
                  i === step ? "bg-raised text-fg" : "text-muted"
                }`}
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
                <Stat k="SOM" v={usd(v.som)} hint={`${people(current.som.units)} × ${usd(current.som.arpu)}`} />
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
                <button
                  type="button"
                  onClick={() => onStamp(current.id)}
                  className="mt-6 min-h-11 rounded-md bg-wax px-5 text-sm font-medium text-wax-fg"
                >
                  Stamp the close
                </button>
              )}
            </div>
          ) : null}

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={step === 0}
              onClick={() => setStep((n) => Math.max(0, n - 1))}
              className="min-h-11 rounded-md border border-line px-4 text-sm disabled:opacity-40"
            >
              Back
            </button>
            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((n) => Math.min(STEPS.length - 1, n + 1))}
                className="min-h-11 rounded-md bg-fg px-4 text-sm font-medium text-bg"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={() => go(`/beings/${current.id}`)}
                className="min-h-11 rounded-md border border-line px-4 text-sm"
              >
                Open the dossier
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
