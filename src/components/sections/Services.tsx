"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/components/providers/SettingsProvider";

/**
 * Sección "Qué hago": cuatro tarjetas con título y una frase.
 * La copia vive en src/data/i18n.
 */
export function Services() {
  const { t } = useSettings();

  return (
    <section id="que-hago" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.services.command}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {t.services.items.map((service, index) => (
            <article
              key={service.id}
              className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-indigo/50 hover:bg-surface-2/60"
            >
              <p className="mb-4 font-mono text-xs text-faint">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
