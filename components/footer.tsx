import { Github, Linkedin } from "lucide-react"

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-primary/5 px-6 py-10 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        {/* Mobile social links */}
        <div className="mb-4 flex items-center justify-center gap-6 xl:hidden">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/40 transition-colors hover:text-primary"
              aria-label={link.label}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-center font-mono text-[10px] tracking-widest text-muted-foreground/30 uppercase">
          {"Designed & Built by Dafina Gashi"}
        </p>
      </div>
    </footer>
  )
}
