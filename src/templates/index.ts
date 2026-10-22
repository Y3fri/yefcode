import type { ComponentType } from "react";
import type { TemplateSlug } from "@/data/templates";
import { CvProfesionalDemo } from "./cv-profesional";
import { NegocioLocalDemo } from "./negocio-local";
import { PortafolioCreativoDemo } from "./portafolio-creativo";
import { CartaDigitalDemo } from "./carta-digital";
import { InvitacionEventoDemo } from "./invitacion-evento";

/**
 * Registro slug → componente de demo.
 * El tipo Record<TemplateSlug, …> obliga a registrar la demo de toda
 * plantilla que exista en src/data/templates.ts (si falta, no compila).
 */
export const templateDemos: Readonly<Record<TemplateSlug, ComponentType>> = {
  "cv-profesional": CvProfesionalDemo,
  "negocio-local": NegocioLocalDemo,
  "portafolio-creativo": PortafolioCreativoDemo,
  "carta-digital": CartaDigitalDemo,
  "invitacion-evento": InvitacionEventoDemo,
};
