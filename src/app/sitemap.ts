import type { MetadataRoute } from "next";

const SITE = "https://moristack.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/request", priority: 0.9 },
    { path: "/guides", priority: 0.7 },
    { path: "/guides/how-moristack-handles-your-request", priority: 0.6 },
    { path: "/guides/call-vs-plan", priority: 0.6 },
    { path: "/guides/what-reviewed-up-front-means", priority: 0.6 },
    { path: "/guides/cash-vs-ic-card-in-japan-2026", priority: 0.7 },
    { path: "/services", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  return sections.map(({ path, priority }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
