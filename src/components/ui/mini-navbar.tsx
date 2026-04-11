"use client";

import React, { useState, useEffect } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "'Sulphur Point', sans-serif",
  fontSize: "11px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  textDecoration: "none",
  fontWeight: 700,
  color: "rgba(255,255,255,0.45)",
};

const AnimatedNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="group relative inline-block"
    style={{ textDecoration: "none", overflow: "hidden", height: "18px", lineHeight: "18px" }}
  >
    <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
      <span style={{ ...linkStyle, display: "block", height: "18px", lineHeight: "18px" }}>
        {children}
      </span>
      <span
        style={{
          ...linkStyle,
          display: "block",
          height: "18px",
          lineHeight: "18px",
          fontWeight: 700,
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, #ffffff 40%, #ffffff 60%, rgba(255,255,255,0.6) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {children}
      </span>
    </div>
  </a>
);

export function MiniNavbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-5 right-5 z-50 flex items-center justify-center rounded-full backdrop-blur-md
        transition-[opacity,transform] duration-500 ease-out
        px-5 py-[10px] sm:px-[52px]
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"}`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
    >
      {/* Desktop links */}
      <nav className="hidden sm:flex items-center gap-5">
        {navLinks.map((link) => (
          <AnimatedNavLink
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
          >
            {link.label}
          </AnimatedNavLink>
        ))}
      </nav>

      {/* Mobile: Sheet trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <button
          className="sm:hidden flex items-center justify-center focus:outline-none w-8 h-8"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        <SheetContent
          side="right"
          showClose={false}
          className="border-l border-white/[0.06] backdrop-blur-xl"
          style={{
            background: "rgba(6, 6, 8, 0.92)",
            boxShadow: "-8px 0 40px rgba(0,0,0,0.6)",
          }}
        >
          {/* Links */}
          <nav className="flex flex-col px-8 pt-16">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="py-6 transition-colors duration-200 hover:text-white border-b border-white/[0.05] last:border-0"
                style={{ ...linkStyle, fontSize: "15px", letterSpacing: "3px" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Línea divisora decorativa */}
          <div
            className="mx-6 mt-auto mb-8"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }}
          />
        </SheetContent>
      </Sheet>
    </header>
  );
}
