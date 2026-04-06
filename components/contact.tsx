"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Mail, ArrowUpRight, MapPin, Briefcase } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 md:px-12 lg:px-16 xl:px-20">
      {/* Background decorative text */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
        <span className="font-mono text-[120px] font-black leading-none tracking-tighter text-primary/[0.02] sm:text-[180px] lg:text-[240px]">
          HELLO
        </span>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: CTA */}
          <div>
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs tracking-wider text-primary uppercase">
                {"04 / What's Next"}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mb-6 text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {"Let's "}
                <span className="gradient-text neon-text">talk.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {"I'm actively looking for new opportunities where I can grow as a developer and contribute to a great team. Whether you have a job opening, a project idea, or just want to say hi -- my inbox is always open."}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <MagneticButton>
                <a
                  href="mailto:dafiinaa@hotmail.com"
                  className="neon-border group relative inline-flex items-center gap-3 overflow-hidden border border-primary bg-primary/5 px-10 py-5 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-background"
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <Mail className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">Say Hello</span>
                  <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </MagneticButton>
            </ScrollReveal>
          </div>

          {/* Right: Info cards */}
          <div className="space-y-4">
            <ScrollReveal delay={200}>
              <div className="glow-pulse-hover rounded-lg border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm font-bold tracking-wider text-foreground uppercase">
                      Open to Work
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Looking for a frontend or full-stack developer role in a collaborative team where I can keep growing.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="glow-pulse-hover rounded-lg border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm font-bold tracking-wider text-foreground uppercase">
                      Location
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Open to remote opportunities and relocation. Flexible with time zones and working arrangements.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="glow-pulse-hover rounded-lg border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm font-bold tracking-wider text-foreground uppercase">
                      Email
                    </h4>
                    <a
                      href="mailto:dafiinaa@hotmail.com"
                      className="mt-1 block font-mono text-sm text-primary transition-colors hover:text-primary/80"
                    >
                      Dafiinaa@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
