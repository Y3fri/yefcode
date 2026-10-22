"use client";

import { useLocalizedText } from "@/components/providers/SettingsProvider";
import { clinicaCitasTemplate as data } from "@/data/templates";

/**
 * Demo: página para clínica o consultorio.
 * Contenido 100 % ficticio ("Consultorio de Ejemplo", servicios,
 * horarios y profesional de ejemplo). Los horarios y el botón de
 * cita no hacen nada hasta personalizar la plantilla. Paleta propia
 * (blanco y teal): es un mini-sitio ajeno al portafolio.
 */
export function ClinicaCitasDemo() {
  const text = useLocalizedText();
  const { demo } = data;

  return (
    <div className="bg-white font-sans text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 sm:py-14">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold tracking-tight text-teal-800">
            {text(demo.name)}
          </h2>
          <p className="text-sm text-slate-500">{text(demo.tagline)}</p>
        </header>

        <section className="mt-8 rounded-3xl bg-teal-50 px-6 py-10 sm:px-10">
          <h3 className="max-w-xl text-2xl font-bold tracking-tight text-teal-900 sm:text-3xl">
            {text(demo.heroTitle)}
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-teal-900/70 sm:text-base">
            {text(demo.heroText)}
          </p>
          <button
            type="button"
            aria-disabled="true"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
          >
            {text(demo.bookingCta)}
          </button>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold tracking-tight">{text(demo.servicesTitle)}</h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2">
            {demo.services.map((service) => (
              <li key={service.id} className="rounded-2xl border border-slate-200 p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-teal-700"
                >
                  ✓
                </span>
                <h4 className="mt-3 text-sm font-semibold">{text(service.name)}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {text(service.text)}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold tracking-tight">{text(demo.stepsTitle)}</h3>
          <ol className="mt-5 grid gap-4 sm:grid-cols-3">
            {demo.steps.map((step, index) => (
              <li key={step.es} className="rounded-2xl bg-slate-50 p-5">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {text(step)}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-base font-semibold">{text(demo.scheduleTitle)}</h3>
            <p className="mt-2 text-sm text-slate-600">
              {text(demo.scheduleDays)} · {text(demo.scheduleHours)}
            </p>
            <div
              role="group"
              aria-label={text(demo.timeSlotsAria)}
              className="mt-4 flex flex-wrap gap-2"
            >
              {demo.timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  aria-disabled="true"
                  className="rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm text-teal-800 transition-colors hover:border-teal-400"
                >
                  {text(slot.label)}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-base font-semibold">{text(demo.professionalLabel)}</h3>
            <p className="mt-2 text-sm font-semibold">{text(demo.professional)}</p>
            <p className="text-sm text-slate-600">{text(demo.professionalRole)}</p>
            <p className="mt-4 text-sm text-slate-500">{text(demo.address)}</p>
          </section>
        </div>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p className="font-semibold text-slate-700">{text(demo.name)}</p>
          <button
            type="button"
            aria-disabled="true"
            className="inline-flex items-center justify-center rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-800"
          >
            {text(demo.bookingCta)}
          </button>
        </footer>
      </div>
    </div>
  );
}
