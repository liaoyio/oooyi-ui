import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/scroll-progress";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/scroll-progress";

export const Route = createFileRoute("/components/_docs/scroll-progress")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
