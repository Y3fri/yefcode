"use client";

import Link from "next/link";
import { Chip } from "@/components/ui/Chip";
import { useLocalizedText, useSettings } from "@/components/providers/SettingsProvider";
import { templateDemos } from "@/templates";
import { whatsappUrlForTemplate } from "@/data/socials";
import type { Template, TemplateSlug } from "@/data/templates";

type TemplateDetailProps = {
  template: Template;
};

/**
 * Página de plantilla: encabezado del catálogo, banner visible de "Demo"
 * y la demo en vivo dentro de un marco tipo navegador.
 * Los slugs del catálogo y del registro (templateDemos) coinciden
 * siempre: el registro está tipado por TemplateSlug.
 */
export function TemplateDetail({ template }: TemplateDetailProps) {
  const { t } = useSettings();
  const text = useLocalizedText();
  const categoryLabel = t.templates.categories[template.category];
  const Demo = templateDemos[template.slug as TemplateSlug];

  return (
    <div className="w-full max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-24">
      <Link
        href="/plantillas"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-foreground"
      >
        <span aria-hidden="true">←</span>
        {t.templates.backLink}
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <Chip variant="accent">{categoryLabel}</Chip>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-warn/40 bg-warn/10 px-2.5 py-1 font-mono text-[11px] text-warn">
            <span className="h-1.5 w-1.5 rounded-full bg-warn" aria-hidden="true" />
            {t.templates.demoBadge}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {text(template.title)}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {text(template.description)}
        </p>
        <p className="mt-3 max-w-2xl font-mono text-xs leading-relaxed text-faint">
          <span className="text-muted">{t.templates.bestForLabel}:</span>{" "}
          {text(template.bestFor)}
        </p>
        {template.note ? (
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted">
            {text(template.note)}
          </p>
        ) : null}
      </header>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
        <div className="flex items-center gap-2 border-b border-border bg-surface-2/70 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="ml-2 font-mono text-xs text-faint">
            plantillas/{template.slug}
          </span>
        </div>

        <p
          role="note"
          className="border-b border-warn/30 bg-warn/10 px-4 py-2.5 font-mono text-xs leading-relaxed text-warn"
        >
          {t.templates.demoNote}
        </p>

        {Demo ? <Demo /> : null}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={whatsappUrlForTemplate(text(template.title))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet px-5 py-2.5 font-mono text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {t.templates.cta}
          <span aria-hidden="true">↗</span>
          <span className="sr-only">{t.newTab}</span>
        </a>
        <Link
          href="/plantillas"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/60 px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent-indigo/50"
        >
          {t.templates.backLink}
        </Link>
      </div>
    </div>
  );
}
