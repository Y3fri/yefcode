import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getSiteUrl } from "@/lib/utils";
import { profile } from "@/data/profile";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.fullName} — ${profile.role}`,
    template: `%s | ${profile.fullName}`,
  },
  description: profile.headline,
  keywords: [
    "desarrollador full stack",
    "Yeferson Guzmán",
    "portfolio",
    "React",
    "Next.js",
    "Python",
    "API",
    "Front-End",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: `${profile.fullName} — ${profile.role}`,
    title: `${profile.fullName} — ${profile.role}`,
    description: profile.headline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — ${profile.role}`,
    description: profile.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {/* Fondo decorativo: glow + rejilla, detrás de todo */}
        <div
          aria-hidden="true"
          className="bg-glow pointer-events-none fixed inset-0 -z-10"
        />
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none fixed inset-0 -z-10"
        />

        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-accent-indigo focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-white"
        >
          Saltar al contenido
        </a>

        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
