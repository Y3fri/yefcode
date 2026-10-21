import { Terminal } from "@/components/ui/Terminal";
import { GitLabel } from "@/components/ui/GitLabel";
import { profile } from "@/data/profile";

const terminalLines = [
  { prompt: "$", text: "whoami", tone: "default" as const },
  {
    text: `→ ${profile.name.toLowerCase()} — ${profile.role.toLowerCase()}`,
    tone: "ok" as const,
  },
  { prompt: "$", text: "cat mission.txt", tone: "default" as const },
  {
    text: "→ web apps y APIs claras, rápidas y que aguantan producción.",
    tone: "muted" as const,
  },
  { prompt: "$", text: "git log --oneline -1", tone: "default" as const },
  {
    text: "→ soporte técnico + supervisión → construyo mejor software.",
    tone: "muted" as const,
  },
];

/**
 * Hero con la ventana de terminal animada (tipeo).
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="animate-fade-up">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <GitLabel text={`HEAD → ${profile.branch}`} gradient />
            <GitLabel text={profile.subBranches[0]} />
            <GitLabel text={profile.subBranches[1]} />
          </div>

          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {profile.role}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.headline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet px-5 py-2.5 font-mono text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <span aria-hidden="true">$</span> ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/60 px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent-indigo/50"
            >
              <span aria-hidden="true">$</span> contactar
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up animate-delay"
          style={{ "--delay": "180ms" } as React.CSSProperties}
        >
          <Terminal lines={terminalLines} />
        </div>
      </div>
    </section>
  );
}
