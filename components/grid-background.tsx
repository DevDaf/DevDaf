"use client"

import { useEffect, useRef } from "react"

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      baseOpacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const initParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 20000)
      for (let i = 0; i < count; i++) {
        const baseOpacity = Math.random() * 0.3 + 0.1
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.8 + 0.5,
          opacity: baseOpacity,
          baseOpacity,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x: mx, y: my } = mouseRef.current

      // Draw grid
      const gridSize = 60
      ctx.lineWidth = 0.5

      for (let x = 0; x < canvas.width; x += gridSize) {
        const distToMouse = Math.abs(x - mx)
        const gridGlow = Math.max(0, 1 - distToMouse / 300)
        ctx.strokeStyle = `rgba(255, 45, 149, ${0.02 + gridGlow * 0.06})`
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        const distToMouse = Math.abs(y - my)
        const gridGlow = Math.max(0, 1 - distToMouse / 300)
        ctx.strokeStyle = `rgba(255, 45, 149, ${0.02 + gridGlow * 0.06})`
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Mouse spotlight glow
      if (mx > 0 && my > 0) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 250)
        gradient.addColorStop(0, "rgba(255, 45, 149, 0.06)")
        gradient.addColorStop(0.5, "rgba(255, 45, 149, 0.02)")
        gradient.addColorStop(1, "rgba(255, 45, 149, 0)")
        ctx.fillStyle = gradient
        ctx.fillRect(mx - 250, my - 250, 500, 500)
      }

      // Draw and update particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Particles glow brighter near mouse
        const dx = p.x - mx
        const dy = p.y - my
        const distToMouse = Math.sqrt(dx * dx + dy * dy)
        const mouseFactor = Math.max(0, 1 - distToMouse / 200)
        p.opacity = p.baseOpacity + mouseFactor * 0.5

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size + mouseFactor * 1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 45, 149, ${p.opacity})`
        ctx.fill()
      }

      // Draw connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255, 45, 149, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    window.addEventListener("resize", () => {
      resize()
      initParticles()
    })
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
