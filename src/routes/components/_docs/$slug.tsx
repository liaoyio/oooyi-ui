import { createFileRoute, notFound, redirect, useLocation } from "@tanstack/react-router";
import { components } from "@/lib/components";
import { pageHead } from "@/lib/seo";

const legacySlugs: Record<string, string> = {
  animatedcounter: "animated-counter",
  bouncesidebar: "bounce-sidebar",
  codeblock: "code-block",
  deletebutton: "delete-button",
  durationpicker: "duration-picker",
  emojireaction: "emoji-reaction",
  familydrawer: "family-drawer",
  fluidorb: "fluid-orb",
  foldercomponent: "folder-component",
  githubactivity: "github-activity",
  gooeynav: "gooey-nav",
  gravityletters: "gravity-letters",
  gridreveal: "grid-reveal",
  hooksidebar: "hook-sidebar",
  matrixorb: "matrix-orb",
  notificationbell: "notification-bell",
  otpinput: "otp-input",
  proximitysidebar: "proximity-sidebar",
  scrollprogressindicator: "scroll-progress",
  stepplayer: "step-player",
  tasklist: "task-list",
};

export const Route = createFileRoute("/components/_docs/$slug")({
  loader: ({ params }) => {
    const slug = legacySlugs[params.slug];
    if (slug) {
      throw redirect({ href: `/components/${slug}`, statusCode: 301 });
    }
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
