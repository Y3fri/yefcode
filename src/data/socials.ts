import type { Social } from "@/lib/types";
import { profileFacts } from "@/data/profile";

/**
 * Enlaces de contacto centralizados.
 * Los textos visibles (etiquetas de cada canal) viven en src/data/i18n.
 */

export const email = profileFacts.email;
export const phoneDisplay = profileFacts.phoneDisplay;
export const phoneHref = profileFacts.phoneHref;
export const githubUrl = profileFacts.githubUrl;
export const linkedinUrl = profileFacts.linkedinUrl;

/** Mensaje prellenado de WhatsApp, siempre en español. */
const whatsappMessage = encodeURIComponent(
  "Hola Yeferson, vi tu portafolio y me gustaría hablar contigo sobre un proyecto.",
);

export const whatsappUrl = `${profileFacts.whatsappUrl}?text=${whatsappMessage}`;

/** Construye una URL de WhatsApp con un mensaje prellenado (en español). */
export function whatsappUrlWithMessage(message: string): string {
  return `${profileFacts.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

/** Mensaje para el hero y el CTA final: interesado en una página web. */
export const whatsappStartUrl = whatsappUrlWithMessage(
  "Hola Yeferson, vi tu portafolio y me interesa una página web. Te cuento lo que necesito: ",
);

/** Mensaje para el botón "Quiero esta plantilla" (incluye el nombre). */
export function whatsappUrlForTemplate(title: string): string {
  return whatsappUrlWithMessage(
    `Hola Yeferson, vi tu portafolio y me interesa la plantilla «${title}». Te cuento lo que necesito: `,
  );
}

/** Mensaje para el botón de cotizar de cada paquete de precios. */
export function whatsappUrlForPackage(name: string): string {
  return whatsappUrlWithMessage(
    `Hola Yeferson, vi tu portafolio y me interesa el paquete «${name}». Te cuento lo que necesito: `,
  );
}

export const socials: readonly Social[] = [
  {
    id: "email",
    icon: "email",
    value: email,
    href: `mailto:${email}`,
    external: false,
    copyable: true,
  },
  {
    id: "whatsapp",
    icon: "whatsapp",
    value: phoneDisplay,
    href: whatsappUrl,
    external: true,
    copyable: true,
  },
  {
    id: "linkedin",
    icon: "linkedin",
    value: "yeferson-andrey-guzman-silva",
    href: linkedinUrl,
    external: true,
    copyable: true,
  },
  {
    id: "github",
    icon: "github",
    value: "Y3fri",
    href: githubUrl,
    external: true,
    copyable: true,
  },
];

/** Texto que copia el botón de copiar de cada tarjeta de contacto. */
export function copyTargetFor(social: Social): string {
  return social.id === "email" || social.id === "whatsapp" ? social.value : social.href;
}
