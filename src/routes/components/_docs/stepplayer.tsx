import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/stepplayer";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/stepplayer";

export const Route = createFileRoute("/components/_docs/stepplayer")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
