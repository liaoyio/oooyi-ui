import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/notification-bell";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/notification-bell";

export const Route = createFileRoute("/components/_docs/notification-bell")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
