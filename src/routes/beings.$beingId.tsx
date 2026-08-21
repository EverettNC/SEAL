import { createFileRoute } from "@tanstack/react-router";
import { BeingView } from "@/components/seal/being-view";
import { beingById } from "@/lib/seal/catalog";
import { useStamps } from "@/lib/seal/stamps";

export const Route = createFileRoute("/beings/$beingId")({
  component: BeingRoute,
});

function BeingRoute() {
  const { beingId } = Route.useParams();
  const being = beingById(beingId);
  const stamped = useStamps((s) => Boolean(s.stamps[beingId]));

  if (!being) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="text-muted">That being is not in this vault.</p>
      </main>
    );
  }

  return <BeingView being={being} stamped={stamped} />;
}
