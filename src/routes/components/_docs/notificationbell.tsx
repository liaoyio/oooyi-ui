import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/notificationbell";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/notificationbell";

export const Route = createFileRoute("/components/_docs/notificationbell")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
