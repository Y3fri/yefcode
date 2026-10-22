import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemplateDetail } from "@/components/templates/TemplateDetail";
import { getTemplateBySlug, templates } from "@/data/templates";

type TemplatePageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Ruta dinámica de plantilla. Con output: "export" se prerenderiza
 * una página por cada slug del catálogo (generateStaticParams).
 */
export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return {};

  // Metadata en español (idioma por defecto del sitio).
  return {
    title: template.title.es,
    description: template.description.es,
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  return <TemplateDetail template={template} />;
}
