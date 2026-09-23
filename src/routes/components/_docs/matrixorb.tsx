import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/matrixorb";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/matrixorb";

export const Route = createFileRoute("/components/_docs/matrixorb")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
