import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/footer";
import GooeyNavbar from "@/components/gooey-navbar";
import HeroIntro from "@/components/hero-intro";
import SponsorStats from "@/components/sponsors/sponsor-stats";
import TierPricing from "@/components/sponsors/tier-pricing";
import { fetchPageviews } from "@/lib/databuddy";
import { fetchStarCount } from "@/lib/github";
import { SITE_KEYWORDS, pageHead } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

const TITLE = `Sponsors | ${SITE_NAME}`;
const DESCRIPTION = `Support ${SITE_NAME} and help keep its animated React components available to developers.`;

export const Route = createFileRoute("/sponsors/")({
  loader: async () => {
    const [stars, pageviews] = await Promise.all([fetchStarCount(), fetchPageviews()]);
    return { stars, pageviews };
  },
  head: () => pageHead({
    title: "Sponsors",
    description: DESCRIPTION,
    keywords: [`${SITE_NAME} sponsors`, "component sponsorship", ...SITE_KEYWORDS],
    canonical: "/sponsors",
    openGraph: { title: TITLE, description: DESCRIPTION, url: "/sponsors" },
    twitter: { title: TITLE, description: DESCRIPTION },
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  const { stars, pageviews } = Route.useLoaderData();

  return (
    <>
      <section className="relative w-full p-1.5 md:p-2.5">
        <div
          className="relative flex min-h-[min(78svh,50rem)] w-full items-center justify-center overflow-hidden rounded-[45px] border border-black/[0.04] bg-[#F5F5F7] dark:border-transparent dark:border-apple dark:bg-[#121212]"
          style={{ cornerShape: "squircle" } as React.CSSProperties}
        >
          <GooeyNavbar stars={stars} />

          <img
            src="/logos/oooyi-ui.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[68%] w-[860px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.05] [filter:brightness(0)] dark:opacity-[0.07] dark:[filter:brightness(0)_invert(1)]"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(120%_75%_at_50%_-5%,rgba(255,255,255,0.07),transparent_60%)] dark:block" />

          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-3 px-4 pb-20 pt-28 text-center sm:gap-4 sm:px-6">
            <HeroIntro
              headline="Sponsors"
              sub={`Sponsorship information for ${SITE_NAME}. New plans are being prepared.`}
            >
              <p className="mt-4 text-sm font-medium text-black/60 dark:text-white/60">
                Previous sponsorships belonged to the original component collection.
              </p>
            </HeroIntro>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <SponsorStats stars={stars} pageviews={pageviews} />

        <TierPricing />

      </main>

      <Footer />
    </>
  );
}
