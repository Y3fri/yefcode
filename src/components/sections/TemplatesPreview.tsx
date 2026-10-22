"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { useSettings } from "@/components/providers/SettingsProvider";
import { templates } from "@/data/templates";

/**
 * Vista previa de plantillas en el home: muestra el catálogo completo
 * con enlace a la galería filtrable (/plantillas).
 */
export function TemplatesPreview() {
  const { t } = useSettings();

  return (
    <section id="plantillas" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.templates.command}
          title={t.templates.title}
          description={t.templates.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/plantillas"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/60 px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent-indigo/50"
          >
            {t.templates.viewAll}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
