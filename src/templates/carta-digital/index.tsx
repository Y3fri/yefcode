"use client";

import { useLocalizedText } from "@/components/providers/SettingsProvider";
import { cartaDigitalTemplate as data } from "@/data/templates";

/** Posiciones y ritmos de los corazones flotantes (decorativos). */
const hearts = [
  { left: "8%", delay: "0s", duration: "7s" },
  { left: "22%", delay: "2.2s", duration: "8.5s" },
  { left: "45%", delay: "1s", duration: "7.5s" },
  { left: "68%", delay: "3.4s", duration: "9s" },
  { left: "86%", delay: "1.8s", duration: "8s" },
] as const;

function Heart() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-6.5-4.2-8.5-8A4.6 4.6 0 0 1 12 7.6 4.6 4.6 0 0 1 20.5 12c-2 3.8-8.5 8-8.5 8Z" />
    </svg>
  );
}

/**
 * Demo: carta digital.
 * Contenido 100 % ficticio (mensaje de ejemplo, "Nombre Apellido").
 * La animación de corazones respeta prefers-reduced-motion y la
 * preferencia html[data-motion] gracias a las reglas globales de CSS.
 * Paleta propia (rosa suave): es un mini-sitio ajeno al portafolio.
 */
export function CartaDigitalDemo() {
  const text = useLocalizedText();
  const { demo } = data;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-white font-sans">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {hearts.map((heart) => (
          <span
            key={heart.left}
            className="demo-heart"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
            }}
          >
            <Heart />
          </span>
        ))}
      </div>

      <div className="relative mx-auto max-w-xl px-6 py-16 text-center sm:px-10 sm:py-24">
        <p className="font-mono text-sm tracking-wide text-rose-400">{text(demo.kicker)}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-rose-900 sm:text-4xl">
          {text(demo.title)}
        </h2>

        <div className="mt-8 space-y-5 text-left">
          {demo.paragraphs.map((paragraph) => (
            <p key={paragraph.es} className="text-base leading-loose text-rose-950/80">
              {text(paragraph)}
            </p>
          ))}
        </div>

        <div className="mt-10 text-right">
          <p className="text-sm italic text-rose-500">{text(demo.closing)}</p>
          <p className="mt-1 text-lg font-semibold text-rose-900">{text(demo.sender)}</p>
        </div>
      </div>
    </div>
  );
}
