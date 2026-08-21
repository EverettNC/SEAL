import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/seal/ui";
import { OBJECTIONS } from "@/lib/seal/objections";

export const Route = createFileRoute("/room")({ component: RoomPage });

const DESK = {
  "/": "/",
  "/health": "/health",
  "/ledger": "/ledger",
  "/math": "/math",
  "/house": "/house",
  "/field": "/field",
  "/terms": "/terms",
  "/room": "/room",
  "/vault": "/vault",
  "/closer": "/closer",
  "/packet": "/packet",
} as const;

function DeskLink({ go }: { go: string }) {
  const className = "mt-4 inline-flex min-h-11 items-center text-sm text-ink underline";
  const being = go.match(/^\/beings\/([^/]+)$/);
  if (being?.[1]) {
    return (
      <Link to="/beings/$beingId" params={{ beingId: being[1] }} className={className}>
        Open the desk that holds this
      </Link>
    );
  }
  if (go in DESK) {
    return (
      <Link to={DESK[go as keyof typeof DESK]} className={className}>
        Open the desk that holds this
      </Link>
    );
  }
  return null;
}

function RoomPage() {
  return (
    <Page
      kicker="Room"
      title="The questions we ask ourselves first."
      lead="A closer that cannot survive its own objections is a brochure. These are the ones a partner will ask. The answers do not get prettier because the meeting is tomorrow."
    >
      <ol className="mt-8 space-y-4">
        {OBJECTIONS.map((item, i) => (
          <li key={item.id} className="rounded-xl border border-line bg-surface p-5 md:p-6">
            <p className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-2 font-serif text-2xl">{item.ask}</h2>
            <p className="mt-3 max-w-3xl text-muted">{item.answer}</p>
            {item.go ? <DeskLink go={item.go} /> : null}
          </li>
        ))}
      </ol>
    </Page>
  );
}
