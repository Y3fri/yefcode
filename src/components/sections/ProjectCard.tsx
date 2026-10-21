import Image from "next/image";
import { Chip } from "@/components/ui/Chip";
import { GitLabel } from "@/components/ui/GitLabel";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

/**
 * Tarjeta minimalista de proyecto.
 * Muestra media (imagen o video), nombre, año, stack como chips y enlace.
 * - Imagen: next/image con lazy loading y alt descriptivo.
 * - Video (demo): se reproduce solo, en mudo y en loop, sin controles.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { name, year, description, stack, branch, status, media, link } = project;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent-indigo/50 hover:shadow-[0_0_0_1px_rgb(109_94_252_/_0.25),0_16px_48px_-16px_rgb(79_140_255_/_0.4)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-background-soft">
        {media.kind === "image" ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <video
            src={media.src}
            poster={media.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={media.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}

        {/* Velos para legibilidad del overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

        {/* Estado + rama */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] backdrop-blur ${
              status === "live"
                ? "border-ok/30 bg-ok/10 text-ok"
                : "border-warn/30 bg-warn/10 text-warn"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                status === "live" ? "bg-ok" : "bg-warn"
              }`}
            />
            {status === "live" ? "en vivo" : "en desarrollo"}
          </span>
        </div>

        <div className="absolute right-3 bottom-3">
          <GitLabel
            text={branch}
            className="rounded-full bg-background/70 px-2.5 py-1 backdrop-blur"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-blue">
            {name}
          </h3>
          <span className="font-mono text-sm text-faint">{year}</span>
        </div>

        <p className="text-sm leading-relaxed text-muted">{description}</p>

        <ul className="flex flex-wrap gap-2" aria-label={`Tecnologías de ${name}`}>
          {stack.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>

        {link ? (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 pt-1 font-mono text-sm text-accent-blue transition-colors hover:text-accent-violet"
          >
            <span aria-hidden="true">↗</span>
            {link.label}
            <span className="sr-only">(abre en una pestaña nueva)</span>
          </a>
        ) : (
          <span className="mt-auto pt-1 font-mono text-sm text-faint">
            demo en video ↑
          </span>
        )}
      </div>
    </article>
  );
}
