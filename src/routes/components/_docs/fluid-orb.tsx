import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/fluid-orb";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/fluid-orb";

export const Route = createFileRoute("/components/_docs/fluid-orb")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
