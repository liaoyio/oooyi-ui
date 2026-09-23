import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/scrollprogressindicator";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/scrollprogressindicator";

export const Route = createFileRoute("/components/_docs/scrollprogressindicator")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
