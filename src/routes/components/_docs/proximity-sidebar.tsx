import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/proximity-sidebar";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/proximity-sidebar";

export const Route = createFileRoute("/components/_docs/proximity-sidebar")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
