import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Calendar } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const allProjects = [
    {
      title: "E-Commerce Platform Redesign",
      summary: "Complete overhaul of checkout experience resulting in 40% conversion increase",
      year: "2024",
      tags: ["UX Design", "React", "TypeScript"],
      type: "Featured Work",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      summary: "Real-time data visualization platform for enterprise clients",
      year: "2024",
      tags: ["Data Viz", "Python", "Machine Learning"],
      type: "Current Project",
    },
    {
      title: "Mobile Banking App",
      summary: "Secure financial application serving 100k+ active users",
      year: "2023",
      tags: ["Mobile", "Security", "Fintech"],
      type: "Case Study",
    },
    {
      title: "Design System Implementation",
      summary: "Comprehensive component library and design tokens for scaling design across teams",
      year: "2023",
      tags: ["Design Systems", "React", "Storybook"],
      type: "Internal Tool",
    },
    {
      title: "Healthcare Portal Redesign",
      summary: "Patient-centered interface improving appointment booking by 60%",
      year: "2022",
      tags: ["Healthcare", "Accessibility", "Vue.js"],
      type: "Client Work",
    },
    {
      title: "Open Source Contribution",
      summary: "Major contributions to popular React animation library",
      year: "2022",
      tags: ["Open Source", "Animation", "TypeScript"],
      type: "Community",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Masthead Header */}
      <header className="border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <h1 className="font-serif text-4xl font-bold tracking-tight">Omar Rafiq</h1>
                <p className="text-muted-foreground text-sm mt-1 font-mono">Software Engineer</p>
              </Link>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground font-mono">{currentDate}</p>
              <p className="text-xs text-muted-foreground mt-1">Projects Archive</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 pt-4 border-t border-border">
            <div className="flex gap-8">
              <Link href="/projects" className="text-sm font-medium text-primary">
                Projects
              </Link>
              <Link href="/articles" className="text-sm font-medium hover:text-primary transition-colors">
                Articles
              </Link>
              <Link href="/currently" className="text-sm font-medium hover:text-primary transition-colors">
                Currently
              </Link>
              <Link href="/resume" className="text-sm font-medium hover:text-primary transition-colors">
                Resume
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="font-serif text-3xl font-bold">Project Archive</h1>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A chronological collection of selected work spanning design, development, and strategic initiatives. Each
            project represents a unique challenge and the solutions crafted to address them.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="space-y-8">
          {allProjects.map((project, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="grid md:grid-cols-4 gap-6 py-8 border-b border-border hover:bg-muted/30 transition-colors px-4 -mx-4">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </div>
                  </div>
                  <h2 className="font-serif text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-base">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="font-serif font-semibold">Omar Rafiq</p>
              <p className="text-sm text-muted-foreground">Software Engineer</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="mailto:hello@omarrafiq.dev" className="hover:text-primary transition-colors">
                Email
              </a>
              <a href="https://linkedin.com/in/omarrafiq" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/omarrafiq" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com/omarrafiq" className="hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground font-mono">
              © 2024 Omar Rafiq. All rights reserved. • Last updated {currentDate}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
