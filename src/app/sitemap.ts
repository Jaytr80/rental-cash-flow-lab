import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/books",
    "/start-here",
    "/free-deal-analyzer",
    "/about",
    "/disclaimer",
    "/privacy",
    "/toolkit",
  ].map((path) => ({ url: `https://rentalcashflowlab.com${path}` }));
}
