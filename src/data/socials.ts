import type { Social } from "@/lib/types";

/**
 * Enlaces de contacto.
 * Los marcados con isPlaceholder: true NO se renderizan como enlace activo
 * hasta que completes el dato. El mailto usa el correo de abajo.
 */

/** TODO(contacto): reemplaza con tu correo real. */
export const email = "TODO@example.com";

/** TODO(contacto): reemplaza con tu URL real de GitHub. */
export const githubUrl = "https://github.com/TODO";

/** TODO(contacto): reemplaza con tu URL real de LinkedIn. */
export const linkedinUrl = "https://www.linkedin.com/in/TODO";

export const socials: readonly Social[] = [
  {
    id: "email",
    label: "Correo",
    href: `mailto:${email}`,
    isPlaceholder: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: githubUrl,
    isPlaceholder: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: linkedinUrl,
    isPlaceholder: true,
  },
];
