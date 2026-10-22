"use client";

import { Terminal } from "@/components/ui/Terminal";
import { GitLabel } from "@/components/ui/GitLabel";
import { useSettings } from "@/components/providers/SettingsProvider";
import { profile } from "@/data/profile";

/**
 * Hero: etiqueta de disponibilidad, titular, subtítulo, botones
 * y la ventana de terminal animada (tipeo).
 */
export function Hero() {
  const { settings, t } = useSettings();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="animate-fade-up">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-ok/30 bg-ok/10 px-3 py-1 font-mono text-xs text-ok">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-ok"
                aria-hidden="true"
              />
              {t.hero.badge}
            </span>
            <GitLabel text={`HEAD → ${profile.branch}`} />
          </div>

          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet px-5 py-2.5 font-mono text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <span aria-hidden="true">$</span> {t.hero.primaryCta}
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/60 px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent-indigo/50"
            >
              <span aria-hidden="true">$</span> {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up animate-delay"
          style={{ "--delay": "180ms" } as React.CSSProperties}
        >
          <Terminal
            key={`${settings.language}-${settings.motion}`}
            lines={t.hero.terminal}
          />
        </div>
      </div>
    </section>
  );
}
