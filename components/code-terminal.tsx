"use client"

import { useEffect, useState } from "react"

const codeLines = [
  { text: "const developer = {", color: "text-foreground" },
  { text: '  name: "Dafina Gashi",', color: "text-muted-foreground" },
  { text: '  role: "Frontend Developer",', color: "text-muted-foreground" },
  { text: "  skills: [", color: "text-foreground" },
  { text: '    "Next.js", "React",', color: "text-primary" },
  { text: '    "Tailwind CSS", "Node.js",', color: "text-primary" },
  { text: '    "TypeScript", "Firebase",', color: "text-primary" },
  { text: '    "MongoDB", "Shopify"', color: "text-primary" },
  { text: "  ],", color: "text-foreground" },
  { text: "  passion: () => {", color: "text-foreground" },
  { text: '    return "Building cool stuff";', color: "text-muted-foreground" },
  { text: "  },", color: "text-foreground" },
  { text: '  status: "Open to work"', color: "text-primary" },
  { text: "};", color: "text-foreground" },
]

export function CodeTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 150)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="group relative overflow-hidden rounded-lg border border-primary/20 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:border-primary/40">
      {/* Glow behind */}
      <div className="absolute -inset-1 rounded-lg bg-primary/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Terminal header */}
      <div className="relative flex items-center gap-2 border-b border-primary/10 bg-card/80 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-primary/40" />
        <div className="h-3 w-3 rounded-full bg-primary/20" />
        <div className="h-3 w-3 rounded-full bg-primary/10" />
        <span className="ml-3 font-mono text-[10px] tracking-wider text-muted-foreground/50 uppercase">
          dafina.config.ts
        </span>
      </div>

      {/* Code content */}
      <div className="relative p-5">
        <pre className="font-mono text-xs leading-6 sm:text-sm sm:leading-7">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className={`flex transition-all duration-300 ${
                i < visibleLines
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="mr-4 inline-block w-5 select-none text-right text-muted-foreground/20">
                {i + 1}
              </span>
              <span className={line.color}>{line.text}</span>
            </div>
          ))}
          {/* Blinking cursor at end */}
          {visibleLines >= codeLines.length && (
            <div className="flex">
              <span className="mr-4 inline-block w-5 select-none text-right text-muted-foreground/20">
                {codeLines.length + 1}
              </span>
              <span className="typing-cursor text-primary" />
            </div>
          )}
        </pre>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 right-0 h-8 w-8 border-t border-r border-primary/0 transition-all duration-500 group-hover:border-primary/30" />
      <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-primary/0 transition-all duration-500 group-hover:border-primary/30" />
    </div>
  )
}
