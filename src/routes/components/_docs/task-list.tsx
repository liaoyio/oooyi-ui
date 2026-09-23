import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/task-list";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/task-list";

export const Route = createFileRoute("/components/_docs/task-list")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
