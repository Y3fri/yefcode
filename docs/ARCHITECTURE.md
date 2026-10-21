# Arquitectura — YefCode

Documento de decisiones técnicas y su justificación. Cada entrada responde:
**qué se decidió, por qué, y qué alternativas se descartaron.**

---

## 1. Next.js 16 App Router + export estático

**Decisión:** usar App Router con `output: "export"` en `next.config.ts`.

**Por qué:** el portafolio no necesita servidor. No hay backend, no hay datos
dinámicos por usuario, no hay autenticación. Un sitio estático es más rápido,
más barato de hostear y más seguro (no hay proceso que atacar).

**Consecuencias:**

- La salida se genera en `/out`, que es lo que publica Netlify.
- No se puede usar `next/image` con `images.unoptimized` off; Netlify se encarga
  de la optimización en su CDN.
- Las rutas de metadatos (`sitemap.ts`, `robots.ts`) requieren
  `export const dynamic = "force-static"` para generarse.

## 2. TypeScript estricto

**Decisión:** `strict: true` **más** `noUncheckedIndexedAccess: true`.

**Por qué:** `noUncheckedIndexedAccess` obliga a comprobar que un elemento de
array existe antes de usarlo (`arr[i]` es `T | undefined`). Evita el bug clásico
del índice fuera de rango. En un sitio pequeño cuesta poco y enseña buenos hábitos.

**Regla asociada:** `any` está prohibido. Se usa `unknown` con narrowing o un
tipo propio en `src/lib/types.ts`.

## 3. Tailwind CSS v4 con tokens en CSS

**Decisión:** Tailwind v4 usando `@theme` dentro de `globals.css`, sin archivo
`tailwind.config.js`.

**Por qué:** v4 define los tokens como variables CSS nativas. Los colores,
tipografías, radios y espaciados viven en `@theme` y se exponen como utilidades
(`bg-surface`, `text-muted`, `border-border`, etc.). Añadir un token es añadir
una línea `--color-x`, sin tocar configuración JS.

**Detalle:** `@tailwindcss/turbopack` se registra como loader de CSS en
`next.config.ts` porque el proyecto usa Turbopack (el bundler por defecto en 16).

## 4. Fuentes con next/font

**Decisión:** `Geist` (sans) y `Geist_Mono` (mono) vía `next/font/google`.

**Por qué:** `next/font` sirve las fuentes desde `/next/static`, sin peticiones
a Google en producción, con `font-display` óptimo y sin `CLS`. Coincide con la
estética de referencia (fazt.dev / opencode.ai) pedida en el brief.

## 5. Server Components por defecto

**Decisión:** solo dos componentes usan `"use client"`:

- `Navbar` (estado del menú móvil, listeners de teclado, bloqueo de scroll).
- `Terminal` (la animación de tipeo con `useEffect`).

**Por qué:** todo lo demás se renderiza en el servidor y llega como HTML ya
formado. Menos JavaScript al cliente = carga más rápida y mejor Lighthouse.

**Alternativa descartada:** Framer Motion para las animaciones. Se descartó por
peso y porque el brief pide explícitamente "sin dependencias pesadas". Las
animaciones se resuelven con CSS puro (`@keyframes` + `IntersectionObserver`
no es necesario: basta con `animation` al montar).

## 6. Datos tipados centralizados

**Decisión:** proyectos, perfil y redes viven en `src/data/`, tipados contra
`src/lib/types.ts`.

**Por qué:** separar datos de presentación permite añadir un proyecto sin tocar
ningún componente, y el compilador valida que la forma de cada objeto es correcta.

**Detalle de `Project`:** `media` es un tipo discriminado (`kind: "image" |
"video"`). Esto permite que `ProjectCard` renderice un `<Image>` o un `<video>`
y que TypeScript garantice que solo se accede a `poster` cuando es un video.

## 7. Orden de proyectos

**Decisión:** el grid ordena por `year` descendente en tiempo de render.

**Por qué:** el orden más reciente primero es el esperado por quien visita un
portafolio. Al hacerlo en el Server Component no cuesta JS en el cliente.

## 8. Seguridad

**Decisión:** cabeceras de seguridad centralizadas en `netlify.toml`.

- `X-Frame-Options: DENY` — implica clickjacking.
- `X-Content-Type-Options: nosniff` — implica MIME-sniffing.
- `Referrer-Policy: strict-origin-when-cross-origin` — no filtra rutas.
- `Content-Security-Policy` con `frame-ancestors 'none'` y `base-uri 'self'`.
- `Permissions-Policy` desactiva cámara, micrófono y geolocalización.

**Además:** todo enlace externo usa `target="_blank" rel="noopener noreferrer"`.
No hay secretos en el repo; solo existe `.env.example` como plantilla.

## 9. Contenido faltante (TODOs)

**Decisión:** los datos personales desconocidos (foto, bio, correo, GitHub,
LinkedIn) se dejan como marcadores `TODO(...)` **visibles en la interfaz**,
no ocultos.

**Por qué:** el brief prohíbe inventar datos personales. Un `TODO` visible es
honesto y localizable. El inventario completo está en `docs/CONTENT.md`.

## 10. Naming y convenciones

- Archivos de componentes en **PascalCase** (`ProjectCard.tsx`).
- Archivos utilitarios/datos en **camelCase** (`projects.ts`, `utils.ts`).
- Nombres de código en **inglés**; textos del sitio en **español**.
- Commits convencionales (`feat:`, `docs:`, `chore:`, ...).

## 11. Decisiones que quedaron pendientes deliberadamente

| Tema                 | Estado                                                         |
| -------------------- | -------------------------------------------------------------- |
| Modo claro (light)   | No incluido: el brief fija "dark por defecto" como única tema. |
| Páginas por proyecto | No incluidas: el brief pide tarjetas con enlace, no rutas.     |
| Formulario contact   | No incluido: el brief pide enlaces mailto/redes, sin backend.  |
| Analítica            | No incluida: sin dependencias externas ni cookies.             |
