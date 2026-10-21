import type { Project } from "@/lib/types";

/**
 * Fu única de verdad de los proyectos.
 * Para agregar uno nuevo: añade un objeto aquí y su imagen en /public/projects.
 */

export const projects: readonly Project[] = [
  {
    id: "yedibox",
    name: "YEDIBOX",
    year: 2025,
    description:
      "Sitio de tienda en línea con diseño web a medida, enfocado en una interfaz clara y una experiencia de compra fluida.",
    stack: ["Diseño web", "Front-End", "UI/UX"],
    branch: "web",
    status: "live",
    media: {
      kind: "image",
      src: "/projects/yedi1.png",
      alt: "Captura de la tienda en línea YEDIBOX mostrando su catálogo de productos.",
    },
    link: { label: "yedibox.shop", href: "https://yedibox.shop" },
  },
  {
    id: "sistema-pos",
    name: "Sistema POS",
    year: 2024,
    description:
      "Punto de venta de escritorio para gestión de ventas e inventario, construido con PyQt6 y respaldado en MySQL.",
    stack: ["PyQt6", "MySQL", "UI/UX"],
    branch: "api",
    status: "live",
    media: {
      kind: "video",
      src: "/projects/tienda23.mp4",
      alt: "Video demostración del Sistema POS en funcionamiento.",
      poster: "/projects/yedi1.png",
    },
  },
  {
    id: "reclaje-pwa",
    name: "Reclaje PWA",
    year: 2022,
    description:
      "Aplicación web progresiva con mapa de Google Maps y API propia, pensada para consultas georreferenciadas desde el celular.",
    stack: ["React", "Python", "Google Maps", "API", "UI/UX"],
    branch: "web",
    status: "live",
    media: {
      kind: "image",
      src: "/projects/pwa.png",
      alt: "Captura de la PWA Reclaje mostrando un mapa de Google Maps en pantalla móvil.",
    },
  },
  {
    id: "deylax",
    name: "DEYLAX",
    year: 2026,
    description:
      "Plataforma en desarrollo con backend en FastAPI, front-end en React y una escena interactiva en Three.js.",
    stack: ["FastAPI", "React", "MySQL", "Three.js"],
    branch: "api",
    status: "development",
    media: {
      kind: "image",
      src: "/projects/deylax.png",
      alt: "Captura de la plataforma DEYLAX en desarrollo.",
    },
    link: { label: "deylax.com", href: "https://deylax.com" },
  },
  {
    id: "yedicont",
    name: "YediCont",
    year: 2026,
    description:
      "Herramienta contable en desarrollo con front-end en React y una API en Python, enfocada en simplicidad de uso.",
    stack: ["React", "Python", "API", "UI/UX"],
    branch: "web",
    status: "development",
    media: {
      kind: "image",
      src: "/projects/yedicont.png",
      alt: "Captura del front-end de YediCont en desarrollo.",
    },
    link: {
      label: "ver demo",
      href: "https://yedicont-front-rkny.vercel.app",
    },
  },
  {
    id: "free-learning-english",
    name: "Free Learning English",
    year: 2025,
    description:
      "Sitio de práctica de inglés que usa el reconocimiento de voz de Google para evaluar la pronunciación en el navegador.",
    stack: ["Google Speech API", "HTML", "CSS", "JavaScript"],
    branch: "web",
    status: "live",
    media: {
      kind: "image",
      src: "/projects/english.png",
      alt: "Captura del sitio Free Learning English con su ejercicio de pronunciación.",
    },
    link: { label: "netlify.app", href: "https://y3frienglish.netlify.app" },
  },
];
