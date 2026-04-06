"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"
import { HackerScreen } from "@/components/hacker-screen"

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI Developer",
  "Web Developer",
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      )
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6 py-24 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="pointer-events-none absolute top-20 left-6 h-16 w-16 border-l border-t border-primary/20 md:left-12" />
      <div className="pointer-events-none absolute top-20 right-6 h-16 w-16 border-r border-t border-primary/20 md:right-12" />
      <div className="pointer-events-none absolute bottom-20 left-6 h-16 w-16 border-l border-b border-primary/20 md:left-12" />
      <div className="pointer-events-none absolute right-6 bottom-20 h-16 w-16 border-r border-b border-primary/20 md:right-12" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-3 opacity-0 animate-fade-in-up stagger-1">
            <div className="h-px w-8 bg-primary" />
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Welcome to my world
            </p>
          </div>

          <h1 className="mb-2 text-5xl font-black tracking-tight text-foreground opacity-0 animate-fade-in-up stagger-2 sm:text-6xl lg:text-7xl xl:text-8xl">
            Dafina
          </h1>
          <h1 className="mb-4 text-5xl font-black tracking-tight text-primary opacity-0 animate-fade-in-up stagger-2 sm:text-6xl lg:text-7xl xl:text-8xl">
            Gashi
          </h1>

          <div className="mb-6 flex items-center gap-2 opacity-0 animate-fade-in-up stagger-3">
            <div className="h-px w-4 bg-primary/50" />
            <span className="text-lg text-muted-foreground sm:text-xl">
              {"I'm a "}
            </span>
            <span className="typing-cursor text-lg font-semibold text-primary sm:text-xl">
              {displayed}
            </span>
          </div>

          <p className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground opacity-0 animate-fade-in-up stagger-4">
            I build modern, high-performance frontend experiences with a strong
            focus on clean code, responsive design, and pixel-perfect user
            interfaces. I'm passionate about creating products that feel both
            intuitive and polished.
          </p>

          <div className="mb-10 flex items-center gap-8 opacity-0 animate-fade-in-up stagger-4">
            {[
              { value: "3+", label: "Projects" },
              { value: "1+", label: "Years Exp." },
              { value: "2", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-black text-primary drop-shadow-[0_0_12px_rgba(255,45,149,0.5)] sm:text-3xl">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up stagger-5">
            <MagneticButton>
              <a
                href="#projects"
                className="neon-border group relative inline-flex items-center gap-3 border border-primary bg-primary/5 px-7 py-3.5 font-mono text-sm font-medium text-primary transition-all hover:bg-primary hover:text-background"
              >
                <span className="relative z-10">View my work</span>
                <ArrowDown className="relative z-10 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Get in touch
                <span className="inline-block h-px w-6 bg-muted-foreground transition-all group-hover:w-10 group-hover:bg-primary" />
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="relative hidden opacity-0 animate-fade-in-up stagger-3 lg:block">
          <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-3xl" />
          <div className="relative h-[480px] xl:h-[520px]">
            <HackerScreen />
          </div>
          <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded border border-primary/20 bg-background/90 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs text-foreground/80">
              Open to frontend roles
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up stagger-6">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Scroll
          </span>
          <div className="h-12 w-px animate-pulse bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}