import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/tasklist";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/tasklist";

export const Route = createFileRoute("/components/_docs/tasklist")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
