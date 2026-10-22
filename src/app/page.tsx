import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TemplatesPreview } from "@/components/sections/TemplatesPreview";
import { Process } from "@/components/sections/Process";
import { Includes } from "@/components/sections/Includes";
import { Pricing } from "@/components/sections/Pricing";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";
import { Experience } from "@/components/sections/Experience";
import { showExperience } from "@/data/profile";

/**
 * Home: embudo de servicios (qué puedo crear, cómo trabajamos, qué
 * incluye, precios) + evidencia (proyectos, sobre mí, stack) +
 * objeciones (FAQ) + contacto y CTA final.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TemplatesPreview />
      <Process />
      <Includes />
      <Pricing />
      <Projects />
      {/* Oculta hasta completar datos en src/data/profile.ts (showExperience). */}
      {showExperience ? <Experience /> : null}
      <About />
      <Stack />
      <Faq />
      <Contact />
      <FinalCta />
    </>
  );
}
