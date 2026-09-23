import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/family-drawer";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/components/_docs/family-drawer")({
  head: () => pageHead({ title: "Family Drawer", robots: "noindex, nofollow" }),
  component: Demo,
});
