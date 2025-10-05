import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Calendar, Clock } from "lucide-react"

export default function Home() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const featuredProjects = [
    {
      title: "E-Commerce Platform Redesign",
      summary: "Complete overhaul of checkout experience resulting in 40% conversion increase",
      year: "2024",
      status: "Completed",
      tags: ["UX Design", "React", "TypeScript"],
      type: "Featured Work",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      summary: "Real-time data visualization platform for enterprise clients",
      year: "2024",
      status: "In Progress",
      tags: ["Data Viz", "Python", "Machine Learning"],
      type: "Current Project",
    },
    {
      title: "Mobile Banking App",
      summary: "Secure financial application serving 100k+ active users",
      year: "2023",
      status: "Completed",
      tags: ["Mobile", "Security", "Fintech"],
      type: "Case Study",
    },
  ]

  const recentArticles = [
    {
      title: "The Future of Design Systems",
      excerpt: "How component libraries are evolving to meet modern development needs...",
      date: "December 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Building Accessible Web Applications",
      excerpt: "A comprehensive guide to implementing WCAG guidelines in React projects...",
      date: "December 8, 2024",
      readTime: "8 min read",
    },
    {
      title: "Performance Optimization Strategies",
      excerpt: "Techniques for improving Core Web Vitals and user experience metrics...",
      date: "November 28, 2024",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Masthead Header */}
      <header className="border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight">Omar Rafiq</h1>
              <p className="text-muted-foreground text-sm mt-1 font-mono">Software Engineer</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground font-mono">{currentDate}</p>
              <p className="text-xs text-muted-foreground mt-1">Portfolio Edition</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 pt-4 border-t border-border">
            <div className="flex gap-8">
              <a href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </a>
              <a href="/articles" className="text-sm font-medium hover:text-primary transition-colors">
                Articles
              </a>
              <a href="/currently" className="text-sm font-medium hover:text-primary transition-colors">
                Currently
              </a>
              <a href="/resume" className="text-sm font-medium hover:text-primary transition-colors">
                Resume
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl font-bold mb-4 text-balance">
                Crafting Digital Experiences That Drive Results
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a digital designer and full-stack developer specializing in user-centered design and scalable web
                applications. With over 6 years of experience, I help companies transform their digital presence through
                thoughtful design and robust engineering.
              </p>
              <Button variant="outline" className="group bg-transparent">
                View Latest Work
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2">Currently</h3>
                  <p className="text-sm text-muted-foreground">
                    Senior Product Designer at TechCorp, building the future of enterprise software.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2">Available</h3>
                  <p className="text-sm text-muted-foreground">Open for freelance projects starting Q1 2025.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section id="work" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-2xl font-bold">Featured Work</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="grid md:grid-cols-4 gap-6 py-6 border-b border-border hover:bg-muted/30 transition-colors px-4 -mx-4">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
                      <Badge variant={project.status === "Completed" ? "default" : "outline"} className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-2xl font-bold">Recent Articles</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentArticles.map((article, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="p-6 border border-border hover:border-primary/20 hover:bg-muted/20 transition-all">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-mono">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                    <span>•</span>
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-primary group-hover:gap-2 transition-all">
                    Continue reading
                    <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-2xl font-bold">About</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe great design happens at the intersection of user needs and business goals. My approach
                combines strategic thinking with hands-on execution, ensuring every project delivers both beautiful
                interfaces and measurable results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not designing or coding, you'll find me exploring new technologies, contributing to open source
                projects, or sharing insights through writing and speaking.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Expertise</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium">Design</h4>
                  <p className="text-xs text-muted-foreground">
                    User Experience, Interface Design, Design Systems, Prototyping
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Development</h4>
                  <p className="text-xs text-muted-foreground">
                    React, TypeScript, Next.js, Node.js, Python, PostgreSQL
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Strategy</h4>
                  <p className="text-xs text-muted-foreground">
                    Product Strategy, User Research, Performance Optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="font-serif font-semibold">Alex Morgan</p>
              <p className="text-sm text-muted-foreground">Digital Designer & Developer</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="mailto:hello@alexmorgan.dev" className="hover:text-primary transition-colors">
                Email
              </a>
              <a href="https://linkedin.com/in/alexmorgan" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/alexmorgan" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com/alexmorgan" className="hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground font-mono">
              © 2024 Alex Morgan. All rights reserved. • Last updated {currentDate}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
