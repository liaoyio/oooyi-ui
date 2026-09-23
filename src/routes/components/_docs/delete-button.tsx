import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/delete-button";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/delete-button";

export const Route = createFileRoute("/components/_docs/delete-button")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
