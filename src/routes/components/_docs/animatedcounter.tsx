import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/animatedcounter";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/animatedcounter";

export const Route = createFileRoute("/components/_docs/animatedcounter")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
