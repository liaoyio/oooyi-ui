import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/otpinput";
import { componentPageHead } from "@/lib/seo";

const HREF = "/components/otpinput";

export const Route = createFileRoute("/components/_docs/otpinput")({
  head: () => componentPageHead(HREF),
  component: Demo,
});
