"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/components/providers/SettingsProvider";

/**
 * Sección "Cómo trabajamos": cuatro pasos numerados.
 * La copia vive en src/data/i18n (t.steps).
 */
export function Process() {
  const { t } = useSettings();

  return (
    <section id="proceso" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.process.command}
          title={t.process.title}
          description={t.process.description}
        />

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <li
              key={step.id}
              className="relative rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-indigo/50 hover:bg-surface-2/60"
            >
              <p className="mb-4 flex items-center gap-3 font-mono text-xs text-faint">
                <span className="text-gradient text-base font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
              </p>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
