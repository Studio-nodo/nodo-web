"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const imgNodo = "https://www.figma.com/api/mcp/asset/b41caea0-5f27-4d69-bc0b-8216837cf44d";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Show navbar after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: isVisible ? "rgba(7, 8, 12, 0.85)" : "transparent",
          backdropFilter: isVisible ? "blur(16px)" : "none",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Border bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 50%, transparent)",
          }}
        />

        <div className="w-full px-6 md:px-8 py-4 md:py-5">
          <div className="flex items-start justify-end">
            {/* Desktop Navigation links */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="relative px-5 py-2.5 rounded-lg overflow-hidden group"
                    style={{
                      fontFamily: "'Sulphur Point', sans-serif",
                      fontSize: "clamp(14px, 1vw, 16px)",
                      fontWeight: isActive ? 600 : 400,
                      letterSpacing: "0.3px",
                      textDecoration: "none",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))"
                        : "transparent",
                      border: isActive
                        ? "1px solid rgba(255,255,255,0.18)"
                        : "1px solid transparent",
                    }}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.08))",
                      borderColor: "rgba(255,255,255,0.22)",
                    }}
                  >
                    <span
                      className="relative z-10"
                      style={{
                        backgroundImage: isActive
                          ? "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, #ffffff 50%, rgba(255,255,255,0.4) 100%)"
                          : "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.5) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {link.label}
                    </span>

                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
                        filter: "blur(8px)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 relative z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <>
                    <motion.path
                      d="M6 6L18 18"
                      stroke="url(#menuGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.path
                      d="M6 18L18 6"
                      stroke="url(#menuGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </>
                ) : (
                  <>
                    <motion.path
                      d="M3 6H21"
                      stroke="url(#menuGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.path
                      d="M3 12H21"
                      stroke="url(#menuGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.path
                      d="M3 18H21"
                      stroke="url(#menuGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </>
                )}
                <defs>
                  <linearGradient id="menuGradient" x1="3" y1="12" x2="21" y2="12">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-72 z-40 lg:hidden"
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: "linear-gradient(135deg, rgba(7, 8, 12, 0.98), rgba(7, 8, 12, 0.95))",
          backdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.6)",
        }}
      >
        <div className="flex flex-col gap-2 pt-28 px-6">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative px-6 py-4 rounded-lg"
                style={{
                  fontFamily: "'Sulphur Point', sans-serif",
                  fontSize: "18px",
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.08))"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(255,255,255,0.2)"
                    : "1px solid transparent",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 20
                }}
                transition={{
                  delay: isMobileMenuOpen ? index * 0.08 : 0,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span
                  style={{
                    backgroundImage: isActive
                      ? "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, #ffffff 50%, rgba(255,255,255,0.4) 100%)"
                      : "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.5) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-30 lg:hidden"
          style={{ background: "rgba(0, 0, 0, 0.6)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
