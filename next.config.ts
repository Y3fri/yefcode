import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático para Netlify: genera la salida en /out
  output: "export",
  images: {
    // Con output: "export" no hay API de optimización en el servidor.
    // Netlify sirve los estáticos directamente desde su CDN.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
