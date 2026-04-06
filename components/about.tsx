"use client"

import React from "react"

import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"

const skills = [
  { name: "Next.js", level: 90 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 92 },
  { name: "TypeScript", level: 78 },
  { name: "Firebase", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Shopify", level: 72 },
]

const tools = [
  "Git", "VS Code", "Figma", "Vercel", "GitHub", "npm",
  "Chrome DevTools", "Postman",
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-12 lg:px-16 xl:px-20">
      <div className="pointer-events-none absolute top-20 right-10 h-40 w-40 rounded-full border border-primary/5 animate-float" />
      <div className="pointer-events-none absolute bottom-20 left-10 h-24 w-24 rounded-full border border-primary/5 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="mx-auto max-w-7xl">
        <SectionHeading number="01" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <ScrollReveal delay={100}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a <span className="font-semibold text-primary">frontend developer</span> focused on building modern, high-quality user interfaces. I love crafting <span className="font-semibold text-primary">pixel-perfect interfaces</span> and creating digital products that are intuitive, fast, and enjoyable to use.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With over <span className="font-medium text-foreground">1+ year of professional experience</span>, I've worked across <span className="font-medium text-foreground">startup environments</span> and <span className="font-medium text-foreground">e-commerce projects</span>. I care deeply about writing clean, maintainable code and continuously improving my skills.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm currently seeking a frontend developer position where I can grow, contribute to a collaborative team, and take on challenges that push me forward.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="mt-8">
                <h4 className="mb-4 font-mono text-xs tracking-wider text-primary/70 uppercase">
                  Tools I use daily
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-border/50 bg-card/50 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-5">
            <ScrollReveal delay={100}>
              <h4 className="mb-6 font-mono text-xs tracking-wider text-primary/70 uppercase">
                Technical skills
              </h4>
            </ScrollReveal>

            {skills.map((skill, i) => (
              <ScrollReveal key={skill.name} delay={150 + i * 75}>
                <div className="group">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-sm tracking-wider text-foreground uppercase">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-primary/70">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                      style={{
                        "--skill-level": `${skill.level}%`,
                        width: `${skill.level}%`,
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}