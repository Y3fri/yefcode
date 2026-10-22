"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { useSettings } from "@/components/providers/SettingsProvider";
import { projects } from "@/data/projects";

/**
 * Grid de proyectos generado desde los datos tipados.
 * Se ordena por año descendente en tiempo de render.
 */
export function Projects() {
  const { t } = useSettings();
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <section id="proyectos" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.projects.command}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
