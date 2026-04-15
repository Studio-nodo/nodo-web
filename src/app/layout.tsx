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
    default: "Studio Nodo | Diseño Web, IA & Automatizaciones en Buenos Aires",
    template: "%s | Studio Nodo",
  },
  description: "Impulsamos tu negocio con tecnología de punta. Expertos en desarrollo con Next.js, integración de agentes de IA (RAG) y automatización de procesos para maximizar tu eficiencia operativa.",
  keywords: [
    "diseño web Buenos Aires",
    "agencia de ingeniería de software",
    "integraciones con IA",
    "automatizaciones con IA",
    "branding Argentina",
    "desarrollo web argentina",
    "agente IA RAG",
    "automatización de procesos con IA",
    "landing page conversión",
    "e-commerce argentina",
    "next.js argentina",
    "dashboard IA",
    "web corporativa Buenos Aires",
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
    title: "Studio Nodo | Diseño Web, IA & Automatizaciones en Buenos Aires",
    description: "Impulsamos tu negocio con tecnología de punta. Expertos en desarrollo con Next.js, integración de agentes de IA (RAG) y automatización de procesos para maximizar tu eficiencia operativa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studio Nodo - Agencia de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Nodo | Diseño Web, IA & Automatizaciones en Buenos Aires",
    description: "Impulsamos tu negocio con tecnología de punta. Expertos en desarrollo con Next.js, integración de agentes de IA (RAG) y automatización de procesos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studio Nodo - Agencia de Software",
      },
    ],
  },
  alternates: {
    canonical: "https://studio-nodo.com",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
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
    "@type": "ProfessionalService",
    name: "Studio Nodo",
    url: "https://studio-nodo.com",
    logo: "https://studio-nodo.com/icon.png",
    image: "https://studio-nodo.com/icon.png",
    description: "Agencia de ingeniería de software en Buenos Aires especializada en diseño web, automatizaciones con IA, integración de agentes RAG y branding para empresas.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressLocality: "Buenos Aires",
      addressRegion: "Buenos Aires",
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    knowsAbout: [
      "Diseño Web",
      "Ingeniería de Software",
      "Automatización con IA",
      "Agentes de IA RAG",
      "Next.js",
      "React",
      "TypeScript",
      "Branding",
      "E-Commerce",
      "Automatización de Procesos",
      "GitHub",
      "Vercel",
      "Cloudflare",
      "Railway",
      "Claude AI",
      "VS Code",
      "Adobe",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contacto@studio-nodo.com",
        contactType: "customer service",
        availableLanguage: "Spanish",
      },
    ],
    sameAs: ["https://www.instagram.com/studionodo.team/"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Studio Nodo",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diseño Web y Landing Pages",
            description: "Diseño y desarrollo de sitios web y páginas de aterrizaje con Next.js, optimizados para conversión y SEO.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Integraciones con IA y Agentes RAG",
            description: "Integración de agentes de inteligencia artificial con RAG para automatizar atención al cliente y gestión de información.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automatizaciones de Procesos",
            description: "Flujos de automatización a medida sobre infraestructura propia para optimizar operaciones y maximizar eficiencia operativa.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Branding e Identidad Visual",
            description: "Diseño de identidad de marca completa: logo, paleta de colores, tipografía y manual de marca.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Commerce",
            description: "Tiendas online con pasarelas de pago integradas, panel de administración y gestión de stock.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dashboard IA",
            description: "Panel centralizado que conecta datos empresariales con IA para toma de decisiones en tiempo real.",
          },
        },
      ],
    },
  };

  return (
    <html lang="es" suppressHydrationWarning className={`h-full antialiased ${sulphurPoint.variable} ${robotoCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué tipos de proyectos web desarrollan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Desarrollamos landing pages de alta conversión, e-commerce, webs corporativas y aplicaciones web con Next.js y React. Todos los proyectos incluyen diseño a medida, SEO técnico y optimización de rendimiento desde la base.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué es una automatización con IA y cómo puede beneficiar a mi empresa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Una automatización con IA conecta tus herramientas y sistemas para ejecutar tareas de forma autónoma. Construimos flujos a medida sobre nuestra propia infraestructura que automatizan captación de leads, seguimiento de clientes y notificaciones, reduciendo errores y maximizando la eficiencia operativa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué es un agente de IA con RAG?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "RAG (Retrieval-Augmented Generation) es una técnica que entrena a un agente de inteligencia artificial con la información específica de tu negocio. El resultado es un asistente capaz de responder consultas, calificar leads y gestionar agenda de forma autónoma.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto tiempo tarda en estar lista una web?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Una landing page tarda entre 2 y 4 semanas. Un e-commerce o web corporativa entre 4 y 8 semanas. El timeline exacto depende del alcance y la disponibilidad de materiales del cliente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Ofrecen servicios de branding para empresas nuevas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Diseñamos identidades de marca completas: logo, paleta de colores, tipografías, manual de marca y papelería digital. Trabajamos con startups y empresas consolidadas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿El SEO está incluido en el desarrollo web?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Todos nuestros proyectos incluyen SEO técnico base: encabezados optimizados, metadatos, schema markup JSON-LD, velocidad de carga y sitemap.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Trabajan con empresas de todo el país o solo en Buenos Aires?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Trabajamos de forma remota con empresas de toda Argentina. Estamos basados en Buenos Aires y también hemos colaborado con clientes del exterior.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: '#000000' }} suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Studio Nodo",
              "url": "https://studio-nodo.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
