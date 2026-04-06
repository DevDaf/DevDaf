import { ScrollReveal } from "@/components/scroll-reveal"

interface SectionHeadingProps {
  number: string
  title: string
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm font-medium text-primary">
          {number}
        </span>
        <h2 className="text-3xl font-black tracking-tight text-foreground uppercase sm:text-4xl">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
      </div>
    </ScrollReveal>
  )
}
