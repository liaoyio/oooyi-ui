import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/duration-picker";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/duration-picker";

export const Route = createFileRoute("/components/_docs/duration-picker")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
