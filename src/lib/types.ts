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

export type Project = {
  /** Identificador estable usado como key de React. */
  slug: string;
  title: string;
  year: number;
  /** Estado visible en la tarjeta: producción o desarrollo. */
  status: ProjectStatus;
  /** Descripción corta, 1–2 frases, en español (idioma por defecto). */
  summary: string;
  /** "Mi rol" en el proyecto, en español. Opcional si aún no está confirmado. */
  role?: string;
  /** Stack tecnológico, se renderiza como chips. */
  stack: readonly string[];
  /** Etiqueta de rama estilo git: "web" o "api". */
  branch: Branch;
  /** Imagen o video de la tarjeta (tipo discriminado por `kind`). */
  image: ProjectMedia;
  /** Enlace al proyecto en producción o demo. Opcional si no aplica. */
  url?: string;
  /** Enlace al código en GitHub. Opcional: solo si el autor lo confirma. */
  repo?: string;
};

export type SocialId = "email" | "whatsapp" | "linkedin" | "github";

export type Social = {
  id: SocialId;
  /** Nombre del icono a renderizar (mismo identificador que `id`). */
  icon: SocialId;
  /** Valor visible: correo, teléfono o handle. Es un dato, no un texto a traducir. */
  value: string;
  /** Destino: mailto:, tel:, URL externa. */
  href: string;
  /** true cuando el destino abre fuera del sitio. */
  external: boolean;
  /** true cuando el valor se puede copiar al portapapeles. */
  copyable: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};

export type StackGroupId = "frontend" | "backend" | "data" | "others";

export type StackGroup = {
  id: StackGroupId;
  /** Nombres de tecnologías: son propios, no se traducen. */
  items: readonly string[];
};

/** Texto bilingüe para datos estructurados (experiencia). */
export type LocalizedText = {
  es: string;
  en: string;
};

export type ExperienceItem = {
  id: string;
  role: LocalizedText;
  /** Periodo: "Actualidad" / "Anterior" hasta confirmar fechas exactas. */
  period: LocalizedText;
  /** TODO(yeferson): empresa o cliente. Opcional hasta confirmarlo. */
  org?: LocalizedText;
  /** TODO(yeferson): dos logros concretos por experiencia. */
  achievements?: readonly LocalizedText[];
};

/** Copia de un proyecto en un idioma concreto (inglés vive en src/data/i18n). */
export type ProjectCopy = {
  summary: string;
  role?: string;
};

export type Language = "es" | "en";

export type ThemePreference = "dark" | "light" | "system";

export type AccentColor = "blue" | "violet" | "green" | "amber";

export type MotionPreference = "full" | "reduced";

/** Preferencias del panel de configuración (persistidas en localStorage). */
export type Settings = {
  theme: ThemePreference;
  language: Language;
  accent: AccentColor;
  motion: MotionPreference;
};

/** Línea de la terminal animada del hero. */
export type TerminalLine = {
  prompt?: string;
  text: string;
  tone?: "default" | "ok" | "muted";
};
