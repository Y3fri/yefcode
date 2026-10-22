"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/components/providers/SettingsProvider";
import { cn } from "@/lib/utils";

/** Iconos decorativos por servicio (el texto vive en src/data/i18n). */
function ServiceIcon({ id }: { id: string }) {
  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
  } as const;

  if (id === "cv") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="3.5" width="14" height="17" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "business") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 9.5 5.5 4h13L20 9.5" strokeLinejoin="round" />
        <path d="M4 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
        <path d="M5.5 11.5V20h13v-8.5" strokeLinejoin="round" />
        <path d="M10 20v-5h4v5" />
      </svg>
    );
  }

  if (id === "portfolio") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m5 16 4-4 3 3 3-3 4 4" strokeLinejoin="round" />
        <circle cx="9" cy="9.5" r="1.2" />
      </svg>
    );
  }

  if (id === "events") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 20s-6.5-4.2-8.5-8A4.6 4.6 0 0 1 12 7.6 4.6 4.6 0 0 1 20.5 12c-2 3.8-8.5 8-8.5 8Z" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 4.5 13.8 9l4.7 1.8-4.7 1.8L12 17.5l-1.8-4.9L5.5 10.8 10.2 9 12 4.5Z" strokeLinejoin="round" />
      <path d="M18.5 4v3M20 5.5h-3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Sección "Qué puedo crear para ti": cinco tarjetas con icono,
 * título y una frase. La copia vive en src/data/i18n.
 * Rejilla: 3 tarjetas en la primera fila y 2 en la segunda (lg).
 */
export function Services() {
  const { t } = useSettings();

  return (
    <section id="servicios" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.services.command}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {t.services.items.map((service, index) => (
            <article
              key={service.id}
              className={cn(
                "rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-indigo/50 hover:bg-surface-2/60",
                index < 3 ? "lg:col-span-2" : "lg:col-span-3",
              )}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent-indigo/30 bg-accent-indigo/10 text-accent-blue">
                <ServiceIcon id={service.id} />
              </div>
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
