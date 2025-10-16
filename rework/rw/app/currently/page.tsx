import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code, Coffee, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function CurrentlyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const currentActivities = [
    {
      category: "Learning",
      icon: BookOpen,
      items: [
        "Advanced React Server Components patterns",
        "WebAssembly for performance-critical applications",
        "Design system architecture at scale",
      ],
    },
    {
      category: "Building",
      icon: Code,
      items: [
        "Personal design system with Tailwind CSS",
        "Open source component library",
        "Performance monitoring dashboard",
      ],
    },
    {
      category: "Exploring",
      icon: Lightbulb,
      items: [
        "AI-assisted design workflows",
        "Micro-interactions and animation libraries",
        "Sustainable web development practices",
      ],
    },
    {
      category: "Reading",
      icon: Coffee,
      items: [
        '"Atomic Habits" by James Clear',
        '"The Design of Everyday Things" (re-read)',
        "Various articles on system design",
      ],
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
              <p className="text-xs text-muted-foreground mt-1">Current Focus</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 pt-4 border-t border-border">
            <div className="flex gap-8">
              <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/articles" className="text-sm font-medium hover:text-primary transition-colors">
                Articles
              </Link>
              <Link href="/currently" className="text-sm font-medium text-primary">
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
            <h1 className="font-serif text-3xl font-bold">Currently</h1>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
            A living document of what I'm focused on right now. Updated regularly to reflect my current interests,
            learning goals, and the projects that have my attention.
          </p>
          <Badge variant="outline" className="text-xs font-mono">
            Last updated: {currentDate}
          </Badge>
        </section>

        {/* Current Status */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-3">Professional</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Senior Product Designer at TechCorp, leading the design system initiative and working on
                  next-generation enterprise software interfaces.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Selective about new commitments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-3">Personal</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Balancing deep work with creative exploration. Currently fascinated by the intersection of AI and
                  design, and how we can build more intuitive interfaces.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Writing more consistently</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Contributing to open source</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Activities */}
        <section className="space-y-8">
          {currentActivities.map((activity, index) => (
            <div key={index} className="border-b border-border pb-8 last:border-b-0">
              <div className="flex items-center gap-3 mb-6">
                <activity.icon className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-xl font-semibold">{activity.category}</h2>
                <div className="h-px bg-border flex-1"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {activity.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="p-4 bg-muted/30 border border-border">
                    <p className="text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Recent Updates */}
        <section className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-2xl font-bold">Recent Updates</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-xs text-muted-foreground font-mono w-20 flex-shrink-0 pt-1">Dec 2024</div>
              <div>
                <p className="text-sm leading-relaxed">
                  Started exploring WebAssembly for performance-critical web applications. The potential for near-native
                  performance in the browser is fascinating.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-xs text-muted-foreground font-mono w-20 flex-shrink-0 pt-1">Nov 2024</div>
              <div>
                <p className="text-sm leading-relaxed">
                  Launched the new design system at work. Seeing 40% faster development cycles and much more consistent
                  UI across products.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-xs text-muted-foreground font-mono w-20 flex-shrink-0 pt-1">Oct 2024</div>
              <div>
                <p className="text-sm leading-relaxed">
                  Published my first open source component library. Small but growing community of contributors and
                  users.
                </p>
              </div>
            </div>
          </div>
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
