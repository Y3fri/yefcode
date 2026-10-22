"use client";

import { useEffect, useState } from "react";
import { useLocalizedText } from "@/components/providers/SettingsProvider";
import { invitacionEventoTemplate as data } from "@/data/templates";

/**
 * Cuenta regresiva al evento.
 * - Arranca en null para no provocar desajuste de hidratación
 *   (el HTML prerenderizado muestra "—" y se rellena al montar).
 * - Si la fecha ya pasó, se muestra el mensaje de "llegó el día".
 */
function useCountdown(iso: string): number | null {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(iso).getTime();
    const tick = () => setRemaining(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [iso]);

  return remaining;
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

/**
 * Demo: invitación de evento.
 * Contenido 100 % ficticio (nombres, fecha y lugar de ejemplo).
 * El botón de confirmación no hace nada hasta personalizar la plantilla.
 * Paleta propia (violeta oscuro): es un mini-sitio ajeno al portafolio.
 */
export function InvitacionEventoDemo() {
  const text = useLocalizedText();
  const { demo } = data;
  const remaining = useCountdown(demo.eventDateIso);

  const days = remaining === null ? null : Math.floor(remaining / 86_400_000);
  const hours = remaining === null ? null : Math.floor(remaining / 3_600_000) % 24;
  const minutes = remaining === null ? null : Math.floor(remaining / 60_000) % 60;
  const seconds = remaining === null ? null : Math.floor(remaining / 1_000) % 60;

  const units = [
    { id: "days", value: days, label: demo.countdownLabels.days },
    { id: "hours", value: hours, label: demo.countdownLabels.hours },
    { id: "minutes", value: minutes, label: demo.countdownLabels.minutes },
    { id: "seconds", value: seconds, label: demo.countdownLabels.seconds },
  ] as const;

  return (
    <div className="bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-900 font-sans text-white">
      <div className="mx-auto max-w-xl px-6 py-16 text-center sm:px-10 sm:py-24">
        <p className="font-mono text-sm tracking-[0.3em] text-violet-300 uppercase">
          {text(demo.kicker)}
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          {text(demo.names)}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-violet-200">
          {text(demo.line)}
        </p>

        <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
          <p className="font-mono text-xs tracking-wide text-violet-300 uppercase">
            {text(demo.dateLabel)}
          </p>
          <p className="mt-2 text-lg font-semibold">{text(demo.dateText)}</p>

          {remaining !== null && remaining <= 0 ? (
            <p className="mt-6 text-2xl font-bold text-fuchsia-200">
              {text(demo.pastMessage)}
            </p>
          ) : (
            <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-3">
              {units.map((unit) => (
                <div key={unit.id} className="rounded-xl bg-white/10 px-2 py-3">
                  <p className="text-xl font-bold sm:text-2xl">
                    {unit.value === null ? "—" : pad(unit.value)}
                  </p>
                  <p className="mt-1 text-[11px] text-violet-300 sm:text-xs">
                    {text(unit.label)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
          <p className="font-mono text-xs tracking-wide text-violet-300 uppercase">
            {text(demo.venueLabel)}
          </p>
          <p className="mt-2 text-base text-violet-100">{text(demo.venue)}</p>
        </div>

        <button
          type="button"
          aria-disabled="true"
          className="mt-10 w-full rounded-lg bg-white px-6 py-3 text-sm font-semibold text-violet-900 sm:w-auto"
        >
          {text(demo.rsvpCta)}
        </button>

        <p className="mt-10 text-sm text-violet-300 italic">{text(demo.footerNote)}</p>
      </div>
    </div>
  );
}
