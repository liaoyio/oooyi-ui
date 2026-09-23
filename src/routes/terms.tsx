import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import GooeyNavbar from "@/components/GooeyNavbar";
import LegalPage from "@/components/legal/LegalPage";
import { fetchStarCount } from "@/lib/github";
import { LEGAL_UPDATED, TERMS_SECTIONS } from "@/lib/legal";
import { SITE_NAME } from "@/lib/site";
import { pageHead } from "@/lib/seo";

const DESCRIPTION = `Terms for using ${SITE_NAME}'s component registry, including license, attribution, and redistribution requirements.`;

export const Route = createFileRoute("/terms")({
  loader: () => fetchStarCount(),
  head: () => pageHead({
    title: "Terms of Service",
    description: DESCRIPTION,
    canonical: "/terms",
    openGraph: { title: `Terms of Service | ${SITE_NAME}`, description: DESCRIPTION, url: "/terms" },
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  const stars = Route.useLoaderData();

  return (
    <>
      <GooeyNavbar stars={stars} />

      <LegalPage
        title="Terms of Service"
        updated={LEGAL_UPDATED}
        intro={DESCRIPTION}
        sections={TERMS_SECTIONS}
      />

      <Footer />
    </>
  );
}
