import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/otp-input";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/otp-input";

export const Route = createFileRoute("/components/_docs/otp-input")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
