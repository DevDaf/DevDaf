import { Github, Linkedin } from "lucide-react"

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
]

export function Socials() {
  return (
    <>
      {/* Left social bar */}
      <div className="fixed bottom-0 left-6 z-30 hidden flex-col items-center gap-6 after:block after:h-24 after:w-px after:bg-primary/20 lg:left-12 xl:flex">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/50 transition-all hover:-translate-y-1 hover:text-primary"
            aria-label={link.label}
          >
            <link.icon className="h-5 w-5" />
          </a>
        ))}
      </div>

      {/* Right email bar */}
      <div className="fixed right-6 bottom-0 z-30 hidden flex-col items-center gap-6 after:block after:h-24 after:w-px after:bg-primary/20 lg:right-12 xl:flex">
        <a
          href="mailto:dafiinaa@hotmail.com"
          className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/50 transition-all hover:-translate-y-1 hover:text-primary"
          style={{ writingMode: "vertical-rl" }}
        >
          Dafiinaa@hotmail.com
        </a>
      </div>
    </>
  )
}
