import { SITE_NAME, SITE_REPO } from "@/lib/site";

export type LegalSection = {
  heading: string;
  body?: string[];
  list?: string[];
};

export const LEGAL_UPDATED = "September 23, 2026";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "About this site",
    body: [
      SITE_NAME + " is a public component gallery and source registry. Browsing the gallery and installing a component do not require an account.",
      "This site does not offer payments or sponsorship checkout. The original Rare UI sponsorship program is separate from this project.",
    ],
  },
  {
    heading: "Information used by the site",
    list: [
      "The site may request the public star count for its GitHub repository.",
      "If the deployment operator configures aggregate analytics, the site may show pageview totals. This repository does not include an analytics key.",
      "Your browser may store your theme preference locally on your device.",
    ],
  },
  {
    heading: "External services",
    body: [
      "GitHub hosts the source repository and handles issues and pull requests under its own privacy policy. Public issues and pull requests are visible to others.",
      "A deployment provider may process ordinary web server logs. Its practices depend on the deployment chosen by the operator.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Report site or component issues at " + SITE_REPO + "/issues. Do not post private information in a public issue.",
    ],
  },
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "The registry",
    body: [
      SITE_NAME + " makes component source files available through the shadcn CLI. The full license text is at " + SITE_REPO + "/blob/main/LICENSE.",
      "The original Rare UI code and site design remain attributable to their original creator. The ooOYi UI maintainer has stated that separate authorization was obtained for this migration and redistribution. That authorization does not grant downstream users additional rights.",
    ],
  },
  {
    heading: "Using the components",
    body: [
      "The original LICENSE requires a visible credit to Rare UI at https://rareui.com and retention of its copyright notice when shipping original component code.",
      "The Commons Clause in that LICENSE restricts selling, sublicensing, or redistributing the components themselves. Read the full LICENSE before using or sharing the code.",
    ],
  },
  {
    heading: "No checkout",
    body: [
      SITE_NAME + " does not currently sell sponsorships, subscriptions, or paid components. Payment and refund terms from the original Rare UI project do not apply here.",
    ],
  },
  {
    heading: "No warranty",
    body: [
      "The component source is provided as is. The LICENSE contains the applicable warranty disclaimer and limitation of liability.",
    ],
  },
];
