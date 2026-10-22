import type { StackGroup } from "@/lib/types";

/**
 * Stack agrupado que se muestra en la sección "Stack".
 * Solo tecnologías que aparecen en los proyectos del sitio.
 * TODO(yeferson): confirma si falta alguna tecnología que uses a diario;
 * no se agregan sin tu confirmación.
 */
export const stackGroups: readonly StackGroup[] = [
  {
    id: "frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  { id: "backend", items: ["Python", "FastAPI"] },
  { id: "data", items: ["MySQL"] },
  {
    id: "others",
    items: ["PyQt6", "Three.js", "PWA", "Google Maps API", "Git", "GitHub"],
  },
];
