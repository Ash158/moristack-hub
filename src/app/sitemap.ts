import type { MetadataRoute } from "next";

const SITE = "https://moristack.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const langs: ("ja" | "en")[] = ["en", "ja"];
  const sections = ["", "/services", "/about", "/contact"];

  // Build URLs in the order: root → ja + en (each section, with /en and /ja
  // and x-default alternates). We omit the noindex /api/ routes.
  const urls: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          ja: `${SITE}/`,
          en: `${SITE}/en`,
          "x-default": `${SITE}/en`,
        },
      },
    },
  ];

  for (const lang of langs) {
    for (const section of sections) {
      const isHome = section === "";
      urls.push({
        url: `${SITE}/${lang}${section}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: isHome ? 1.0 : 0.6,
        alternates: {
          languages: {
            ja: `${SITE}/ja${section}`,
            en: `${SITE}/en${section}`,
            "x-default": `${SITE}/en${section}`,
          },
        },
      });
    }
  }

  return urls;
}
