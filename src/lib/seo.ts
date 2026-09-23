import { components } from "@/lib/components";
import {
  PUBLIC_SITE_URL,
  SITE_ALT_NAMES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_REPO,
} from "@/lib/site";

export const SITE_KEYWORDS = [
  "ooOYi UI",
  "react components",
  "tanstack start components",
  "shadcn registry",
  "shadcn components",
  "animated ui components",
  "motion react",
  "tailwind css components",
  "free ui components",
  "microinteractions",
];

type SocialMeta = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export type PageHeadOptions = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  robots?: string;
  openGraph?: SocialMeta;
  twitter?: SocialMeta;
  jsonLd?: object | null;
};

function absoluteUrl(path: string) {
  return PUBLIC_SITE_URL ? new URL(path, PUBLIC_SITE_URL).href : undefined;
}

export function pageHead(options: PageHeadOptions) {
  const { title, description, keywords, canonical, robots, openGraph, twitter, jsonLd } = options;
  const resolvedTitle =
    title && title !== SITE_NAME && !title.endsWith(" | " + SITE_NAME)
      ? title + " | " + SITE_NAME
      : title;
  const canonicalUrl = canonical ? absoluteUrl(canonical) : undefined;
  const og = openGraph ?? {};
  const tw = twitter ?? {};
  const meta: Array<
    | { title: string }
    | { name: string; content: string }
    | { property: string; content: string }
  > = [];

  if (resolvedTitle) meta.push({ title: resolvedTitle });
  if (description) meta.push({ name: "description", content: description });
  if (keywords?.length) meta.push({ name: "keywords", content: keywords.join(", ") });
  if (robots) meta.push({ name: "robots", content: robots });
  if (resolvedTitle || og.title) meta.push({ property: "og:title", content: og.title ?? resolvedTitle! });
  if (description || og.description) {
    meta.push({ property: "og:description", content: og.description ?? description! });
  }
  if (og.url || canonicalUrl) {
    const url = og.url ? absoluteUrl(og.url) : canonicalUrl;
    if (url) meta.push({ property: "og:url", content: url });
  }
  if (og.image) {
    const image = absoluteUrl(og.image);
    if (image) meta.push({ property: "og:image", content: image });
  }
  if (resolvedTitle || tw.title) meta.push({ name: "twitter:title", content: tw.title ?? resolvedTitle! });
  if (description || tw.description) {
    meta.push({ name: "twitter:description", content: tw.description ?? description! });
  }
  if (tw.image) {
    const image = absoluteUrl(tw.image);
    if (image) meta.push({ name: "twitter:image", content: image });
  }

  return {
    meta,
    links: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : [],
    scripts: jsonLd
      ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }]
      : [],
  };
}

export function componentPageHead(href: string) {
  const item = components.find((component) => component.href === href);
  if (!item) return pageHead({ title: "Component not found", robots: "noindex" });

  const name = item.name.toLowerCase();
  return pageHead({
    title: item.name + " | " + SITE_NAME,
    description: item.description,
    keywords: [
      name,
      name + " react",
      name + " component",
      "animated " + name,
      name + " shadcn",
      ...SITE_KEYWORDS,
    ],
    canonical: item.href,
    jsonLd: componentJsonLd(href),
  });
}

export function componentJsonLd(href: string) {
  const item = components.find((component) => component.href === href);
  if (!item || !PUBLIC_SITE_URL) return null;

  const url = PUBLIC_SITE_URL + item.href;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: PUBLIC_SITE_URL },
          { "@type": "ListItem", position: 2, name: "Components", item: PUBLIC_SITE_URL + "/components" },
          { "@type": "ListItem", position: 3, name: item.name, item: url },
        ],
      },
      {
        "@type": "SoftwareSourceCode",
        name: item.name,
        description: item.description,
        url,
        codeRepository: item.source ?? SITE_REPO,
        programmingLanguage: "TypeScript",
        runtimePlatform: "React",
        isPartOf: { "@id": PUBLIC_SITE_URL + "/#website" },
        license: SITE_REPO + "/blob/main/LICENSE",
        author: { "@id": PUBLIC_SITE_URL + "/#organization" },
      },
    ],
  };
}

export function siteJsonLd() {
  if (!PUBLIC_SITE_URL) return null;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": PUBLIC_SITE_URL + "/#organization",
        name: SITE_NAME,
        alternateName: SITE_ALT_NAMES,
        url: PUBLIC_SITE_URL,
        logo: PUBLIC_SITE_URL + "/logos/oooyi-ui.svg",
        sameAs: [SITE_REPO],
      },
      {
        "@type": "WebSite",
        "@id": PUBLIC_SITE_URL + "/#website",
        name: SITE_NAME,
        alternateName: SITE_ALT_NAMES,
        url: PUBLIC_SITE_URL,
        description: SITE_DESCRIPTION,
        publisher: { "@id": PUBLIC_SITE_URL + "/#organization" },
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        "@id": PUBLIC_SITE_URL + "/#software",
        name: SITE_NAME,
        alternateName: SITE_ALT_NAMES,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        url: PUBLIC_SITE_URL,
        description: SITE_DESCRIPTION,
        softwareHelp: PUBLIC_SITE_URL + "/components",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  };
}

export function componentsJsonLd() {
  if (!PUBLIC_SITE_URL) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: SITE_NAME + " Components",
    url: PUBLIC_SITE_URL + "/components",
    isPartOf: { "@id": PUBLIC_SITE_URL + "/#website" },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: components.length,
      itemListElement: components.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.description,
        url: PUBLIC_SITE_URL + item.href,
      })),
    },
  };
}
