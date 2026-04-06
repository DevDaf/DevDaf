"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let cursorX = 0
    let cursorY = 0
    let ringX = 0
    let ringY = 0

    const handleMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX
      cursorY = e.clientY
      setIsVisible(true)
      cursor.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const animate = () => {
      ringX += (cursorX - ringX) * 0.12
      ringY += (cursorY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
      requestAnimationFrame(animate)
    }

    // Detect hover on interactive elements
    const handleOverInteractive = () => setIsHovering(true)
    const handleLeaveInteractive = () => setIsHovering(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    const interactiveElements = document.querySelectorAll("a, button, [role='tab'], [role='button']")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleOverInteractive)
      el.addEventListener("mouseleave", handleLeaveInteractive)
    })

    requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleOverInteractive)
        el.removeEventListener("mouseleave", handleLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-primary transition-opacity duration-300 mix-blend-difference ${
          isVisible ? "opacity-100" : "opacity-0"
        } hidden lg:block`}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 rounded-full border transition-all duration-300 mix-blend-difference ${
          isHovering
            ? "scale-150 border-primary bg-primary/10"
            : "scale-100 border-primary/50"
        } ${isVisible ? "opacity-100" : "opacity-0"} hidden lg:block`}
      />
    </>
  )
}
