"use client";

import { useId, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/components/providers/SettingsProvider";

/**
 * Sección "Preguntas frecuentes": acordeón accesible.
 * - Botón nativo con aria-expanded y aria-controls.
 * - Cada panel es una región etiquetada por su pregunta.
 * - Solo un panel abierto a la vez; el contenido sigue en el DOM
 *   (prerenderizado), así que es rastreable por los buscadores.
 */
export function Faq() {
  const { t } = useSettings();
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.faq.command}
          title={t.faq.title}
          description={t.faq.description}
        />

        <div className="max-w-3xl space-y-3">
          {t.faq.items.map((item) => {
            const open = openId === item.id;
            const questionId = `${baseId}-q-${item.id}`;
            const panelId = `${baseId}-p-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-border bg-surface transition-colors data-[open=true]:border-accent-indigo/40"
                data-open={open}
              >
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-mono text-sm text-foreground transition-colors hover:text-accent-blue"
                  >
                    {item.question}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9.5 6 6 6-6" />
                    </svg>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!open}
                  className="px-5 pb-5"
                >
                  <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
