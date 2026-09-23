import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/gravity-letters";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/gravity-letters";

export const Route = createFileRoute("/components/_docs/gravity-letters")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
