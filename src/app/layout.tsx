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
    default: "Studio Nodo — Desarrollo Web, E-Commerce y Branding en Argentina",
    template: "%s | Studio Nodo",
  },
  description: "Estudio de diseño y desarrollo web en Argentina. Creamos landing pages de alta conversión, e-commerce optimizados, sitios corporativos y branding completo para empresas que quieren destacar.",
  keywords: [
    "desarrollo web argentina",
    "diseño web",
    "landing page conversión",
    "e-commerce argentina",
    "tienda online",
    "branding diseño",
    "web corporativa",
    "diseño logotipo",
    "redes sociales gestión",
    "studio nodo",
    "next.js",
    "react",
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
    title: "Studio Nodo — Desarrollo Web, E-Commerce y Branding en Argentina",
    description: "Estudio de diseño y desarrollo web en Argentina. Creamos experiencias digitales que convierten: landing pages, e-commerce, sitios corporativos y branding completo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Nodo — Tecnología y Diseño en Unión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Nodo — Desarrollo Web, E-Commerce y Branding",
    description: "Estudio de diseño y desarrollo web en Argentina. Creamos experiencias digitales que convierten.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://studio-nodo.com",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
