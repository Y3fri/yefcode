import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils";

// Requerido con output: "export" para generar el archivo estático.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const url = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
