import { Link, createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/footer";
import GooeyNavbar from "@/components/gooey-navbar";
import { fetchStarCount } from "@/lib/github";
import { pageHead } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { tierByParam } from "@/lib/sponsors";

export const Route = createFileRoute("/sponsors/thank-you")({
  validateSearch: (search) => ({
    tier: typeof search.tier === "string" ? search.tier : undefined,
  }),
  loader: () => fetchStarCount(),
  head: () => pageHead({
    title: "Sponsorship follow-up",
    description: `Sponsorship information for ${SITE_NAME}.`,
    robots: "noindex, nofollow",
  }),
  component: SponsorThankYouPage,
});

function SponsorThankYouPage() {
  const stars = Route.useLoaderData();
  const { tier: tierParam } = Route.useSearch();
  const tier = tierByParam(tierParam);

  return (
    <>
      <GooeyNavbar stars={stars} />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-6 px-5 py-32 text-center sm:px-6">
        <h1 className="text-balance font-runde text-3xl font-bold tracking-tight sm:text-4xl">
          Thank you for your interest in supporting {SITE_NAME}.
        </h1>
        <p className="max-w-lg font-medium leading-relaxed text-muted-foreground">
          {tier ? `You selected the ${tier.name} tier. ` : ""}
          Sponsorship details are being updated. This page does not confirm a payment.
        </p>
        <Link
          to="/sponsors"
          className="font-runde text-sm font-semibold text-foreground underline underline-offset-4"
        >
          View sponsorship options
        </Link>
      </main>

      <Footer />
    </>
  );
}
