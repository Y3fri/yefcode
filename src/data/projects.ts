import type { Project } from "@/lib/types";

/**
 * Fu única de verdad de los proyectos.
 * Para agregar uno nuevo: añade un objeto aquí, su imagen en /public/projects
 * y, si quieres traducirlo, su entrada en src/data/i18n/en.ts (projectCopy).
 * Regla: no se inventan datos; lo pendiente se marca TODO(yeferson).
 */

export const projects = [
  {
    slug: "yedibox",
    title: "YEDIBOX",
    year: 2025,
    status: "live",
    summary:
      "Tienda en línea con diseño propio y desarrollo de front-end a medida: navegación clara y una experiencia de compra pensada de principio a fin.",
    // TODO(yeferson): confirma qué ofrece exactamente la tienda (catálogo, pagos, envíos)
    // para precisar la descripción.
    // TODO(yeferson): confirma el stack técnico real (¿React/Next.js?).
    role: "Diseño UI/UX y desarrollo front-end",
    stack: ["Diseño web", "Front-End", "UI/UX"],
    branch: "web",
    image: {
      kind: "image",
      src: "/projects/yedi1.png",
      alt: "Captura de la tienda en línea YEDIBOX mostrando su catálogo de productos.",
    },
    url: "https://yedibox.com",
    // TODO(yeferson): añade `repo` solo si quieres publicar el enlace al código.
  },
  {
    slug: "sistema-pos",
    title: "Sistema POS",
    year: 2024,
    status: "live",
    summary:
      "Aplicación de escritorio de punto de venta con interfaz propia y base de datos MySQL para la gestión de ventas e inventario.",
    role: "Diseño de interfaz, desarrollo y modelado de datos",
    stack: ["PyQt6", "MySQL"],
    branch: "api",
    image: {
      kind: "video",
      src: "/projects/tienda23.mp4",
      alt: "Video demostración del Sistema POS en funcionamiento.",
      poster: "/projects/yedi1.png",
    },
    // TODO(yeferson): añade `repo` solo si quieres publicar el enlace al código.
  },
  {
    slug: "reclaje-pwa",
    title: "Reclaje PWA",
    year: 2022,
    status: "live",
    summary:
      "Aplicación web progresiva con mapa interactivo de Google Maps y API propia, pensada para consultas desde el celular.",
    // TODO(yeferson): confirma el objetivo real de la app (qué consulta el usuario y para qué).
    role: "Frontend, API y UX",
    stack: ["React", "Python", "Google Maps"],
    branch: "web",
    image: {
      kind: "image",
      src: "/projects/pwa.png",
      alt: "Captura de la PWA Reclaje mostrando un mapa de Google Maps en pantalla móvil.",
    },
    // TODO(yeferson): añade `url` si hay una versión pública.
    // TODO(yeferson): añade `repo` solo si quieres publicar el enlace al código.
  },
  {
    slug: "deylax",
    title: "DEYLAX",
    year: 2026,
    status: "development",
    summary:
      "Plataforma web full stack en desarrollo con backend en FastAPI, front-end en React e interfaz 3D con Three.js.",
    // TODO(yeferson): describe qué hace la plataforma (sector, usuario y función principal).
    // TODO(yeferson): confirma tu rol concreto en este proyecto.
    stack: ["FastAPI", "React", "MySQL", "Three.js"],
    branch: "api",
    image: {
      kind: "image",
      src: "/projects/deylax.png",
      alt: "Captura de la plataforma DEYLAX en desarrollo.",
    },
    url: "https://deylax.com",
    // TODO(yeferson): añade `repo` solo si quieres publicar el enlace al código.
  },
  {
    slug: "yedicont",
    title: "YediCont",
    year: 2026,
    status: "development",
    summary:
      "Aplicación web en desarrollo con API en Python y frontend en React, construida para crecer sobre una base de datos bien modelada.",
    // TODO(yeferson): describe qué hace la aplicación (qué problema resuelve y para quién).
    // TODO(yeferson): confirma tu rol concreto en este proyecto.
    stack: ["React", "Python"],
    branch: "web",
    image: {
      kind: "image",
      src: "/projects/yedicont.png",
      alt: "Captura del front-end de YediCont en desarrollo.",
    },
    url: "https://yedicont-front-rkny.vercel.app",
    // TODO(yeferson): añade `repo` solo si quieres publicar el enlace al código.
  },
  {
    slug: "free-learning-english",
    title: "Free Learning English",
    year: 2025,
    status: "live",
    summary:
      "Herramienta web para practicar inglés con reconocimiento de voz en el navegador (Google Speech API) que evalúa la pronunciación.",
    // TODO(yeferson): confirma tu rol concreto en este proyecto.
    stack: ["HTML", "CSS", "JavaScript"],
    branch: "web",
    image: {
      kind: "image",
      src: "/projects/english.png",
      alt: "Captura del sitio Free Learning English con su ejercicio de pronunciación.",
    },
    url: "https://y3frienglish.netlify.app",
    // TODO(yeferson): añade `repo` solo si quieres publicar el enlace al código.
  },
  {
    slug: "tattoo-style",
    title: "Tattoo Style",
    year: 2026,
    status: "live",
    summary:
      "Sitio para un estudio de tatuajes: galería filtrable con lightbox, reserva de citas por turnos y panel de administración con login para editar el contenido, subir fotos y gestionar reservas. Los datos viven en JSON dentro de Firebase Storage y los mensajes terminan en WhatsApp.",
    role: "Diseño, desarrollo y panel de administración",
    stack: ["React", "Vite", "Firebase"],
    branch: "web",
    image: {
      kind: "video",
      src: "/projects/tatto.mp4",
      alt: "Video de demostración del sitio Tattoo Style.",
    },
    url: "https://tattoplantilla.netlify.app",
    repo: "https://github.com/Y3fri/tatto-pantilla",
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];
