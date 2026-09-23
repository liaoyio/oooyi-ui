import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/gridreveal";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/gridreveal";

export const Route = createFileRoute("/components/_docs/gridreveal")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
