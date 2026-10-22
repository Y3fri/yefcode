"use client";

import { useState } from "react";
import { GitLabel } from "@/components/ui/GitLabel";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { useSettings } from "@/components/providers/SettingsProvider";
import { profile } from "@/data/profile";
import { templateCategories, templates } from "@/data/templates";
import type { TemplateCategory } from "@/data/templates";
import { cn } from "@/lib/utils";

type CategoryFilter = "all" | TemplateCategory;

const filterOptions: readonly CategoryFilter[] = ["all", ...templateCategories];

/**
 * Galería de plantillas: tarjetas con demo en vivo y filtro por
 * categoría (botones con aria-pressed + recuento anunciado en vivo).
 */
export function TemplatesGallery() {
  const { t } = useSettings();
  const [category, setCategory] = useState<CategoryFilter>("all");

  const filtered =
    category === "all"
      ? templates
      : templates.filter((template) => template.category === category);

  return (
    <div className="w-full max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-24">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 flex items-center gap-2 font-mono text-sm text-muted">
          <span className="text-ok">$</span>
          <span>{t.templates.command}</span>
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t.templates.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {t.templates.description}
        </p>
        <GitLabel text={`HEAD → ${profile.branch}`} className="mt-4" />
      </div>

      <div
        role="group"
        aria-label={t.templates.filterLabel}
        className="mb-4 flex flex-wrap items-center gap-2"
      >
        {filterOptions.map((option) => {
          const active = category === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setCategory(option)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 font-mono text-sm transition-colors",
                active
                  ? "border-accent-indigo/50 bg-accent-indigo/10 text-accent-blue"
                  : "border-border bg-surface-2/60 text-muted hover:text-foreground",
              )}
            >
              {option === "all" ? t.templates.all : t.templates.categories[option]}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mb-8 font-mono text-xs text-faint">
        {t.templates.countLabel(filtered.length)}
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border-strong bg-surface p-8 text-sm text-muted">
          {t.templates.emptyState}
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((template) => (
            <TemplateCard key={template.slug} template={template} headingLevel={2} />
          ))}
        </div>
      )}
    </div>
  );
}
