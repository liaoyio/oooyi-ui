import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/fluidorb";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/fluidorb";

export const Route = createFileRoute("/components/_docs/fluidorb")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
