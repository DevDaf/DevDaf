"use client"

import React from "react"

import { useEffect, useRef } from "react"

export function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
    }

    const handleLeave = () => {
      el.style.transform = "translate(0, 0)"
      el.style.transition = "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)"
    }

    const handleEnter = () => {
      el.style.transition = "transform 0.15s ease-out"
    }

    el.addEventListener("mousemove", handleMove)
    el.addEventListener("mouseleave", handleLeave)
    el.addEventListener("mouseenter", handleEnter)

    return () => {
      el.removeEventListener("mousemove", handleMove)
      el.removeEventListener("mouseleave", handleLeave)
      el.removeEventListener("mouseenter", handleEnter)
    }
  }, [])

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  )
}
