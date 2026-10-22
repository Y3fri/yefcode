/**
 * Datos personales del sitio.
 * Regla: todo dato editable vive aquí (o en src/data/i18n para textos),
 * nunca dentro de un componente. No se inventan datos: lo que falta
 * se marca con TODO(yeferson) y se lista en docs/CONTENT.md.
 */

import type { ExperienceItem } from "@/lib/types";

export const profile = {
  /** Nombre corto usado en la terminal y en el texto del hero. */
  name: "Yeferson",
  fullName: "Yeferson Guzmán",
  role: "Desarrollador Full Stack",
  /** Ubicación completa (datos reales). */
  location: "Facatativá, Cundinamarca, Colombia",
  /** Ubicación corta para footer y tarjetas de datos rápidos. */
  locationShort: "Facatativá, Colombia",
  /** Partes de la dirección para el JSON-LD Person. */
  address: {
    locality: "Facatativá",
    region: "Cundinamarca",
    country: "Colombia",
    countryCode: "CO",
  },
  /** Etiqueta de rama que se muestra en la navbar, el hero y el footer. */
  branch: "main",
  /** Ramas decorativas de la metáfora git. */
  subBranches: ["web", "api"] as const,
  /** TODO(yeferson): existe public/projects/photo.jpg; confirma si quieres mostrarla. */
  photoSrc: undefined as string | undefined,
  photoAlt: "Retrato de Yeferson Guzmán",
} as const;

export const profileFacts = {
  email: "yeferguzman11@gmail.com",
  phoneDisplay: "+57 322 389 0477",
  phoneHref: "tel:+573223890477",
  whatsappUrl: "https://wa.me/573223890477",
  linkedinUrl: "https://www.linkedin.com/in/yeferson-andrey-guzman-silva-8a5aa9188/",
  githubUrl: "https://github.com/Y3fri",
} as const;

/**
 * Experiencia (sección oculta mientras showExperience sea false).
 * TODO(yeferson): confirma empresa/cliente, fechas exactas y 2 logros
 * concretos por experiencia antes de activar showExperience.
 */
export const showExperience = false;

export const experience: readonly ExperienceItem[] = [
  {
    id: "fullstack",
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    period: { es: "Actualidad", en: "Present" },
    // TODO(yeferson): empresa o cliente.
    // TODO(yeferson): fechas exactas (mes/año de inicio).
    // TODO(yeferson): 2 logros concretos (qué construiste y qué resultado tuvo).
  },
  {
    id: "support",
    role: {
      es: "Soporte técnico y supervisión de equipos operativos",
      en: "Technical support and operations team supervision",
    },
    period: { es: "Anterior", en: "Previous" },
    // TODO(yeferson): empresa.
    // TODO(yeferson): fechas exactas (mes/año – mes/año).
    // TODO(yeferson): 2 logros concretos (incidencias resueltas, equipos supervisados, procesos mejorados…).
  },
];

export const navigation = [
  { href: "#inicio", labelKey: "home" },
  { href: "#sobre-mi", labelKey: "about" },
  { href: "#que-hago", labelKey: "services" },
  { href: "#stack", labelKey: "stack" },
  { href: "#proyectos", labelKey: "projects" },
  { href: "#contacto", labelKey: "contact" },
] as const;

export type NavigationLabelKey = (typeof navigation)[number]["labelKey"];
