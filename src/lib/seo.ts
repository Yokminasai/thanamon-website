import type { Metadata } from "next";
import {
  KEYWORD,
  SITE_NAME,
  SITE_NAME_EN,
  SITE_TAGLINE,
  SITE_URL,
  SAME_AS,
  SOCIAL,
  GOOGLE_SITE_VERIFICATION,
} from "./constants";

export function absoluteUrl(path = ""): string {
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p === "/" ? "" : p}`;
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-image.svg",
  type = "website",
  keywords = [KEYWORD, SITE_NAME_EN, "personal branding", "SEO", "ปรัชญา", "cybersecurity"],
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — นักคิด นักเขียน ผู้เชี่ยวชาญ SEO และ Personal Branding`;
  const desc =
    description ??
    `${KEYWORD} — ${SITE_TAGLINE} สร้างอำนาจทางความคิดในปรัชญา เทคโนโลยี ความปลอดภัยไซเบอร์ และวัฒนธรรมดิจิทัล`;
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description: desc,
    keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "th_TH",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description: desc,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: KEYWORD }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [absoluteUrl(image)],
    },
    verification: {
      google: GOOGLE_SITE_VERIFICATION,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": "TH",
      "content-language": "th",
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    alternateName: SITE_NAME_EN,
    url: SITE_URL,
    jobTitle: [
      "นักคิด",
      "นักเขียน",
      "ผู้สร้างคอนเทนต์ดิจิทัล",
      "ผู้เชี่ยวชาญ SEO",
    ],
    description: SITE_TAGLINE,
    knowsAbout: [
      "ปรัชญา",
      "เทคโนโลยี",
      "Cybersecurity",
      "Digital Culture",
      "Neuroscience",
      "Mental Health",
      "SEO",
      "Personal Branding",
    ],
    sameAs: [...SAME_AS],
    mainEntityOfPage: SITE_URL,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: SITE_NAME_EN,
    url: SITE_URL,
    description: SITE_TAGLINE,
    inLanguage: "th-TH",
    author: { "@type": "Person", name: SITE_NAME, sameAs: [...SAME_AS] },
    publisher: { "@type": "Person", name: SITE_NAME },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/articles?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const url = absoluteUrl(`/articles/${article.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url,
    mainEntityOfPage: url,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    inLanguage: "th-TH",
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: [...SAME_AS],
    },
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    image: article.image ? absoluteUrl(article.image) : absoluteUrl("/og-image.svg"),
    keywords: KEYWORD,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function profileLinks() {
  return [
    { href: SOCIAL.wordpress, label: "WordPress", rel: "me" as const },
    { href: SOCIAL.youtube, label: "YouTube", rel: "me" as const },
    { href: SOCIAL.instagram, label: "Instagram", rel: "me" as const },
  ];
}
