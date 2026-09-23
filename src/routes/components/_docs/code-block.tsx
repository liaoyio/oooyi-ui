import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/code-block";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/code-block";

export const Route = createFileRoute("/components/_docs/code-block")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
