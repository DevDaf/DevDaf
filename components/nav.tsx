"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-primary/10 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between px-6 py-5 md:px-12 lg:px-16 xl:px-20">
        <a
          href="#hero"
          className="group relative text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          aria-label="Home"
        >
          <span>D</span>
          <span className="text-primary neon-flicker">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-2 text-sm font-medium tracking-wide text-foreground/60 transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}

          {/* RESUME BUTTON */}
          <li className="ml-4">
            <a
              href="/dafinacv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border inline-block border border-primary px-6 py-2 text-sm font-bold tracking-widest text-primary transition-all hover:bg-primary hover:text-background"
            >
              RESUME
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="relative z-50 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* MOBILE RESUME */}
          <li className="mt-4">
            <a
              href="/dafinacv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="neon-border border border-primary px-8 py-3 text-sm font-bold tracking-widest text-primary transition-all hover:bg-primary hover:text-background"
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}