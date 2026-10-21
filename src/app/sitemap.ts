import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils";

// Requerido con output: "export" para generar el archivo estático.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
