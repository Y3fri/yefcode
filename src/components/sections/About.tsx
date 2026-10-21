import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { profile } from "@/data/profile";

const highlights = [
  { label: "Full Stack", detail: "web + APIs" },
  { label: "Soporte técnico", detail: "resolución de problemas reales" },
  { label: "Supervisión", detail: "trabajo en equipo y procesos" },
  { label: "Producción", detail: "las cosas deben funcionar" },
];

/**
 * Sección "Sobre mí".
 * El texto biográfico es un TODO explícito hasta que se complete en src/data/profile.ts.
 */
export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command="git log --oneline --about"
          title="Sobre mí"
          description={`Un vistazo rápido a cómo trabajo y qué me mueve.`}
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <p className="inline-flex items-center gap-2 rounded-lg border border-warn/30 bg-warn/10 px-3 py-2 font-mono text-xs text-warn">
              <span aria-hidden="true">⚠</span>
              TODO: completa tu texto real en src/data/profile.ts
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="mb-5 font-mono text-sm text-muted">
              <span className="text-ok">$</span> cat highlights.json
            </h3>
            <ul className="space-y-4">
              {highlights.map((h) => (
                <li key={h.label} className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-foreground">{h.label}</span>
                  <Chip className="self-start">{h.detail}</Chip>
                </li>
              ))}
            </ul>

            {/* TODO(foto): coloca tu imagen y quita el aviso */}
            <div className="mt-6 flex items-center gap-3 rounded-lg border border-dashed border-border-strong bg-background-soft/50 p-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 font-mono text-sm text-faint"
              >
                ?
              </span>
              <p className="font-mono text-xs leading-relaxed text-faint">
                TODO(foto): agrega tu retrato en{" "}
                <code className="text-warn">public/projects/photo.jpg</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
