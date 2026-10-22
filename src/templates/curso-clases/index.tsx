"use client";

import { useLocalizedText } from "@/components/providers/SettingsProvider";
import { cursoClasesTemplate as data } from "@/data/templates";

/**
 * Demo: página de curso o clases.
 * Contenido 100 % ficticio ("Curso de Ejemplo", temario y precio de
 * ejemplo). El temario usa <details>/<summary> nativos (acordeón
 * accesible sin JavaScript); el botón de inscripción no hace nada
 * hasta personalizar la plantilla. Paleta propia (azul noche y
 * cielo): es un mini-sitio ajeno al portafolio.
 */
export function CursoClasesDemo() {
  const text = useLocalizedText();
  const { demo } = data;

  return (
    <div className="bg-slate-950 font-sans text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 sm:py-14">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-5">
          <h2 className="text-xl font-bold tracking-tight text-sky-400">
            {text(demo.name)}
          </h2>
          <p className="text-sm text-slate-400">
            {text(demo.instructor)} · {text(demo.instructorRole)}
          </p>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              {text(demo.heroTitle)}
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
              {text(demo.heroText)}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
            <p className="text-2xl font-bold text-sky-400">{text(demo.price)}</p>
            <p className="mt-1 text-xs text-slate-500">{text(demo.priceNote)}</p>
            <button
              type="button"
              aria-disabled="true"
              className="mt-5 w-full rounded-lg bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
            >
              {text(demo.enrollCta)}
            </button>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold tracking-tight">{text(demo.includesTitle)}</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {demo.includes.map((item) => (
              <li
                key={item.es}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-300"
              >
                <span aria-hidden="true" className="text-sky-400">
                  ✓
                </span>
                {text(item)}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold tracking-tight">{text(demo.syllabusTitle)}</h3>
          <div className="mt-5 space-y-3">
            {demo.modules.map((module) => (
              <details
                key={module.id}
                className="group rounded-xl border border-slate-800 bg-slate-900/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="block font-mono text-xs text-sky-400">
                      {text(module.number)}
                    </span>
                    <span className="mt-0.5 block font-semibold">
                      {text(module.title)}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-sky-400 transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">
                  {text(module.detail)}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-sky-400">{text(demo.forTitle)}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
            {text(demo.forText)}
          </p>
          <button
            type="button"
            aria-disabled="true"
            className="mt-6 rounded-lg bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
          >
            {text(demo.enrollCta)}
          </button>
        </section>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p className="font-semibold text-slate-300">{text(demo.name)}</p>
          <p>
            {text(demo.instructor)} · {text(demo.instructorRole)}
          </p>
        </footer>
      </div>
    </div>
  );
}
