import { createFileRoute, notFound, useLocation } from "@tanstack/react-router";
import { components } from "@/lib/components";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/components/_docs/$slug")({
  loader: () => {
    throw notFound();
  },
  head: () => pageHead({ title: "Component not found", robots: "noindex" }),
  component: ComponentNotFound,
  notFoundComponent: ComponentNotFound,
});

function ComponentNotFound() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const item = components.find((component) => component.href === pathname);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">{item?.name ?? "Component"}</h1>
      <p className="text-foreground/55">This component is not available yet.</p>
    </div>
  );
}
