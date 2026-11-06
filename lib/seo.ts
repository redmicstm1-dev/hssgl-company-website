import type { Metadata } from "next";
import { site } from "@/lib/site";

// Re-export site config so other files only need to import from "@/lib/seo"
export { site } from "@/lib/site";

/**
 * Constructs absolute URLs for canonics, OG images, and sitemaps.
 * Handles trailing/leading slashes cleanly.
 */
export function absoluteUrl(path: string = ""): string {
  const rootUrl = site.url.endsWith("/") ? site.url.slice(0, -1) : site.url;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${rootUrl}${path ? cleanPath : ""}`;
}

interface PageMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Generates standardized Next.js Metadata for pages.
 */
export function constructMetadata({
  title,
  description = site.description,
  path = "",
  image = "/og-image.jpg",
  noIndex = false,
}: PageMetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${site.shortName}` : `${site.name} | ${site.motto}`;
  const url = absoluteUrl(path);

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [absoluteUrl(image)],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

/**
 * JSON-LD Schema Generator for Local Business SEO (Google Knowledge Graph)
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 7 DGideons Street, Akwuöse",
      addressLocality: "Asaba",
      addressRegion: "Delta State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.1983, // Asaba coordinates
      longitude: 6.7262,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Delta State",
      },
      {
        "@type": "City",
        name: "Asaba",
      },
    ],
    priceRange: "$$",
  };
}