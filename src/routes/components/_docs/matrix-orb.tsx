import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/matrix-orb";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/matrix-orb";

export const Route = createFileRoute("/components/_docs/matrix-orb")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
