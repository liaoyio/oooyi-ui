import { createFileRoute } from "@tanstack/react-router";
import Demo from "./-demos/familydrawer";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/components/_docs/familydrawer")({
  head: () => pageHead({ title: "Family Drawer", robots: "noindex, nofollow" }),
  component: Demo,
});
