import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/durationpicker";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/durationpicker";

export const Route = createFileRoute("/components/_docs/durationpicker")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
