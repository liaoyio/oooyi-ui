import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/githubactivity";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/githubactivity";

export const Route = createFileRoute("/components/_docs/githubactivity")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
