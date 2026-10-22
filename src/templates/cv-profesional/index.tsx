"use client";

import { useLocalizedText } from "@/components/providers/SettingsProvider";
import { cvProfesionalTemplate as data } from "@/data/templates";

/**
 * Demo: hoja de vida web.
 * Contenido 100 % ficticio ("Nombre Apellido", "tu@correo.com").
 * Los botones no hacen nada: en la plantilla real toman tus datos.
 * Paleta propia (claro, indigo): es un mini-sitio ajeno al portafolio.
 */
export function CvProfesionalDemo() {
  const text = useLocalizedText();
  const { demo } = data;

  return (
    <div className="bg-white font-sans text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {text(demo.name)}
            </h2>
            <p className="mt-1 text-lg font-medium text-indigo-600">{text(demo.role)}</p>
            <p className="mt-2 text-sm text-slate-500">{text(demo.location)}</p>

            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              <li className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600">
                {text(demo.contact.email)}
              </li>
              <li className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600">
                {text(demo.contact.phone)}
              </li>
            </ul>
          </div>

          <button
            type="button"
            aria-disabled="true"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white"
          >
            {text(demo.downloadCta)}
          </button>
        </header>

        <hr className="my-10 border-slate-200" />

        <section>
          <h3 className="text-base font-semibold tracking-tight text-slate-900">
            {text(demo.summaryTitle)}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {text(demo.summary)}
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-base font-semibold tracking-tight text-slate-900">
            {text(demo.experienceTitle)}
          </h3>
          <ol className="mt-4 space-y-6">
            {demo.experience.map((item) => (
              <li key={item.id} className="border-l-2 border-indigo-200 pl-4">
                <p className="text-sm font-semibold text-slate-900">{text(item.role)}</p>
                <p className="mt-0.5 text-sm text-slate-500">
                  {text(item.org)} · {text(item.period)}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {text(item.detail)}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h3 className="text-base font-semibold tracking-tight text-slate-900">
            {text(demo.educationTitle)}
          </h3>
          <ol className="mt-4 space-y-4">
            {demo.education.map((item) => (
              <li key={item.id}>
                <p className="text-sm font-semibold text-slate-900">{text(item.degree)}</p>
                <p className="mt-0.5 text-sm text-slate-500">
                  {text(item.org)} · {text(item.period)}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h3 className="text-base font-semibold tracking-tight text-slate-900">
            {text(demo.skillsTitle)}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {demo.skills.map((skill) => (
              <li
                key={skill.es}
                className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm text-indigo-700"
              >
                {text(skill)}
              </li>
            ))}
          </ul>
        </section>

        <button
          type="button"
          aria-disabled="true"
          className="mt-12 w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          {text(demo.contactCta)}
        </button>
      </div>
    </div>
  );
}
