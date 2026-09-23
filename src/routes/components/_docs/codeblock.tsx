import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/codeblock";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/codeblock";

export const Route = createFileRoute("/components/_docs/codeblock")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
