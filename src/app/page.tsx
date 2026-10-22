import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { showExperience } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stack />
      <Projects />
      {/* Oculta hasta completar datos en src/data/profile.ts (showExperience). */}
      {showExperience ? <Experience /> : null}
      <Contact />
    </>
  );
}
