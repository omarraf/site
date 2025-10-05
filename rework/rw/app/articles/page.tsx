import { Calendar, Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ArticlesPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const allArticles = [
    {
      title: "The Future of Design Systems",
      excerpt:
        "How component libraries are evolving to meet modern development needs and the challenges of scaling design across large organizations.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Design",
    },
    {
      title: "Building Accessible Web Applications",
      excerpt:
        "A comprehensive guide to implementing WCAG guidelines in React projects, from semantic HTML to screen reader optimization.",
      date: "December 8, 2024",
      readTime: "8 min read",
      category: "Development",
    },
    {
      title: "Performance Optimization Strategies",
      excerpt:
        "Techniques for improving Core Web Vitals and user experience metrics through code splitting, lazy loading, and caching strategies.",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Performance",
    },
    {
      title: "The Art of Code Reviews",
      excerpt:
        "Best practices for conducting meaningful code reviews that improve code quality while fostering team collaboration and learning.",
      date: "November 15, 2024",
      readTime: "7 min read",
      category: "Process",
    },
    {
      title: "Modern CSS Layout Techniques",
      excerpt:
        "Exploring CSS Grid, Flexbox, and Container Queries to create responsive layouts that adapt to any screen size or content.",
      date: "October 30, 2024",
      readTime: "9 min read",
      category: "CSS",
    },
    {
      title: "TypeScript Best Practices",
      excerpt:
        "Advanced TypeScript patterns and techniques for building type-safe applications that scale with your team and codebase.",
      date: "October 12, 2024",
      readTime: "10 min read",
      category: "TypeScript",
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
              <p className="text-xs text-muted-foreground mt-1">Articles Archive</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 pt-4 border-t border-border">
            <div className="flex gap-8">
              <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/articles" className="text-sm font-medium text-primary">
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
            <h1 className="font-serif text-3xl font-bold">Articles & Insights</h1>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Thoughts on design, development, and the intersection of technology and user experience. A collection of
            insights gained through building products and solving complex problems.
          </p>
        </section>

        {/* Articles Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {allArticles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="p-8 border border-border hover:border-primary/20 hover:bg-muted/20 transition-all h-full">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 font-mono">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                  <span>•</span>
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                  <span>•</span>
                  <span className="bg-muted px-2 py-0.5 rounded text-xs">{article.category}</span>
                </div>
                <h2 className="font-serif text-xl font-semibold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{article.excerpt}</p>
                <div className="flex items-center text-sm text-primary group-hover:gap-2 transition-all">
                  Continue reading
                  <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
