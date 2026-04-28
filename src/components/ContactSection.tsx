"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import type { ReactNode } from "react";

function InstagramIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const contacts: { icon: ReactNode; text: string; href: string; isExternal?: boolean }[] = [
  {
    icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: "rgba(255,255,255,0.7)" }} />,
    text: "contacto@studio-nodo.com",
    href: "https://mail.google.com/mail/?view=cm&to=contacto@studio-nodo.com",
    isExternal: true,
  },
  {
    icon: <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: "rgba(255,255,255,0.7)" }} />,
    text: "studionodo.team",
    href: "https://www.instagram.com/studionodo.team/",
    isExternal: true,
  },
];

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="contacto"
      className="relative z-10 w-full px-5 sm:px-8 flex flex-col items-center"
      style={{
        paddingTop: "clamp(80px, 5rem, 100px)",
        paddingBottom: "clamp(120px, 7.5rem, 150px)",
      }}
    >
      {/* Header */}
      <div
        className={`text-center mb-24 md:mb-32 w-full${mounted ? " fade-in-up" : ""}`}
        style={mounted ? { animationDuration: "0.8s" } : {}}
      >
        <span
          className="text-xs md:text-sm tracking-[10px] text-white/35 uppercase font-light mb-4 block"
          style={{ fontFamily: "'Sulphur Point', sans-serif" }}
        >
          CONTACTO
        </span>
        <h2
          className="font-bold mt-4 text-gradient"
          style={{
            fontFamily: "'Sulphur Point', sans-serif",
            fontSize: "clamp(24px, 4vw, 42px)",
            letterSpacing: "0.5px",
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, #ffffff 25%, #ffffff 75%, rgba(255,255,255,0.15) 100%)",
          }}
        >
          Hablemos
        </h2>
      </div>

      {/* Contact cards — motion.a kept for whileHover/whileTap, entrance via CSS */}
      <div className="flex flex-col items-center gap-4 md:gap-5 w-full">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.text}
            href={contact.href}
            target={contact.isExternal ? "_blank" : undefined}
            rel={contact.isExternal ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-4 md:gap-5 px-6 py-4 rounded-xl group cursor-pointer${mounted ? " fade-in-up" : ""}`}
            style={{
              textDecoration: "none",
              background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              width: "fit-content",
              maxWidth: "calc(100vw - 48px)",
              ...(mounted ? { animationDelay: `${0.15 * index * 1000}ms` } : {}),
            }}
            whileHover={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06))",
              borderColor: "rgba(255,255,255,0.25)",
              y: -4,
              scale: 1.01,
              boxShadow: "0 12px 36px rgba(0,0,0,0.35)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex-shrink-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
              {contact.icon}
            </div>

            <span
              className="text-white/85 group-hover:text-white transition-colors font-light tracking-tight"
              style={{ fontFamily: "'Sulphur Point', sans-serif", fontSize: "clamp(13px, 2vw, 22px)", wordBreak: "break-all" }}
            >
              {contact.text}
            </span>

            <span className="opacity-0 group-hover:opacity-100 text-white/70 text-xl ml-2 transition-opacity duration-300">
              →
            </span>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center mt-20 md:mt-24">
        <p
          className={`text-center text-white/25 text-sm tracking-wider w-full contact-copyright${mounted ? " fade-in-up" : ""}`}
          style={mounted ? { animationDelay: "0.6s", animationDuration: "0.8s" } : {}}
        >
          © 2026 studio-nodo.com
        </p>

        <div
          className={`w-full flex justify-end mt-10${mounted ? " fade-in-up" : ""}`}
          style={mounted ? { animationDelay: "0.8s", animationDuration: "0.8s" } : {}}
        >
          <Image
            src="/logo.png"
            alt="Studio Nodo - Agencia de Diseño Web y Automatización con IA en Buenos Aires"
            width={80}
            height={59}
            className="object-contain"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.25, width: "80px", height: "auto" }}
          />
        </div>
      </footer>
    </section>
  );
}
