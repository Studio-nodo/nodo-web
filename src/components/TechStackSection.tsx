"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const stack: { name: string; alt: string; src: string; whiteBg?: boolean }[] = [
  {
    name: "GitHub",
    alt: "GitHub — control de versiones y colaboración de código",
    src: "/logos/github.svg",
  },
  {
    name: "Vercel",
    alt: "Vercel — plataforma de deploy para aplicaciones web",
    src: "/logos/vercel.svg",
  },
  {
    name: "Cloudflare",
    alt: "Cloudflare — CDN, seguridad y DNS",
    src: "/logos/cloudflare.svg",
  },
  {
    name: "Railway",
    alt: "Railway — infraestructura cloud para backends",
    src: "/logos/railway.svg",
  },
  {
    name: "Claude AI",
    alt: "Claude AI — inteligencia artificial de Anthropic",
    src: "/logos/claude.svg",
  },
  {
    name: "VS Code",
    alt: "Visual Studio Code — editor de código",
    src: "/logos/vscode.png",
  },
  {
    name: "Adobe",
    alt: "Adobe Creative Suite — diseño gráfico y multimedia",
    src: "/logos/adobe.png",
  },
];

const doubled = [...stack, ...stack, ...stack, ...stack];

export default function TechStackSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="stack"
      className="relative z-10 w-full overflow-hidden"
      aria-label="Stack tecnológico de Studio Nodo"
      style={{
        paddingTop: "clamp(80px, 5rem, 100px)",
        paddingBottom: "clamp(80px, 5rem, 100px)",
      }}
    >
      {/* Header */}
      <div
        className={mounted ? "fade-in-up" : ""}
        style={{
          textAlign: "center",
          marginBottom: "clamp(48px, 5vw, 80px)",
          padding: "0 20px",
          ...(mounted ? { animationDuration: "0.8s" } : {}),
        }}
      >
        <span
          style={{
            fontFamily: "'Sulphur Point', sans-serif",
            color: "#ffffff",
            fontSize: "clamp(12px, 1.2vw, 14px)",
            letterSpacing: "10px",
            textTransform: "uppercase",
            fontWeight: 400,
            display: "block",
            marginBottom: "12px",
          }}
        >
          TECNOLOGÍA
        </span>
        <h2
          className="text-gradient"
          style={{
            fontFamily: "'Sulphur Point', sans-serif",
            fontSize: "clamp(24px, 4vw, 42px)",
            fontWeight: 700,
            letterSpacing: "0.5px",
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #ffffff 25%, #ffffff 75%, rgba(255,255,255,0.15) 100%)",
            margin: "0 auto 16px",
          }}
        >
          Stack tecnológico
        </h2>
        <p
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontSize: "clamp(14px, 1.6vw, 18px)",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "480px",
            lineHeight: 1.6,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          Las herramientas con las que construimos soluciones de ingeniería de software, automatizaciones con IA y diseño web.
        </p>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden" role="img" aria-label="Carrusel de tecnologías: GitHub, Vercel, Cloudflare, Railway, Claude AI, VS Code, Adobe Creative Suite">
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-32 z-10"
          direction="left"
          blurIntensity={1}
          blurLayers={4}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-32 z-10"
          direction="right"
          blurIntensity={1}
          blurLayers={4}
        />

        <ul
          className="animate-marquee"
          aria-hidden="true"
          style={{
            display: "flex",
            width: "max-content",
            listStyle: "none",
            padding: "8px 0",
            margin: 0,
          }}
        >
          {doubled.map((tech, i) => (
            <li
              key={i}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 20px",
                marginRight: "16px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", opacity: 0.55 }}>
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={26}
                  height={26}
                  sizes="26px"
                  style={{
                    width: 26,
                    height: 26,
                    objectFit: "contain",
                    objectPosition: "center",
                    filter: tech.whiteBg
                      ? "grayscale(1) invert(1) brightness(2) contrast(4)"
                      : "brightness(0) invert(1)",
                    mixBlendMode: tech.whiteBg ? "screen" : "normal",
                  }}
                />
              </span>
              <span
                style={{
                  fontFamily: "'Sulphur Point', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  letterSpacing: "1px",
                  whiteSpace: "nowrap",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
