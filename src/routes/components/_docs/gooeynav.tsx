import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/gooeynav";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/gooeynav";

export const Route = createFileRoute("/components/_docs/gooeynav")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
