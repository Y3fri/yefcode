/**
 * Datos personales y textos del sitio.
 * Regla: todo texto editable vive aquí, nunca dentro de un componente.
 */

export const profile = {
  name: "Yeferson",
  fullName: "Yeferson Guzmán",
  role: "Desarrollador Full Stack",
  /** Subtítulo del hero. */
  headline:
    "Construyo aplicaciones web y APIs claras, rápidas y bien estructuradas. Vengo del soporte técnico y la supervisión de equipos, así que me importa que las cosas funcionen en producción.",
  /** Etiqueta de rama que se muestra en la navbar y el footer. */
  branch: "main",
  /** Ramas decorativas de la metáfora git. */
  subBranches: ["web", "api"] as const,
  /**
   * TODO(personal): añade tu ciudad/país.
   * Se usa junto a la disponibilidad en la sección Sobre mí.
   */
  location: "TODO: tu ciudad, país",
  /**
   * TODO(texto): escribe aquí tu biografía real de "Sobre mí".
   * El marcador se renderiza de forma visible hasta que la reemplaces.
   */
  about: [
    "TODO(texto): reemplaza este párrafo con tu biografía real. Cuenta de dónde vienes (soporte técnico y supervisión), qué tecnologías construyes normalmente y qué tipo de problemas te gusta resolver.",
  ],
  /** TODO(foto): pon tu foto en /public/projects/photo.jpg y actualiza esta ruta. */
  photoSrc: undefined as string | undefined,
  /** TODO(foto): describe tu foto para lectores de pantalla. */
  photoAlt: "TODO: retrato de Yeferson Guzmán",
} as const;

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
] as const;
