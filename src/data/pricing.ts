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
      "Una página sencilla y bonita, lista para compartir.",
      "A simple, good-looking page, ready to share.",
    ),
    features: [
      L(
        "Hoja de vida web, invitación o página para un momento especial.",
        "A web resume, invitation or a page for a special moment.",
      ),
      L(
        "Página estática con tus textos y fotos, ajustados contigo.",
        "Static page with your texts and photos, tuned together.",
      ),
      L("Animaciones suaves y diseño limpio.", "Smooth animations and a clean design."),
      L("Se ve bien en celular y carga rápido.", "Looks good on mobile and loads fast."),
    ],
    // TODO(yeferson): precio en COP para el paquete Básico.
    priceCop: null,
  },
  {
    id: "negocio",
    name: L("Negocio", "Business"),
    description: L(
      "Una página completa para tu negocio, con lo necesario para vender y atender clientes.",
      "A complete page for your business, with what you need to sell and serve customers.",
    ),
    features: [
      L("Catálogo de productos, horarios y ubicación.", "Product catalog, hours and location."),
      L(
        "Base de datos para guardar tus productos y poder editarlos.",
        "Database to store your products and edit them anytime.",
      ),
      L(
        "Agenda de citas para que tus clientes reserven en línea.",
        "Appointment booking so customers can reserve online.",
      ),
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
      "Si tu idea no encaja en un paquete, la construimos a tu medida y lista para crecer.",
      "If your idea doesn't fit a package, we build it to your needs, ready to grow.",
    ),
    features: [
      L(
        "Sistema, plataforma o idea nueva con API y base de datos propia.",
        "A system, platform or brand-new idea with its own API and database.",
      ),
      L(
        "Arquitectura escalable que crece con tu negocio.",
        "Scalable architecture that grows with your business.",
      ),
      L(
        "Usuarios, paneles de administración e integraciones.",
        "Users, admin panels and integrations.",
      ),
      L("Lo definimos en una conversación.", "We define it in a conversation."),
      L("Propuesta clara antes de empezar.", "A clear proposal before we start."),
    ],
    // TODO(yeferson): precio en COP para el paquete A la medida.
    priceCop: null,
  },
];
