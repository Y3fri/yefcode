"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/components/providers/SettingsProvider";

/**
 * Sección "Qué incluye": lista corta y honesta de lo que siempre
 * acompaña a cada página, más el punto de dominio/hosting, cuya
 * política todavía no está decidida (TODO(yeferson) en i18n/es.ts).
 */
export function Includes() {
  const { t } = useSettings();

  return (
    <section id="incluye" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.includes.command}
          title={t.includes.title}
          description={t.includes.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          <ul className="space-y-3">
            {t.includes.items.map((item) => (
              <li
                key={item.id}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent-indigo/50"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ok/40 bg-ok/10 text-ok"
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m2.5 6.5 2.5 2.5 4.5-5.5" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <aside className="rounded-2xl border border-dashed border-border-strong bg-surface-2/50 p-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {t.includes.pendingTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t.includes.pendingNote}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
