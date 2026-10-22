"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/components/providers/SettingsProvider";
import { profile } from "@/data/profile";

/**
 * Sección "Sobre mí": dos párrafos sobrios, cierre con ubicación
 * y disponibilidad, y tres datos rápidos en tarjetas.
 * El texto vive en src/data/i18n; los datos en src/data/profile.ts.
 */
export function About() {
  const { t } = useSettings();

  const facts = [
    { label: t.about.facts.locationLabel, value: profile.locationShort },
    { label: t.about.facts.focusLabel, value: t.about.facts.focusValue },
    {
      label: t.about.facts.availabilityLabel,
      value: t.about.facts.availabilityValue,
    },
  ];

  return (
    <section id="sobre-mi" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.about.command}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <p className="rounded-xl border border-border bg-surface px-4 py-3 font-mono text-xs leading-relaxed text-muted">
              {t.about.closing}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm text-muted">
              <span className="text-ok">$</span> {t.about.factsCommand}
            </h3>
            <ul className="space-y-4">
              {facts.map((fact) => (
                <li
                  key={fact.label}
                  className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent-indigo/50"
                >
                  <p className="font-mono text-xs text-faint">{fact.label}</p>
                  <p className="mt-1.5 text-sm font-medium text-foreground">
                    {fact.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
