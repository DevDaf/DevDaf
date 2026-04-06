export function TechMarquee() {
  const techs = [
    "NEXT.JS", "REACT", "NODE.JS", "TAILWIND CSS", "TYPESCRIPT",
    "FIREBASE", "MONGODB", "SHOPIFY", "HTML", "CSS", "JAVASCRIPT", "GIT",
  ]

  const items = [...techs, ...techs]

  return (
    <div className="relative overflow-hidden border-y border-primary/10 bg-primary/[0.02] py-5">
      {/* Fade edges */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mx-8 font-mono text-sm tracking-[0.3em] text-muted-foreground/30 uppercase transition-colors hover:text-primary/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
