import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/github-activity";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/github-activity";

export const Route = createFileRoute("/components/_docs/github-activity")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
