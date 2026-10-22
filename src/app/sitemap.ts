import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils";
import { templates } from "@/data/templates";

// Requerido con output: "export" para generar el archivo estático.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const now = new Date();

  return [
    {
      url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${url}/plantillas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...templates.map((template) => ({
      url: `${url}/plantillas/${template.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
