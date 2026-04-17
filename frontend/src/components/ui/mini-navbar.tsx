"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tecnología", href: "#stack" },
  { label: "FAQ", href: "#faq" },
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
      className={`fixed top-5 right-5 z-50 transition-[opacity,transform] duration-500 ease-out
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"}`}
    >
      <Sheet open={open} onOpenChange={setOpen}>
        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú de navegación"
          className="flex items-center justify-center w-11 h-11 rounded-full focus:outline-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>

        {/* Sheet con los links */}
        <SheetContent
          side="right"
          showClose={false}
          className="border-l border-white/[0.06] backdrop-blur-xl flex flex-col"
          style={{
            background: "rgba(6, 6, 8, 0.95)",
            boxShadow: "-8px 0 40px rgba(0,0,0,0.6)",
          }}
        >
          <nav className="flex flex-col justify-center flex-1 px-10 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="py-7 border-b border-white/[0.06] last:border-0 transition-colors duration-200 hover:text-white"
                style={{ ...linkStyle, fontSize: "18px", letterSpacing: "4px" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

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
