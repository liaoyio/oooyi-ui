import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/gooey-nav";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/gooey-nav";

export const Route = createFileRoute("/components/_docs/gooey-nav")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
