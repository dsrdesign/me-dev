import type { MetadataRoute } from "next";

import { projects } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projets/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
