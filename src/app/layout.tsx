import type { Metadata } from "next";
import { Sulphur_Point, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const sulphurPoint = Sulphur_Point({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sulphur",
});

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio-nodo.com"),
  title: {
    default: "Studio Nodo | Ingeniería de Software & Diseño Digital",
    template: "%s | Studio Nodo",
  },
  description: "Transformamos negocios con soluciones web de alto impacto, automatización con IA y diseño de vanguardia. Expertos en Next.js y flujos inteligentes de trabajo.",
  keywords: [
    "desarrollo web argentina",
    "ingeniería de software",
    "diseño digital",
    "automatización IA",
    "landing page conversión",
    "e-commerce argentina",
    "next.js argentina",
    "agente ia",
    "branding diseño",
    "web corporativa",
    "studio nodo",
  ],
  authors: [{ name: "Studio Nodo" }],
  creator: "Studio Nodo",
  publisher: "Studio Nodo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://studio-nodo.com",
    siteName: "Studio Nodo",
    title: "Studio Nodo | Ingeniería de Software & Diseño Digital",
    description: "Transformamos negocios con soluciones web de alto impacto, automatización con IA y diseño de vanguardia. Expertos en Next.js y flujos inteligentes de trabajo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Nodo | Ingeniería de Software & Diseño Digital",
    description: "Transformamos negocios con soluciones web de alto impacto, automatización con IA y diseño de vanguardia.",
  },
  alternates: {
    canonical: "https://studio-nodo.com",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Studio Nodo",
    url: "https://studio-nodo.com",
    logo: "https://studio-nodo.com/logo.png",
    description: "Estudio de diseño y desarrollo web en Argentina especializado en landing pages, e-commerce, branding y sitios corporativos.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressLocality: "Argentina",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "mmartone@studio-nodo.com",
        contactType: "customer service",
      },
      {
        "@type": "ContactPoint",
        email: "strezeguet@studio-nodo.com",
        contactType: "customer service",
      },
    ],
    sameAs: ["https://instagram.com/studio-nodo"],
    offers: {
      "@type": "AggregateOffer",
      itemOffered: [
        {
          "@type": "Service",
          name: "Desarrollo de Landing Page",
          description: "Diseño y desarrollo de páginas de aterrizaje optimizadas para conversión",
        },
        {
          "@type": "Service",
          name: "Desarrollo de E-Commerce",
          description: "Tiendas online completas con pasarelas de pago integradas",
        },
        {
          "@type": "Service",
          name: "Web Corporativa",
          description: "Sitios web profesionales para empresas",
        },
        {
          "@type": "Service",
          name: "Branding",
          description: "Creación de identidad de marca completa",
        },
        {
          "@type": "Service",
          name: "Gestión de Redes Sociales",
          description: "Estrategia y gestión de contenidos para redes sociales",
        },
        {
          "@type": "Service",
          name: "Diseño de Logotipo",
          description: "Diseño de logotipos profesionales a medida",
        },
      ],
    },
  };

  return (
    <html lang="es" className={`h-full antialiased ${sulphurPoint.variable} ${robotoCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: '#000000' }}>{children}</body>
    </html>
  );
}
