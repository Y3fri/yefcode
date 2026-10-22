"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/components/providers/SettingsProvider";
import { experience } from "@/data/profile";

/**
 * Sección "Experiencia" (timeline breve).
 * Solo se renderiza cuando profile.showExperience es true: mientras falten
 * empresa, fechas o logros, los pendientes aparecen como TODO(yeferson).
 */
export function Experience() {
  const { settings, t } = useSettings();
  const lang = settings.language;

  return (
    <section id="experiencia" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.experience.command}
          title={t.experience.title}
          description={t.experience.description}
        />

        <ol className="space-y-6 border-l border-border pl-6">
          {experience.map((item) => (
            <li key={item.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-7 -left-[1.9rem] h-3 w-3 rounded-full border border-border bg-accent-indigo"
              />
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.role[lang]}
                  </h3>
                  <span className="font-mono text-xs text-faint">
                    {item.period[lang]}
                  </span>
                </div>

                <p className="mt-1 font-mono text-xs text-muted">
                  {item.org ? item.org[lang] : t.experience.pending.org}
                </p>

                {item.achievements && item.achievements.length > 0 ? (
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                    {item.achievements.map((achievement, index) => (
                      <li key={index}>{achievement[lang]}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 rounded-lg border border-warn/30 bg-warn/10 px-3 py-2 font-mono text-xs text-warn">
                    {t.experience.pending.achievements}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
