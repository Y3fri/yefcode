import type { Metadata } from "next";
import { TemplatesGallery } from "@/components/templates/TemplatesGallery";
import { es } from "@/data/i18n/es";

export const metadata: Metadata = {
  title: es.templates.title,
  description: es.templates.description,
};

/** Galería de plantillas con filtro por categoría y demos en vivo. */
export default function TemplatesPage() {
  return <TemplatesGallery />;
}
