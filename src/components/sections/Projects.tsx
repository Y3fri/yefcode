import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

/**
 * Grid de proyectos generado desde los datos tipados.
 * Server Component: sin JS de cliente en el listado.
 */
export function Projects() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <section id="proyectos" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command="git log --projects"
          title="Proyectos"
          description="Una selección de trabajos recientes: tiendas, PWAs, herramientas de escritorio y plataformas full stack en desarrollo."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
