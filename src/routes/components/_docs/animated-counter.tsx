import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/animated-counter";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/animated-counter";

export const Route = createFileRoute("/components/_docs/animated-counter")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
