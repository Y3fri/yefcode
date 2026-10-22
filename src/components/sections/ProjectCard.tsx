"use client";

import Image from "next/image";
import { Chip } from "@/components/ui/Chip";
import { GitLabel } from "@/components/ui/GitLabel";
import { useSettings } from "@/components/providers/SettingsProvider";
import { getProjectCopy } from "@/data/i18n";
import { getUrlLabel } from "@/lib/utils";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

/**
 * Tarjeta de proyecto: media (imagen o video), estado, año, resumen,
 * mi rol, stack como chips y enlaces (sitio y código si existen).
 * - Imagen: next/image con lazy loading y alt descriptivo.
 * - Video (demo): se reproduce solo, en mudo y en loop, sin controles.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { settings, t } = useSettings();
  const copy = getProjectCopy(project, settings.language);
  const { title, year, status, stack, branch, image, url, repo } = project;

  const statusLabel = t.projects.status[status];

  return (
    <article className="group card-hover relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent-indigo/50">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-background-soft">
        {image.kind === "image" ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <video
            src={image.src}
            poster={image.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={image.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}

        {/* Velos para legibilidad del overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

        {/* Estado */}
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
            {statusLabel}
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
            {title}
          </h3>
          <span className="font-mono text-sm text-faint">{year}</span>
        </div>

        <p className="text-sm leading-relaxed text-muted">{copy.summary}</p>

        {copy.role ? (
          <p className="font-mono text-xs leading-relaxed text-faint">
            <span className="text-muted">{t.projects.roleLabel}:</span> {copy.role}
          </p>
        ) : null}

        <ul
          className="flex flex-wrap gap-2"
          aria-label={t.projects.technologiesLabel(title)}
        >
          {stack.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>

        {url || repo ? (
          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-accent-blue transition-colors hover:text-accent-violet"
              >
                <span aria-hidden="true">↗</span>
                {getUrlLabel(url)}
                <span className="sr-only">{t.newTab}</span>
              </a>
            ) : null}
            {repo ? (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-accent-blue transition-colors hover:text-accent-violet"
              >
                <span aria-hidden="true">{`{ }`}</span>
                {t.projects.codeLabel}
                <span className="sr-only">{t.newTab}</span>
              </a>
            ) : null}
          </div>
        ) : image.kind === "video" ? (
          <span className="mt-auto pt-1 font-mono text-sm text-faint">
            {t.projects.videoNote} ↑
          </span>
        ) : null}
      </div>
    </article>
  );
}
