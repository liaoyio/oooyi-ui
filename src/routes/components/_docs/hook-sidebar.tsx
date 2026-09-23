import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/hook-sidebar";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/hook-sidebar";

export const Route = createFileRoute("/components/_docs/hook-sidebar")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
