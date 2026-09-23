import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/foldercomponent";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/foldercomponent";

export const Route = createFileRoute("/components/_docs/foldercomponent")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
