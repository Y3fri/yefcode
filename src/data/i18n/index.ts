import { en, projectCopyEn } from "./en";
import { es, type Dictionary } from "./es";
import type { Language, Project, ProjectCopy } from "@/lib/types";
import type { ProjectSlug } from "@/data/projects";

export type { Dictionary } from "./es";

/** El español es el idioma por defecto del sitio. */
export const defaultLanguage: Language = "es";

const dictionaries: Readonly<Record<Language, Dictionary>> = { es, en };

export function getDictionary(language: Language): Dictionary {
  return dictionaries[language] ?? dictionaries[defaultLanguage];
}

/**
 * Copia de un proyecto según el idioma.
 * Español → src/data/projects.ts (fuente de verdad).
 * Inglés  → projectCopyEn (mapa tipado por slug).
 */
export function getProjectCopy(project: Project, language: Language): ProjectCopy {
  if (language === "en") {
    // El mapa satisface Record<ProjectSlug, ProjectCopy>: cubre todo slug.
    const copy = projectCopyEn[project.slug as ProjectSlug];
    if (copy) return copy;
  }
  return { summary: project.summary, role: project.role };
}
