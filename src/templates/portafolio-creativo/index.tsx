"use client";

import { useState } from "react";
import { useLocalizedText } from "@/components/providers/SettingsProvider";
import { portafolioCreativoTemplate as data } from "@/data/templates";

type DemoFilterId = (typeof data.demo.filters)[number]["id"];

/** Tonos de las miniaturas por categoría (solo estilo, sin texto). */
const tileTones: Record<DemoFilterId, string> = {
  design: "from-rose-400 to-pink-500",
  photo: "from-amber-400 to-orange-500",
  web: "from-indigo-400 to-violet-500",
};

/**
 * Demo: portafolio creativo con galería filtrable.
 * Contenido 100 % ficticio ("Nombre Apellido", "Trabajo 1…6").
 * El filtro de la galería sí funciona, para que se vea el comportamiento.
 * Paleta propia (claro): es un mini-sitio ajeno al portafolio.
 */
export function PortafolioCreativoDemo() {
  const text = useLocalizedText();
  const { demo } = data;
  const [filter, setFilter] = useState<"all" | DemoFilterId>("all");

  const items = filter === "all" ? demo.items : demo.items.filter((w) => w.cat === filter);

  return (
    <div className="bg-white font-sans text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        <header>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{text(demo.name)}</h2>
          <p className="mt-1 text-base text-slate-500">{text(demo.tagline)}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
            {text(demo.about)}
          </p>
        </header>

        <div
          role="group"
          aria-label={text(demo.filterAria)}
          className="mt-8 flex flex-wrap gap-2"
        >
          <button
            type="button"
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === "all"
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
            }`}
          >
            {text(demo.allFilter)}
          </button>
          {demo.filters.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={filter === option.id}
              onClick={() => setFilter(option.id)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === option.id
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
              }`}
            >
              {text(option.label)}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const label = demo.filters.find((option) => option.id === item.cat)?.label;

            return (
              <li
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-slate-200"
              >
                <div
                  aria-hidden="true"
                  className={`aspect-[4/3] w-full bg-gradient-to-br ${tileTones[item.cat]}`}
                />
                <div className="flex items-center justify-between gap-3 bg-white px-4 py-3">
                  <p className="text-sm font-semibold text-slate-900">{text(item.title)}</p>
                  {label ? (
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500">
                      {text(label)}
                    </span>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>

        <section className="mt-14 rounded-2xl bg-slate-50 px-6 py-10 text-center">
          <h3 className="text-xl font-bold tracking-tight">{text(demo.contactTitle)}</h3>
          <button
            type="button"
            aria-disabled="true"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white"
          >
            {text(demo.contactCta)}
          </button>
        </section>
      </div>
    </div>
  );
}
