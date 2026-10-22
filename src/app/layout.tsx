import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { SettingsProvider } from "@/components/providers/SettingsProvider";
import { getSiteUrl } from "@/lib/utils";
import { profile, profileFacts } from "@/data/profile";
import { es } from "@/data/i18n/es";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const siteTitle = `${profile.fullName} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${profile.fullName}`,
  },
  description: es.meta.description,
  keywords: [
    "páginas web para negocios",
    "páginas web en Colombia",
    "hoja de vida web",
    "portafolio web",
    "desarrollador full stack",
    "Yeferson Guzmán",
    "plantillas web",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Colombia",
    "Facatativá",
  ],
  authors: [{ name: profile.fullName, url: profileFacts.githubUrl }],
  creator: profile.fullName,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: es.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: es.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { color: "#05060a" },
  ],
  colorScheme: "dark light",
};

/** JSON-LD: solo datos públicos confirmados (sin teléfono en ninguno). */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: profile.fullName,
      jobTitle: profile.role,
      url: siteUrl,
      sameAs: [profileFacts.githubUrl, profileFacts.linkedinUrl],
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.address.locality,
        addressRegion: profile.address.region,
        addressCountry: profile.address.countryCode,
      },
    },
    {
      "@type": "ProfessionalService",
      name: profile.fullName,
      description: es.meta.description,
      url: siteUrl,
      serviceType: "Páginas web para personas y negocios",
      areaServed: {
        "@type": "Country",
        name: profile.address.country,
      },
      founder: {
        "@type": "Person",
        name: profile.fullName,
      },
      sameAs: [profileFacts.githubUrl, profileFacts.linkedinUrl],
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.address.locality,
        addressRegion: profile.address.region,
        addressCountry: profile.address.countryCode,
      },
    },
  ],
};

/**
 * Aplica las preferencias guardadas antes del primer paint (sin flash).
 * Es el mismo código que src/lib/settings.ts aplica tras la hidratación.
 * try/catch: localStorage puede no estar disponible.
 */
const preferencesInitScript = `(function(){try{
var d=document.documentElement;
var s=JSON.parse(localStorage.getItem("yefcode.settings")||"{}");
var t=s.theme;
if(t!=="dark"&&t!=="light"&&t!=="system")t="dark";
d.dataset.theme=t==="system"?(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"):t;
if(s.accent==="violet"||s.accent==="green"||s.accent==="amber"||s.accent==="blue")d.dataset.accent=s.accent;
var m=s.motion;
if(m!=="full"&&m!=="reduced")m=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"reduced":"full";
d.dataset.motion=m;
d.lang=s.language==="en"?"en":"es";
}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          id="yefcode-preferences-init"
          dangerouslySetInnerHTML={{ __html: preferencesInitScript }}
        />
        <script
          id="yefcode-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SettingsProvider>
          {/* Fondo decorativo: glow + rejilla, detrás de todo */}
          <div
            aria-hidden="true"
            className="bg-glow pointer-events-none fixed inset-0 -z-10"
          />
          <div
            aria-hidden="true"
            className="bg-grid pointer-events-none fixed inset-0 -z-10"
          />

          <SkipLink />

          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}
