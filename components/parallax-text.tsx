"use client"

import { useEffect, useRef } from "react"

export function ParallaxText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const scrollProgress = rect.top / window.innerHeight
      el.style.transform = `translateX(${scrollProgress * -200}px)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden py-16">
      <div
        ref={ref}
        className="flex whitespace-nowrap will-change-transform"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="mx-4 text-[100px] font-black leading-none tracking-tighter text-primary/[0.03] uppercase sm:text-[140px] lg:text-[180px]"
          >
            {text}
          </span>
        ))}
      </div>
      {/* Fading top/bottom lines */}
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </div>
  )
}
