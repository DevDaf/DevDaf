"use client"

import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ExternalLink, Folder, ArrowUpRight, Lock, ShieldAlert } from "lucide-react"

const featuredProjects = [
  {
    title: "B2C E-Commerce Store",
    description:
      "A full-featured business-to-consumer e-commerce website built with a modern tech stack. Designed for an optimal shopping experience with responsive layouts, product filtering, and seamless checkout flow.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    external: "#",
    hasLiveLink: true,
    codePrivate: true,
    classified: false,
  },
  {
    title: "B2B E-Commerce Platform",
    description:
      "A business-to-business e-commerce platform tailored for wholesale and bulk ordering. Features include custom pricing tiers, order management, and a professional storefront designed for business clients.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    external: "#",
    hasLiveLink: true,
    codePrivate: true,
    classified: false,
  },
  {
    title: "Startup App — Arcledi OU",
    description:
      "A full-stack web application built during my 6-month internship at Arcledi OU. Developed both frontend and backend from scratch in a fast-paced startup environment. The project didn\u2019t launch due to funding challenges, but the experience was invaluable.",
    tech: ["Next.js", "React", "Node.js", "Firebase", "Tailwind CSS"],
    external: null,
    hasLiveLink: false,
    codePrivate: true,
    classified: true,
  },
]

const portfolioProjects = [
  {
    title: "Portfolio Website",
    description:
      "This very portfolio you're looking at! Built to showcase my work with cool visual effects and a neon-punk aesthetic.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    external: null,
  },
  {
    title: "Coming Soon",
    description:
      "Currently building more projects to expand my portfolio and sharpen my skills across different domains.",
    tech: ["React", "Firebase", "MongoDB"],
    external: null,
  },
  {
    title: "Open to Ideas",
    description:
      "Always looking for interesting side projects and collaborations. Have an idea? Let's talk about building it together.",
    tech: ["Full-Stack", "E-Commerce", "Web Apps"],
    external: null,
  },
]

