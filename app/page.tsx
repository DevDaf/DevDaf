import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { TechMarquee } from "@/components/tech-marquee"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Socials } from "@/components/socials"
import { Footer } from "@/components/footer"
import { GridBackground } from "@/components/grid-background"
import { CustomCursor } from "@/components/custom-cursor"
import { ParallaxText } from "@/components/parallax-text"

export default function Page() {
  return (
    <>
      <GridBackground />
      <CustomCursor />
      <Nav />
      <Socials />
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <ParallaxText text="EXPERIENCE" />
        <Experience />
        <ParallaxText text="PROJECTS" />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
