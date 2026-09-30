import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/toolkit/thanks", "/downloads/toolkit/"],
    },
    sitemap: "https://rentalcashflowlab.com/sitemap.xml",
  };
}
