import { createFileRoute } from "@tanstack/react-router";
import { CloserView } from "@/components/seal/closer-view";

export const Route = createFileRoute("/closer")({
  component: () => <CloserView />,
});
