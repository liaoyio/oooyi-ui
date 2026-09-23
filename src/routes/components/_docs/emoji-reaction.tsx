import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/emoji-reaction";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/emoji-reaction";

export const Route = createFileRoute("/components/_docs/emoji-reaction")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
