import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/proximitysidebar";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/proximitysidebar";

export const Route = createFileRoute("/components/_docs/proximitysidebar")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
