/**
 * Tipos compartidos del dominio del portafolio.
 * Son la fu única de verdad para lo que se renderiza.
 */

export type Branch = "web" | "api";

export type ProjectStatus = "live" | "development";

export type MediaKind = "image" | "video";

export type ProjectMedia = {
  kind: MediaKind;
  /** Ruta pública, relativa al dominio (ej. "/projects/yedi1.png"). */
  src: string;
  /** Texto alternativo descriptivo. Obligatorio para accesibilidad. */
  alt: string;
  /** Ruta de la imagen de portada (solo para video). */
  poster?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  /** Identificador estable usado como key de React. */
  id: string;
  name: string;
  year: number;
  /** Descripción corta, una frase. */
  description: string;
  /** Stack tecnológico, se renderiza como chips. */
  stack: readonly string[];
  /** Etiqueta de rama estilo git: "web" o "api". */
  branch: Branch;
  status: ProjectStatus;
  media: ProjectMedia;
  /** Enlace externo opcional. El video demo no lleva enlace. */
  link?: ProjectLink;
};

export type Social = {
  id: string;
  label: string;
  href: string;
  /** true cuando el dato aún no está confirmado por el autor. */
  isPlaceholder: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};
