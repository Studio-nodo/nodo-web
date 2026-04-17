"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardData {
  id: string
  title: string
  description: string
  icon?: ReactNode
}

interface MorphingCardStackProps {
  cards: CardData[]
  className?: string
}

const SWIPE_THRESHOLD = 50

export function MorphingCardStack({ cards, className }: MorphingCardStackProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  if (!cards || cards.length === 0) return null

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info
    const swipe = Math.abs(offset.x) * velocity.x
    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      setActiveIndex((prev) => (prev + 1) % cards.length)
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
    }
    setIsDragging(false)
  }

  const stackedCards = cards
    .map((_, i) => {
      const pos = (i - activeIndex + cards.length) % cards.length
      return { ...cards[i], stackPosition: pos }
    })
    .sort((a, b) => b.stackPosition - a.stackPosition)

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      {/* Stack */}
      <div
        className="relative mx-auto"
        style={{ width: "clamp(220px, 60vw, 280px)", height: "clamp(170px, 38vw, 210px)" }}
      >
        <AnimatePresence mode="sync" initial={true}>
          {stackedCards.map((card) => {
            const isTop = card.stackPosition === 0
            const offset = Math.min(card.stackPosition, 3)

            const cardState = {
              opacity: card.stackPosition > 3 ? 0 : 1 - offset * 0.13,
              scale: 1 - offset * 0.045,
              y: offset * 9,
              rotate: (offset % 2 === 0 ? 1 : -1) * offset * 1.8,
              zIndex: cards.length - card.stackPosition,
            }

            return (
              <motion.div
                key={card.id}
                initial={cardState}
                animate={cardState}
                exit={{ opacity: 0, scale: 0.85, x: -120 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                whileDrag={{ scale: 1.02 }}
                className="absolute inset-0 rounded-2xl select-none overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  cursor: isTop ? "grab" : "default",
                }}
                onClick={() => { if (isDragging) return }}
              >
                {/* Centered content */}
                <div className="flex flex-col items-center justify-center h-full gap-3 px-8 pb-7 pt-5 text-center">
                  {/* Icon — large, low opacity */}
                  {card.icon && (
                    <div
                      className="flex items-center justify-center rounded-2xl"
                      style={{
                        width: "clamp(44px, 9vw, 56px)",
                        height: "clamp(44px, 9vw, 56px)",
                        background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                        border: "1px solid rgba(255,255,255,0.10)",
                        opacity: 0.55,
                      }}
                    >
                      <div style={{ width: "55%", height: "55%" }}>
                        {card.icon}
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    className="font-bold text-gradient"
                    style={{
                      fontFamily: "'Sulphur Point', sans-serif",
                      fontSize: "clamp(15px, 2.2vw, 18px)",
                      letterSpacing: "-0.2px",
                      backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, #ffffff 40%, #ffffff 60%, rgba(255,255,255,0.9) 100%)",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      fontSize: "clamp(13px, 2vw, 18px)",
                      color: "rgba(220,218,218,0.9)",
                      lineHeight: 1.55,
                      padding: "0 12px",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir a beneficio ${index + 1}`}
            className="transition-all duration-300"
            style={{
              height: "4px",
              width: index === activeIndex ? "18px" : "4px",
              borderRadius: "99px",
              background: index === activeIndex ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>
    </div>
  )
}
