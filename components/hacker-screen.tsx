"use client"

import { useEffect, useRef, useState } from "react"

const HACKER_LINES = [
  "$ initializing system...",
  "$ loading neural_network.exe",
  "$ [OK] core modules loaded",
  "$ scanning ports... 443 OPEN",
  "$ accessing mainframe...",
  "$ decrypting payload ████████",
  "$ [OK] firewall bypassed",
  "$ injecting CSS into DOM...",
  "$ npm run build --production",
  "$ deploying to vercel...",
  "$ [SUCCESS] build complete",
  "$ establishing secure tunnel",
  "$ ping dafina.dev -> 12ms",
  "$ downloading assets...",
  "$ [OK] all systems nominal",
  "$ running diagnostics...",
  "$ memory: 98.2% optimal",
  "$ processing request...",
  "$ [OK] connection secured",
  "$ welcome, dafina.",
]

export function HackerScreen() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currentLine >= HACKER_LINES.length) {
      // Loop back
      const timeout = setTimeout(() => {
        setLines([])
        setCurrentLine(0)
        setCurrentChar(0)
      }, 3000)
      return () => clearTimeout(timeout)
    }

    const line = HACKER_LINES[currentLine]

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setLines((prev) => {
          const updated = [...prev]
          updated[currentLine] = line.slice(0, currentChar + 1)
          return updated
        })
        setCurrentChar((c) => c + 1)
      }, 15 + Math.random() * 25)
      return () => clearTimeout(timeout)
    }
    // Line complete, move to next
    const timeout = setTimeout(() => {
      setCurrentLine((l) => l + 1)
      setCurrentChar(0)
      setLines((prev) => [...prev, ""])
    }, 100 + Math.random() * 200)
    return () => clearTimeout(timeout)
  }, [currentLine, currentChar])

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [lines])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-primary/20">
      {/* Your image behind the screen - replace src with your actual photo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/profile.jpg')] bg-cover bg-center bg-no-repeat opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Scanline effect on the screen */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(330 100% 60% / 0.1) 2px, hsl(330 100% 60% / 0.1) 4px)",
        }}
      />

      {/* Terminal header */}
      <div className="relative z-20 flex items-center gap-2 border-b border-primary/10 bg-background/60 px-4 py-2.5 backdrop-blur-sm">
        <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-primary/30" />
        <div className="h-2.5 w-2.5 rounded-full bg-primary/15" />
        <span className="ml-3 font-mono text-[10px] tracking-wider text-primary/50 uppercase">
          dafina@dev ~ system
        </span>
      </div>

      {/* Terminal content */}
      <div
        ref={containerRef}
        className="relative z-20 h-[calc(100%-36px)] overflow-hidden px-4 py-3 font-mono text-xs leading-relaxed"
      >
        {lines.map((line, i) => (
          <div
            key={`line-${i}-${line.length}`}
            className={`${
              line.includes("[OK]") || line.includes("[SUCCESS]")
                ? "text-primary"
                : line.includes("$")
                  ? "text-foreground/70"
                  : "text-muted-foreground"
            }`}
          >
            {line}
            {i === currentLine && (
              <span className="typing-cursor ml-0.5 inline-block h-3.5 w-1.5 bg-primary" />
            )}
          </div>
        ))}
      </div>

      {/* Glow edges */}
      <div className="pointer-events-none absolute inset-0 z-30 rounded-lg shadow-[inset_0_0_30px_rgba(255,45,149,0.05)]" />
    </div>
  )
}
