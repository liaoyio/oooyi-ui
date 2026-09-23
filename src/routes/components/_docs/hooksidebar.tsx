import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/hooksidebar";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/hooksidebar";

export const Route = createFileRoute("/components/_docs/hooksidebar")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
