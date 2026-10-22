"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/components/providers/SettingsProvider";
import { whatsappUrlForPackage } from "@/data/socials";
import { pricingPackages } from "@/data/pricing";
import type { LocalizedText } from "@/lib/types";

/**
 * Sección "Precios": tres paquetes desde src/data/pricing.ts.
 * Si un paquete no tiene `priceCop`, se muestra "Cotización por WhatsApp"
 * en lugar de inventar una cifra.
 */
export function Pricing() {
  const { settings, t } = useSettings();
  const lang = settings.language;
  const text = (x: LocalizedText) => x[lang];

  return (
    <section id="precios" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.pricing.command}
          title={t.pricing.title}
          description={t.pricing.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-indigo/50 hover:bg-surface-2/60"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {text(pkg.name)}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {text(pkg.description)}
              </p>

              <p className="mt-5 text-2xl font-semibold tracking-tight">
                {pkg.priceCop === null ? (
                  <span className="text-gradient">{t.pricing.quoteLabel}</span>
                ) : (
                  <span className="text-foreground">
                    {`${pkg.priceCop.toLocaleString(lang === "es" ? "es-CO" : "en-US")} COP`}
                  </span>
                )}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {pkg.features.map((feature) => (
                  <li key={feature.es} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-indigo/15 text-accent-blue"
                    >
                      <svg
                        viewBox="0 0 12 12"
                        className="h-2.5 w-2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m2.5 6.5 2.5 2.5 4.5-5.5" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{text(feature)}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrlForPackage(text(pkg.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-2/60 px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent-indigo/50"
              >
                {t.pricing.cta}
                <span aria-hidden="true">↗</span>
                <span className="sr-only">{t.newTab}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
