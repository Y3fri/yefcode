"use client";

import { useSettings } from "@/components/providers/SettingsProvider";
import { whatsappStartUrl } from "@/data/socials";

/**
 * CTA final: banda de cierre con la pregunta y el botón de WhatsApp
 * (mensaje prellenado en español). Cierra la página antes del pie.
 */
export function FinalCta() {
  const { t } = useSettings();

  return (
    <section id="empezar" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="card-hover rounded-3xl border border-border bg-surface px-6 py-12 text-center transition-all duration-300 hover:border-accent-indigo/50 sm:px-12 sm:py-16">
          <p className="mb-4 font-mono text-sm text-muted">
            <span className="text-ok">$</span> {t.cta.command}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            {t.cta.text}
          </p>

          <a
            href={whatsappStartUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet px-6 py-3 font-mono text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4.5 19.5l1.3-4.4A7.5 7.5 0 1 1 20 11.5Z" />
            </svg>
            {t.cta.button}
            <span aria-hidden="true">↗</span>
            <span className="sr-only">{t.newTab}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
