import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/gravityletters";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/gravityletters";

export const Route = createFileRoute("/components/_docs/gravityletters")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
