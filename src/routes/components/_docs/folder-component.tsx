import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/folder-component";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/folder-component";

export const Route = createFileRoute("/components/_docs/folder-component")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
