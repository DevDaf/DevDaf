"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ExternalLink, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Current Company",
    location: "Remote",
    url: "#",
    title: "Frontend Developer",
    range: "2025 - Present",
    projects: [
      {
        name: "B2B Platform",
        url: "https://www.frukthallen.se/",
      },
      {
        name: "B2C E-commerce",
        url: "https://fruktia.vercel.app/",
      },
    ],
    points: [
      "Solely responsible for building and maintaining the entire frontend codebase, handling all UI development and feature implementation independently.",
      "Developed two complete e-commerce websites, one B2C and one B2B, using modern frameworks and responsive design principles.",
      "Gained strong ownership experience by managing the full frontend workflow from design handoff to production deployment.",
      "Now looking for a collaborative team environment where I can continue to grow as a frontend developer and learn from experienced colleagues.",
    ],
    skills: ["Next.js", "React", "Tailwind CSS", "Node.js", "Shopify"],
  },
  {
    company: "Arcledi OU",
    location: "Estonia",
    url: "#",
    title: "Frontend Developer Intern",
    range: "2024 - 2025",
    points: [
      "Worked on a startup web application during a 6-month internship, contributing primarily to the frontend.",
      "Built and improved user-facing features using React, Next.js, Tailwind CSS, and Firebase.",
      "Collaborated with the founding team on interface implementation, product decisions, and feature development in a fast-paced startup environment.",
      "Although the project did not launch due to funding challenges, the experience gave me valuable hands-on experience in frontend development.",
    ],
    skills: ["Next.js", "React", "Tailwind CSS", "Firebase", "Node.js"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const active = experiences[activeTab]

  return (
    <section id="experience" className="relative px-6 py-32 md:px-12 lg:px-16 xl:px-20">
      <div className="pointer-events-none absolute top-0 left-1/2 h-32 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading number="02" title="Experience" />

        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
            <div
              role="tablist"
              aria-label="Job tabs"
              className="flex overflow-x-auto lg:flex-col lg:gap-0"
            >
              {experiences.map((exp, i) => (
                <button
                  key={exp.company}
                  role="tab"
                  aria-selected={activeTab === i}
                  onClick={() => setActiveTab(i)}
                  className={`group relative whitespace-nowrap px-5 py-4 text-left font-mono text-sm transition-all ${
                    activeTab === i
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`absolute bottom-0 left-0 h-px w-full transition-all lg:top-0 lg:bottom-auto lg:h-full lg:w-[2px] ${
                      activeTab === i ? "bg-primary neon-glow" : "bg-border"
                    }`}
                  />
                  <span className="block text-base">{exp.company}</span>
                  <span className="mt-0.5 block text-[10px] tracking-wider text-muted-foreground/50 uppercase">
                    {exp.range}
                  </span>
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              className="relative rounded-lg border border-border/30 bg-card/30 p-8 backdrop-blur-sm"
            >
              <div className="absolute -top-px left-0 h-px w-1/3 bg-gradient-to-r from-primary/50 to-transparent" />

              <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-bold text-foreground lg:text-2xl">
                  {active.title}
                </h3>
                <span className="text-lg font-bold text-primary">
                  @ {active.company}
                  {active.url !== "#" && (
                    <a
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 inline-block transition-opacity hover:opacity-80"
                    >
                      <ExternalLink className="inline h-3.5 w-3.5" />
                    </a>
                  )}
                </span>
              </div>

              <div className="mb-6 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 text-primary/50" />
                  {active.range}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-primary/50" />
                  {active.location}
                </span>
              </div>

              <ul className="space-y-4">
                {active.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground lg:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {active.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:border-primary/40 hover:bg-primary/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {active.projects && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {active.projects.map((project) => (
                    <a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/40 hover:bg-primary/10"
                    >
                      {project.name}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}