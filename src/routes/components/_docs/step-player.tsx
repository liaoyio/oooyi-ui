import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/step-player";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/step-player";

export const Route = createFileRoute("/components/_docs/step-player")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
