import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/footer";
import GooeyNavbar from "@/components/gooey-navbar";
import LegalPage from "@/components/legal/legal-page";
import { fetchStarCount } from "@/lib/github";
import { LEGAL_UPDATED, PRIVACY_SECTIONS } from "@/lib/legal";
import { SITE_NAME } from "@/lib/site";
import { pageHead } from "@/lib/seo";

const DESCRIPTION = `How ${SITE_NAME} handles your data: no accounts, no ads, no tracking cookies. What we collect, who processes it, how long we keep it, and how to reach us about it.`;

export const Route = createFileRoute("/privacy")({
  loader: () => fetchStarCount(),
  head: () => pageHead({
    title: "Privacy Policy",
    description: DESCRIPTION,
    canonical: "/privacy",
    openGraph: { title: `Privacy Policy | ${SITE_NAME}`, description: DESCRIPTION, url: "/privacy" },
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const stars = Route.useLoaderData();

  return (
    <>
      <GooeyNavbar stars={stars} />

      <LegalPage
        title="Privacy Policy"
        updated={LEGAL_UPDATED}
        intro={DESCRIPTION}
        sections={PRIVACY_SECTIONS}
      />

      <Footer />
    </>
  );
}
