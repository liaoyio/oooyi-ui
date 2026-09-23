import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/bouncesidebar";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/bouncesidebar";

export const Route = createFileRoute("/components/_docs/bouncesidebar")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
