"use client";

import { useLocalizedText } from "@/components/providers/SettingsProvider";
import { restauranteCafeTemplate as data } from "@/data/templates";

/** Degradados de las fotos del lugar (solo estilo, sin texto). */
const galleryTones = [
  "from-amber-900/70 to-stone-800",
  "from-stone-800 to-amber-950",
  "from-amber-800/60 to-stone-900",
  "from-stone-700 to-amber-900/60",
] as const;

/**
 * Demo: página para restaurante o café.
 * Contenido 100 % ficticio ("Café de Ejemplo", menú y precios de
 * ejemplo). Los botones de reserva no hacen nada hasta personalizar
 * la plantilla. Paleta propia (piedra oscura y ámbar, con serif):
 * es un mini-sitio ajeno al portafolio.
 */
export function RestauranteCafeDemo() {
  const text = useLocalizedText();
  const { demo } = data;

  return (
    <div className="bg-stone-950 font-serif text-stone-100">
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 sm:py-14">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-5">
          <h2 className="text-xl font-bold tracking-tight text-amber-400">
            {text(demo.name)}
          </h2>
          <p className="font-sans text-sm text-stone-400">{text(demo.tagline)}</p>
        </header>

        <section className="mt-10 text-center sm:text-left">
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {text(demo.heroTitle)}
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            <button
              type="button"
              aria-disabled="true"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-2.5 font-sans text-sm font-semibold text-stone-950 transition-colors hover:bg-amber-400"
            >
              {text(demo.reserveCta)}
            </button>
            <a
              href="#demo-menu"
              className="inline-flex items-center justify-center rounded-lg border border-stone-700 px-5 py-2.5 font-sans text-sm font-medium text-amber-200 transition-colors hover:border-amber-500/60"
            >
              {text(demo.menuTitle)}
            </a>
          </div>
        </section>

        <section id="demo-menu" className="mt-12 scroll-mt-6">
          <h3 className="font-sans text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase">
            {text(demo.menuTitle)}
          </h3>
          <div className="mt-5 grid gap-8 sm:grid-cols-3">
            {demo.menuCategories.map((category) => (
              <div key={category.id}>
                <h4 className="border-b border-stone-800 pb-2 text-lg font-semibold">
                  {text(category.name)}
                </h4>
                <ul className="mt-3 space-y-3 font-sans">
                  {category.items.map((item) => (
                    <li key={item.id} className="flex items-baseline gap-2 text-sm">
                      <span className="text-stone-300">{text(item.name)}</span>
                      <span
                        aria-hidden="true"
                        className="flex-1 translate-y-[-3px] border-b border-dotted border-stone-700"
                      />
                      <span className="font-medium text-amber-300">
                        {text(item.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h3 className="font-sans text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase">
            {text(demo.galleryTitle)}
          </h3>
          <div aria-hidden="true" className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {galleryTones.map((tone) => (
              <div
                key={tone}
                className={`aspect-[4/3] w-full rounded-xl bg-gradient-to-br ${tone}`}
              />
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <section className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
            <h3 className="font-sans text-sm font-semibold text-amber-400">
              {text(demo.hoursTitle)}
            </h3>
            <ul className="mt-3 space-y-1.5 font-sans text-sm text-stone-400">
              {demo.hours.map((line) => (
                <li key={line.es}>{text(line)}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
            <h3 className="font-sans text-sm font-semibold text-amber-400">
              {text(demo.locationTitle)}
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-stone-400">
              {text(demo.address)}
            </p>
          </section>
        </div>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t border-stone-800 pt-6 font-sans text-sm text-stone-500">
          <p className="font-semibold text-stone-300">{text(demo.name)}</p>
          <p>{text(demo.address)}</p>
        </footer>
      </div>
    </div>
  );
}
