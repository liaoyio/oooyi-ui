import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/emojireaction";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/emojireaction";

export const Route = createFileRoute("/components/_docs/emojireaction")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
