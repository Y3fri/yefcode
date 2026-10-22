import type { LocalizedText } from "@/lib/types";
import { L } from "@/lib/utils";

/**
 * Paquetes de precios (estructura, no cifras).
 * Regla de oro: no se inventan precios. `priceCop: null` hace que la
 * tarjeta muestre "Cotización por WhatsApp" en vez de un número.
 */

export type PricingPackage = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  /** Puntos cortos que se listan con icono de verificación. */
  features: readonly LocalizedText[];
  /** Precio final en COP. null = sin precio publicado todavía. */
  priceCop: number | null;
};

export const pricingPackages: readonly PricingPackage[] = [
  {
    id: "basico",
    name: L("Básico", "Basic"),
    description: L(
      "Una página sencilla, lista para compartir.",
      "A simple page, ready to share.",
    ),
    features: [
      L(
        "Hoja de vida web o página para un momento especial.",
        "A web resume or a page for a special moment.",
      ),
      L("Textos y fotos que ajustamos contigo.", "Texts and photos we tune together."),
      L("Enlace propio y botón de WhatsApp.", "Your own link and a WhatsApp button."),
    ],
    // TODO(yeferson): precio en COP para el paquete Básico.
    priceCop: null,
  },
  {
    id: "negocio",
    name: L("Negocio", "Business"),
    description: L(
      "Página para tu negocio, pensada para que te encuentren.",
      "A page for your business, built so people can find you.",
    ),
    features: [
      L("Catálogo, horarios y ubicación.", "Catalog, hours and location."),
      L(
        "Botón de WhatsApp para que te escriban.",
        "A WhatsApp button so customers can message you.",
      ),
      L("Se ve bien en celular y carga rápido.", "Looks good on mobile and loads fast."),
    ],
    // TODO(yeferson): precio en COP para el paquete Negocio.
    priceCop: null,
  },
  {
    id: "medida",
    name: L("A la medida", "Custom"),
    description: L(
      "Si tu idea no encaja en un paquete, la construimos a tu medida.",
      "If your idea doesn't fit a package, we build it to your needs.",
    ),
    features: [
      L(
        "Portafolio, sistema o una idea nueva.",
        "Portfolio, system or a brand-new idea.",
      ),
      L("Lo definimos en una conversación.", "We define it in a conversation."),
      L("Propuesta clara antes de empezar.", "A clear proposal before we start."),
    ],
    // TODO(yeferson): precio en COP para el paquete A la medida.
    priceCop: null,
  },
];
