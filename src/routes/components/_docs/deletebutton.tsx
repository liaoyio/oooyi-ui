import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/deletebutton";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/deletebutton";

export const Route = createFileRoute("/components/_docs/deletebutton")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
