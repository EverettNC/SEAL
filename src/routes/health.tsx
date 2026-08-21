import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SealMark } from "@/components/seal/mark";
import { CopyListenRow } from "@/components/seal/desk-tools";
import { Kicker, Note, Page, Stat } from "@/components/seal/ui";
import { beingById } from "@/lib/seal/catalog";
import {
  ASK_OF_MEGAN,
  HEALTH_BEING_IDS,
  HEALTH_FOR,
  HEALTH_LAW,
  HEALTH_LENS,
  HER_LANGUAGE,
  NVIDIA_DOORS,
  REPLY,
  SHE_WILL_ASK,
} from "@/lib/seal/health";
import { HEALTH_PATH } from "@/lib/seal/nav";
import { cn } from "@/lib/utils";


export const Route = createFileRoute("/health")({ component: HealthPage });

function PathLink({
  room,
  className,
  children,
}: {
  room: (typeof HEALTH_PATH)[number];
  className: string;
  children: ReactNode;

}) {
  if (room.beingId) {
    return (
      <Link to="/beings/$beingId" params={{ beingId: room.beingId }} className={className}>
        {children}
      </Link>
    );
  }
  if (room.to) {
    return (
      <Link to={room.to} className={className}>
        {children}
      </Link>
    );
  }
  return <div className={className}>{children}</div>;
}