function ClassifiedOverlay() {
  return (
    <div className="absolute inset-0 z-20 overflow-hidden rounded">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Diagonal crime tape strips */}
      <div
        className="absolute -left-10 top-[20%] w-[140%] rotate-[-12deg] border-y-2 border-primary bg-primary/10 py-2"
      >
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="font-mono text-xs font-black tracking-[0.3em] text-primary uppercase"
            >
              CLASSIFIED
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute -left-10 top-[55%] w-[140%] rotate-[8deg] border-y-2 border-primary bg-primary/10 py-2"
      >
        <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="font-mono text-xs font-black tracking-[0.3em] text-primary uppercase"
            >
              NDA PROTECTED
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute -left-10 top-[80%] w-[140%] rotate-[-5deg] border-y border-primary/50 bg-primary/5 py-1.5"
      >
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="font-mono text-[10px] font-bold tracking-[0.25em] text-primary/60 uppercase"
            >
              DO NOT DISTRIBUTE
            </span>
          ))}
        </div>
      </div>

      {/* Center lock icon + message */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
        <div className="relative">
          <div className="absolute -inset-6 animate-pulse rounded-full bg-primary/20" />
          <div className="absolute -inset-4 rounded-full border border-primary/30" />
          <div className="relative rounded-full border-2 border-primary bg-primary/10 p-4 shadow-[0_0_30px_rgba(255,45,149,0.4)]">
            <ShieldAlert className="h-8 w-8 text-primary drop-shadow-[0_0_8px_rgba(255,45,149,0.8)]" />
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-primary/30 bg-black/80 px-6 py-4 text-center shadow-[0_0_20px_rgba(255,45,149,0.15)]">
          <p className="font-mono text-lg font-black tracking-[0.25em] text-primary uppercase drop-shadow-[0_0_10px_rgba(255,45,149,0.6)]">
            Under NDA
          </p>
          <p className="mt-2 max-w-[300px] font-mono text-sm leading-relaxed text-foreground/80">
            This project is protected by a non-disclosure agreement and cannot be publicly displayed.
          </p>
        </div>
      </div>

      {/* Corner markers */}
      <div className="absolute top-3 left-3 h-5 w-5 border-t-2 border-l-2 border-primary/60" />
      <div className="absolute top-3 right-3 h-5 w-5 border-t-2 border-r-2 border-primary/60" />
      <div className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-primary/60" />
      <div className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-primary/60" />
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading number="03" title="Projects" />

        {/* Featured projects */}
        <div className="space-y-32">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.title}>
              <div className="group relative">
                {/* Large project number */}
                <span className="pointer-events-none absolute -top-8 -left-4 font-mono text-[120px] font-black leading-none text-primary/5 md:-top-12 md:-left-8 md:text-[180px]">
                  0{i + 1}
                </span>

                <div
                  className={`relative grid items-center gap-8 md:grid-cols-12 ${
                    i % 2 !== 0 ? "md:text-right" : ""
                  }`}
                >
                  {/* Project image / preview */}
                  <div
                    className={`relative overflow-hidden rounded border border-primary/10 md:col-span-7 ${
                      i % 2 !== 0 ? "md:order-2" : ""
                    } ${!project.classified ? "glow-pulse-hover" : ""}`}
                  >
                    <div className="aspect-video w-full bg-gradient-to-br from-muted to-background transition-all duration-500 group-hover:scale-[1.02]">
                      {/* Decorative grid pattern inside */}
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,45,149,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,149,0.05) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                      {!project.classified && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex flex-col items-center gap-2">
                            <span className="font-mono text-xs tracking-widest text-primary/40 uppercase">
                              {project.hasLiveLink
                                ? "Live Website"
                                : "Private Project"}
                            </span>
                            {project.codePrivate && (
                              <div className="flex items-center gap-1.5 text-muted-foreground/30">
                                <Lock className="h-3 w-3" />
                                <span className="font-mono text-[10px] tracking-wider uppercase">
                                  Code is private
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    {!project.classified && (
                      <div className="absolute inset-0 bg-primary/5 transition-opacity group-hover:opacity-0" />
                    )}
                    {/* Neon border on hover */}
                    {!project.classified && (
                      <div className="absolute inset-0 rounded border border-primary/0 transition-all duration-500 group-hover:border-primary/30" />
                    )}

                    {/* Classified crime-tape overlay */}
                    {project.classified && <ClassifiedOverlay />}
                  </div>

                  {/* Project content */}
                  <div
                    className={`relative z-10 md:col-span-6 ${
                      i % 2 !== 0
                        ? "md:col-start-1 md:row-start-1"
                        : "md:col-start-7"
                    }`}
                  >
                    <p className="mb-2 font-mono text-xs tracking-wider text-primary uppercase">
                      {project.classified ? "Classified Project" : "Featured Project"}
                    </p>
                    <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                      {project.external ? (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          {project.title}
                          <ArrowUpRight className="h-5 w-5 opacity-0 transition-all group-hover:opacity-100" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2">
                          {project.title}
                          {project.classified && (
                            <ShieldAlert className="h-5 w-5 text-primary/60" />
                          )}
                        </span>
                      )}
                    </h3>
                    <div className="rounded border border-border/50 bg-card/80 p-6 shadow-2xl backdrop-blur-sm">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <ul
                      className={`mt-4 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground ${
                        i % 2 !== 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {project.tech.map((t) => (
                        <li key={t} className="text-primary/70">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`mt-4 flex items-center gap-4 ${
                        i % 2 !== 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {project.codePrivate && (
                        <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground/50">
                          <Lock className="h-3.5 w-3.5" />
                          Private repo
                        </span>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other noteworthy / upcoming projects */}
        <div className="mt-32">
          <ScrollReveal>
            <h3 className="mb-2 text-center text-2xl font-bold text-foreground">
              More Projects
            </h3>
            <p className="mb-12 text-center font-mono text-xs tracking-wider text-primary/60 uppercase">
              building my portfolio
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 100}>
                <div className="glow-pulse-hover group relative flex h-full flex-col overflow-hidden rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/80">
                  {/* Top glow line on hover */}
                  <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-primary/0 transition-all duration-500 group-hover:w-full" />

                  <div className="mb-6 flex items-center justify-between">
                    <Folder className="h-8 w-8 text-primary/50 transition-colors group-hover:text-primary" />
                    <div className="flex gap-3">
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h4>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-3 font-mono text-[10px] tracking-wider text-muted-foreground/60 uppercase">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
