import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/bounce-sidebar";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/bounce-sidebar";

export const Route = createFileRoute("/components/_docs/bounce-sidebar")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
