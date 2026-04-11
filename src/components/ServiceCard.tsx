"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

export default function ServiceCard({ title, category, description, imageSrc, imageAlt, index }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const springTransition = "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
  const imageTransform = isHovered && !isFlipped
    ? "translateY(-10px) scale(1.12)"
    : "translateY(0px) scale(1)";

  const isEven = index % 2 === 0;
  const enterX = isEven ? -80 : 80;

  return (
    <motion.div
      className="w-full flex justify-center px-4 md:px-6"
      initial={{ opacity: 0, x: enterX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      <div
        className="w-full max-w-3xl cursor-pointer"
        style={{ perspective: "1400px", height: "clamp(130px, 13vw, 150px)" }}
        onClick={() => setIsFlipped((v) => !v)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Flip container — pure CSS, no framer-motion transform */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >

          {/* FRONT */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
              display: "flex",
              alignItems: "center",
              padding: "0 clamp(20px, 3vw, 40px)",
              gap: "clamp(16px, 2.5vw, 36px)",
              overflow: "hidden",
            }}
          >
            {/* Image with CSS bounce on card hover */}
            <div
              style={{
                flexShrink: 0,
                width: "clamp(64px, 8vw, 100px)",
                height: "clamp(64px, 8vw, 100px)",
                position: "relative",
                transform: imageTransform,
                transition: springTransition,
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100px, 120px"
                className="object-contain"
                style={{ filter: "brightness(1.35) drop-shadow(0 4px 12px rgba(0,0,0,0.35))" }}
              />
            </div>

            <h3
              style={{
                fontFamily: "'Sulphur Point', sans-serif",
                fontSize: "clamp(18px, 3.2vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-0.5px",
                color: "#ffffff",
                lineHeight: 1,
                flex: 1,
              }}
            >
              {title}
            </h3>

            {/* Category pill */}
            <span
              style={{
                flexShrink: 0,
                display: "inline-block",
                padding: "3px 10px",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "100px",
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: "clamp(10px, 0.7vw, 11px)",
                fontWeight: 500,
                letterSpacing: "1.5px",
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {category}
            </span>
          </div>

          {/* BACK */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.11)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
              display: "flex",
              alignItems: "center",
              padding: "0 clamp(20px, 3vw, 40px)",
              gap: "clamp(14px, 2vw, 28px)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "clamp(48px, 6vw, 76px)",
                height: "clamp(48px, 6vw, 76px)",
                position: "relative",
                opacity: 0.55,
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 76px, 96px"
                className="object-contain"
                style={{ filter: "brightness(1.2)" }}
              />
            </div>

            <p
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: "clamp(12px, 1.4vw, 15px)",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.6,
                flex: 1,
              }}
            >
              {description}
            </p>

            <span
              style={{
                flexShrink: 0,
                display: "inline-block",
                padding: "5px 14px",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "100px",
                fontFamily: "'Sulphur Point', sans-serif",
                fontSize: "clamp(9px, 1vw, 12px)",
                fontWeight: 700,
                letterSpacing: "1.5px",
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
