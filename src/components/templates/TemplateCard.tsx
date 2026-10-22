"use client";

import Image from "next/image";
import Link from "next/link";
import { Chip } from "@/components/ui/Chip";
import {
  useLocalizedText,
  useSettings,
} from "@/components/providers/SettingsProvider";
import { whatsappUrlForTemplate } from "@/data/socials";
import type { Template } from "@/data/templates";

type TemplateCardProps = {
  template: Template;
  /**
   * Nivel del encabezado: h3 cuando la tarjeta cuelga de un h2 (home)
   * y h2 cuando cuelga directo del h1 (galería /plantillas).
   */
  headingLevel?: 2 | 3;
};

/**
 * Tarjeta de plantilla: vista previa (SVG), distintivo "Demo",
 * categoría, descripción, uso recomendado y acciones
 * (ver demo en vivo / pedirla por WhatsApp con el nombre prellenado).
 */
export function TemplateCard({ template, headingLevel = 3 }: TemplateCardProps) {
  const { t } = useSettings();
  const text = useLocalizedText();
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const categoryLabel = t.templates.categories[template.category];

  return (
    <article className="group card-hover flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent-indigo/50">
      <Link
        href={`/plantillas/${template.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-background-soft"
        aria-label={`${t.templates.viewDemo}: ${text(template.title)}`}
      >
        <Image
          src={template.previewImage}
          alt={t.templates.previewAlt(text(template.title))}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-warn/40 bg-background/80 px-2.5 py-1 font-mono text-[11px] text-warn backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-warn" aria-hidden="true" />
          {t.templates.demoBadge}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <Heading className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-blue">
            <Link href={`/plantillas/${template.slug}`}>{text(template.title)}</Link>
          </Heading>
          <Chip variant="accent">{categoryLabel}</Chip>
        </div>

        <p className="text-sm leading-relaxed text-muted">{text(template.description)}</p>

        <p className="font-mono text-xs leading-relaxed text-faint">
          <span className="text-muted">{t.templates.bestForLabel}:</span>{" "}
          {text(template.bestFor)}
        </p>

        {template.note ? (
          <p className="rounded-xl border border-border bg-surface-2/60 px-3 py-2 text-xs leading-relaxed text-muted">
            {text(template.note)}
          </p>
        ) : null}

        <ul className="flex flex-wrap gap-2" aria-label={t.templates.includesLabel}>
          {template.features.map((feature) => (
            <li key={feature.es}>
              <Chip>{text(feature)}</Chip>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
          <Link
            href={`/plantillas/${template.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet px-4 py-2 font-mono text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t.templates.viewDemo}
          </Link>
          <a
            href={whatsappUrlForTemplate(text(template.title))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/60 px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-accent-indigo/50"
          >
            {t.templates.cta}
            <span aria-hidden="true">↗</span>
            <span className="sr-only">{t.newTab}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
