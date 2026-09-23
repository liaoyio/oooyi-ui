import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/footer";
import ComponentCard from "@/components/gallery/component-card";
import GooeyNavbar from "@/components/gooey-navbar";
import { components, gallerySections } from "@/lib/components";
import { fetchStarCount } from "@/lib/github";
import { SITE_KEYWORDS, componentsJsonLd, pageHead } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/components/")({
  loader: () => fetchStarCount(),
  head: () => pageHead({
    title: "Components",
    description: `Browse ${SITE_NAME}'s animated React components. Install their source code with the shadcn CLI.`,
    keywords: SITE_KEYWORDS,
    canonical: "/components",
    jsonLd: componentsJsonLd(),
  }),
  component: ComponentsIndexPage,
});

function ComponentsIndexPage() {
  const stars = Route.useLoaderData();

  return (
    <>
      <GooeyNavbar stars={stars} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-16 pt-32 sm:px-6 md:pt-40">
        <header className="flex flex-col items-center gap-3 text-center">
          <h1 className="max-w-2xl text-balance font-runde text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {components.length} animated and distinctive components
          </h1>
          <p className="max-w-lg text-balance text-sm font-medium text-muted-foreground sm:text-base">
            Every component is source code you own, not a package you
            install. Add any component with the shadcn CLI.{" "}
            <span className="hidden [@media(hover:hover)]:inline">
              <span className="text-[#FC4C01]">[</span>
              Hover to play video
              <span className="text-[#FC4C01]">]</span>
            </span>
          </p>
        </header>

        {gallerySections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mt-14 scroll-mt-28 first:mt-10"
          >
            <h2 className="font-runde text-lg font-semibold tracking-tight sm:text-xl">
              {section.label}{" "}
              <span className="text-muted-foreground">
                <span className="text-[#FC4C01]">[</span>
                {section.items.length}
                <span className="text-[#FC4C01]">]</span>
              </span>
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <ComponentCard key={item.href} item={item} />
              ))}
            </div>
          </section>
        ))}

      </main>

      <Footer />
    </>
  );
}