function HealthPage() {
  const wolf = beingById("alphawolf");
  const vox = beingById("alphavox");
  const inferno = beingById("inferno");
  const brockston = beingById("brockston");

  return (
    <Page
      kicker={`Health · For ${HEALTH_FOR.name} · ${HEALTH_FOR.house} ${HEALTH_FOR.role}`}
      title="Not a term sheet. The health beings, and the door we need named."
      lead={
        <>
          The 2:32am house is the clinical environment we will speak — not the OR, not the scanner.
          Inception is membership, seated August 15, 2026. We do not run on a named NVIDIA SKU in
          the field today. That is the conversation. This room does not ask for a check.
        </>
      }
    >
      <div className="mt-6 flex flex-wrap gap-3" data-desk-skip>
        <CopyListenRow />
        <Link
          to="/vault"
          className="no-print inline-flex min-h-11 items-center rounded-md border border-line px-4 text-sm"
        >
          Open the empty folders
        </Link>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat k="AlphaVox this round" v="200" hint={vox?.fieldLabel} />
        <Stat k="AlphaWolf this round" v="50" hint={wolf?.fieldLabel} />
        <Stat k="Inferno this round" v="40" hint={inferno?.fieldLabel} />
        <Stat k="Inception" v="Aug 15" hint="Membership. Not capital." />
      </dl>

      <section className="mt-12">
        <Kicker>What we are asking you for</Kicker>
        <h2 className="mt-2 font-serif text-2xl">Three things. None of them is a check.</h2>
        <ol className="mt-5 grid gap-3 md:grid-cols-3">
          {ASK_OF_MEGAN.map((item) => (
            <li key={item.n} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-xs text-faint">{item.n}</p>
              <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <Kicker>Your language. Our room.</Kicker>
        <h2 className="mt-2 font-serif text-2xl">
          AI-native patient care, mapped onto a house that has to work when the tower dies.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          You wrote the GTC line: digital health agents, software-defined devices, physical AI,
          edge-to-cloud. We will not pretend we already occupy that stack. We will say where the
          house actually sits.
        </p>
        <ul className="mt-6 divide-y divide-line rounded-xl border border-line">
          {HER_LANGUAGE.map((row) => (
            <li key={row.her} className="grid gap-2 px-4 py-4 md:grid-cols-2 md:gap-6">
              <p className="text-sm">
                <span className="block text-xs uppercase tracking-widest text-faint">You</span>
                {row.her}
              </p>
              <p className="text-sm text-muted">
                <span className="block text-xs uppercase tracking-widest text-faint">Us</span>
                {row.us}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <Kicker>The three health beings</Kicker>
        <h2 className="mt-2 font-serif text-2xl">Field units. Device class we will speak. What we will not claim.</h2>
        <ul className="mt-6 grid gap-4">
          {HEALTH_BEING_IDS.map((id) => {
            const being = beingById(id);
            const lens = HEALTH_LENS[id];
            if (!being || !lens) return null;
            return (
              <li key={id}>
                <Link
                  to="/beings/$beingId"
                  params={{ beingId: being.id }}
                  className="block rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <span className="flex items-start gap-4">
                    <SealMark mark={being.mark} color={being.color} size="sm" />
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-serif text-2xl">{being.name}</span>
                        <span className="text-xs uppercase tracking-widest text-muted">
                          {being.stage} · {being.fieldUnits.toLocaleString()} {being.fieldLabel}
                        </span>
                      </span>
                      <span className="mt-1 block text-sm text-muted">{being.line}</span>
                      <span className="mt-4 grid gap-3 md:grid-cols-2">
                        <span className="block text-sm">
                          <span className="block text-xs uppercase tracking-widest text-faint">
                            Sits
                          </span>
                          {lens.sits}
                        </span>
                        <span className="block text-sm">
                          <span className="block text-xs uppercase tracking-widest text-faint">
                            Device class we will speak
                          </span>
                          {lens.deviceClass}
                        </span>
                        <span className="block text-sm">
                          <span className="block text-xs uppercase tracking-widest text-faint">
                            NVIDIA door
                          </span>
                          {lens.nvidiaDoor}
                        </span>
                        <span className="block text-sm text-muted">
                          <span className="block text-xs uppercase tracking-widest text-faint">
                            Not claimed
                          </span>
                          {lens.notClaim}
                        </span>
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {brockston ? (
        <section className="mt-14">
          <Kicker>The silicon</Kicker>
          <h2 className="mt-2 font-serif text-2xl">Brockston is LAB. It is also the GPU conversation.</h2>
          <div className="mt-5 rounded-xl border border-line bg-surface p-5">
            <div className="flex items-start gap-4">
              <SealMark mark={brockston.mark} color={brockston.color} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="font-serif text-2xl">{brockston.name}</p>
                <p className="mt-1 text-sm text-muted">{HEALTH_LENS.brockston.deviceClass}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Note>
                    <span className="block text-xs uppercase tracking-widest text-faint">
                      NVIDIA door
                    </span>
                    {HEALTH_LENS.brockston.nvidiaDoor}
                  </Note>
                  <Note>
                    <span className="block text-xs uppercase tracking-widest text-faint">
                      Not claimed
                    </span>
                    {HEALTH_LENS.brockston.notClaim}
                  </Note>
                </div>
                <Link
                  to="/beings/$beingId"
                  params={{ beingId: "brockston" }}
                  className="mt-4 inline-flex min-h-11 items-center text-sm text-ink underline"
                >
                  Open Brockston
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mt-14">
        <Kicker>NVIDIA doors</Kicker>
        <h2 className="mt-2 font-serif text-2xl">Open. Conversation. Wrong.</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          We will not name Holoscan, MONAI, or a Jetson SKU as if they are already in the house.
          A door that is wrong should be marked wrong.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-surface text-xs uppercase tracking-widest text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Door</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Now</th>
                <th className="px-4 py-3 font-medium">Next</th>
              </tr>
            </thead>
            <tbody>
              {NVIDIA_DOORS.map((row) => (
                <tr key={row.door} className="border-t border-line align-top">
                  <td className="px-4 py-3 font-medium">{row.door}</td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-1 font-mono text-xs uppercase tracking-wider",
                        row.status === "open" && "bg-wax/20 text-ink",
                        row.status === "conversation" && "bg-raised text-fg",
                        row.status === "wrong" && "text-faint",
                      )}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted">{row.now}</td>
                  <td className="px-4 py-3 text-muted">{row.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <Kicker>Questions we ask ourselves first</Kicker>
        <h2 className="mt-2 font-serif text-2xl">So you do not have to hunt for the hard ones.</h2>
        <ol className="mt-6 space-y-3">
          {SHE_WILL_ASK.map((q) => (
            <li key={q.id} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-serif text-xl">{q.ask}</p>
              <p className="mt-2 text-sm text-muted">{q.answer}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <Kicker>Law of this room</Kicker>
        <ul className="mt-4 space-y-2">
          {HEALTH_LAW.map((line) => (
            <li key={line} className="text-sm text-muted">
              — {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <Kicker>Walk</Kicker>
        <h2 className="mt-2 font-serif text-2xl">If this is the meeting, this is the order.</h2>
        <ol className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {HEALTH_PATH.map((room) => (
            <li key={room.n}>
              <PathLink
                room={room}
                className="flex min-h-28 flex-col rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <span className="font-mono text-xs text-faint">{room.n}</span>
                <span className="mt-2 font-serif text-2xl">{room.label}</span>
                <span className="mt-1 text-sm text-muted">{room.line}</span>
              </PathLink>
            </li>
          ))}
        </ol>
      </section>

      <aside className="mt-14 rounded-xl border border-line bg-raised p-5">
        <Kicker>The reply</Kicker>
        <p className="mt-3 max-w-2xl font-serif text-xl leading-snug">{REPLY.line}</p>
        <p className="mt-4 text-xs text-faint">{REPLY.sign}</p>
      </aside>
    </Page>
  );
}
