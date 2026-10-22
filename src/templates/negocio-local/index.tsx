"use client";

import { useLocalizedText } from "@/components/providers/SettingsProvider";
import { negocioLocalTemplate as data } from "@/data/templates";

/** Sombras de tarjetas de productos (solo estilo, sin texto). */
const productTones = [
  "from-emerald-100 to-emerald-200",
  "from-teal-100 to-teal-200",
  "from-green-100 to-green-200",
  "from-emerald-50 to-teal-100",
] as const;

/**
 * Demo: página para un negocio local.
 * Contenido 100 % ficticio ("Mi Negocio", horarios y dirección de
 * ejemplo). Los enlaces de sección sí funcionan (anclas internas);
 * el botón de WhatsApp no abre nada hasta personalizar la plantilla.
 * Paleta propia (claro, esmeralda): es un mini-sitio ajeno al portafolio.
 */
export function NegocioLocalDemo() {
  const text = useLocalizedText();
  const { demo } = data;

  return (
    <div className="bg-white font-sans text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 sm:py-14">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight">{text(demo.name)}</h2>
          <nav
            aria-label={text(demo.name)}
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500"
          >
            <a href="#demo-products" className="transition-colors hover:text-emerald-700">
              {text(demo.productsTitle)}
            </a>
            <a href="#demo-hours" className="transition-colors hover:text-emerald-700">
              {text(demo.hoursTitle)}
            </a>
            <a href="#demo-location" className="transition-colors hover:text-emerald-700">
              {text(demo.locationTitle)}
            </a>
          </nav>
        </header>

        <section className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 px-6 py-10 text-white sm:px-10 sm:py-14">
          <p className="font-medium text-emerald-100">{text(demo.tagline)}</p>
          <h3 className="mt-2 max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">
            {text(demo.heroTitle)}
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-emerald-50 sm:text-base">
            {text(demo.heroText)}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              aria-disabled="true"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-emerald-700"
            >
              {text(demo.whatsappCta)}
            </button>
            <a
              href="#demo-location"
              className="inline-flex items-center justify-center rounded-lg border border-white/60 px-5 py-2.5 text-sm font-medium text-white"
            >
              {text(demo.locationTitle)}
            </a>
          </div>
        </section>

        <section id="demo-products" className="mt-12 scroll-mt-6">
          <h3 className="text-xl font-bold tracking-tight">{text(demo.productsTitle)}</h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2">
            {demo.products.map((product, index) => (
              <li
                key={product.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div
                  aria-hidden="true"
                  className={`aspect-[4/3] w-full bg-gradient-to-br ${productTones[index] ?? "from-slate-100 to-slate-200"}`}
                />
                <div className="p-5">
                  <h4 className="text-sm font-semibold text-slate-900">
                    {text(product.name)}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {text(product.text)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <section
            id="demo-hours"
            className="scroll-mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {text(demo.hoursTitle)}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              {demo.hours.map((line) => (
                <li key={line.es}>{text(line)}</li>
              ))}
            </ul>
          </section>

          <section
            id="demo-location"
            className="scroll-mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {text(demo.locationTitle)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {text(demo.address)}
            </p>
            <div
              aria-hidden="true"
              className="mt-4 aspect-[16/7] w-full rounded-xl bg-gradient-to-br from-emerald-100 to-teal-200"
            />
          </section>
        </div>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p className="font-semibold text-slate-700">{text(demo.name)}</p>
          <p>{text(demo.address)}</p>
        </footer>
      </div>
    </div>
  );
}
