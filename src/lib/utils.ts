/**
 * Utilidades pequeñas y puras.
 * Sin dependencias externas: mantenerlo así salvo justificación.
 */

/**
 * Une clases de Tailwind condicionalmente.
 * Acepta strings, y valores falsy que se descartan.
 */
export function cn(...classes: readonly (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Ruta canónica del sitio para metadata, OG y sitemap.
 * Usa NEXT_PUBLIC_SITE_URL si existe; nunca lanza en build estático.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yefcode.netlify.app";
  return raw.replace(/\/+$/, "");
}

/**
 * Etiqueta corta de un enlace externo: el dominio sin "www.".
 * Devuelve la URL tal cual si no se puede parsear (nunca lanza).
 */
export function getUrlLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
