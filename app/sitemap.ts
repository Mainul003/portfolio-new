import type { MetadataRoute } from "next";
import { getAllArticleSlugs } from "@/lib/mdx";

const BASE_URL = "https://mainulislam.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllArticleSlugs();
  const articleUrls = slugs.map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articleUrls,
  ];
}
