import type { MetadataRoute } from "next";

const SITE = "https://moristack.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/services", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
  ];

  return sections.map(({ path, priority }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
