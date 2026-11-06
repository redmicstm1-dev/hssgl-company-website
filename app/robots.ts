import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Strict check to ensure preview and staging deployments are never indexed
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production";

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",       // Protect API routes from crawl budget waste
          "/admin/",     // Block administration routes
          "/checkout/",  // Block dynamic cart/checkout flows
          "/*?*",        // Prevent indexing of query strings / tracking parameters to avoid duplicate content penalties
        ],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}