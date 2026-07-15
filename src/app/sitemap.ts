import type { MetadataRoute } from "next";
import { REALISATIONS } from "@/data/realisations";

const SITE_URL = "https://kenzarenov.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const realisationEntries: MetadataRoute.Sitemap = REALISATIONS.map((r) => ({
    url: `${SITE_URL}/realisations/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...realisationEntries,
  ];
}
