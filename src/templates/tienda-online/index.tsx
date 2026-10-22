"use client";

import { useState } from "react";
import { useLocalizedText } from "@/components/providers/SettingsProvider";
import { tiendaOnlineTemplate as data } from "@/data/templates";

/** Degradados de las fotos de producto (solo estilo, sin texto). */
const productTones = [
  "from-blue-100 to-blue-200",
  "from-sky-100 to-sky-200",
  "from-indigo-100 to-indigo-200",
  "from-blue-50 to-sky-100",
  "from-sky-50 to-indigo-100",
  "from-indigo-50 to-blue-100",
] as const;

type CategoryId = (typeof data.demo.filters)[number]["id"];

/**
 * Demo: tienda online.
 * Contenido 100 % ficticio ("Tienda de Ejemplo", productos y precios
 * de ejemplo). El filtro por categoría sí funciona; los botones de
 * carrito y pedido no hacen nada hasta personalizar la plantilla.
 * Paleta propia (blanco y azul): es un mini-sitio ajeno al portafolio.
 */
export function TiendaOnlineDemo() {
  const text = useLocalizedText();
  const { demo } = data;
  const [filter, setFilter] = useState<"all" | CategoryId>("all");

  const filters = [{ id: "all" as const, label: demo.allFilter }, ...demo.filters];
  const visible =
    filter === "all" ? demo.products : demo.products.filter((p) => p.cat === filter);

  return (
    <div className="bg-white font-sans text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 sm:py-14">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight">{text(demo.name)}</h2>
            <p className="mt-0.5 text-sm text-slate-500">{text(demo.tagline)}</p>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
            <span aria-hidden="true">🛒</span> {text(demo.cartLabel)} · 0
            <span className="sr-only">{text(demo.cartEmpty)}</span>
          </div>
        </header>

        <section className="mt-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 px-6 py-10 text-white sm:px-10">
          <h3 className="max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">
            {text(demo.tagline)}
          </h3>
          <p className="mt-4 text-sm text-blue-100">{text(demo.shippingNote)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              aria-disabled="true"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-50"
            >
              {text(demo.orderCta)}
            </button>
          </div>
        </section>

        <section className="mt-10">
          <div
            role="group"
            aria-label={text(demo.filterAria)}
            className="flex flex-wrap gap-2"
          >
            {filters.map((option) => {
              const active = filter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(option.id)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    active
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                  }`}
                >
                  {text(option.label)}
                </button>
              );
            })}
          </div>

          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product, index) => (
              <li
                key={product.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
              >
                <div
                  aria-hidden="true"
                  className={`aspect-[4/3] w-full bg-gradient-to-br ${productTones[index % productTones.length] ?? "from-slate-100 to-slate-200"}`}
                />
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="text-sm font-semibold">{text(product.name)}</h4>
                    <p className="text-sm font-semibold text-blue-700">
                      {text(product.price)}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-disabled="true"
                    className="mt-3 w-full rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-50"
                  >
                    {text(demo.addCta)}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p className="font-semibold text-slate-700">{text(demo.name)}</p>
          <button
            type="button"
            aria-disabled="true"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            {text(demo.orderCta)}
          </button>
        </footer>
      </div>
    </div>
  );
}
