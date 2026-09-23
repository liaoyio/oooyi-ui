import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/grid-reveal";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/grid-reveal";

export const Route = createFileRoute("/components/_docs/grid-reveal")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
