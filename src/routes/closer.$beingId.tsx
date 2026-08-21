import { createFileRoute } from "@tanstack/react-router";
import { CloserView } from "@/components/seal/closer-view";

export const Route = createFileRoute("/closer/$beingId")({
  component: CloserBeingRoute,
});

function CloserBeingRoute() {
  const { beingId } = Route.useParams();
  return <CloserView beingId={beingId} />;
}
