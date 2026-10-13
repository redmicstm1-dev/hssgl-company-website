import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/services", "/industries", "/request-security-services", "/contact", "/privacy-policy"];
  return routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date() }));
}
