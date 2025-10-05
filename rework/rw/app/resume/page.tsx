import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Download, MapPin, Mail, Globe } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const experience = [
    {
      title: "Senior Product Designer",
      company: "TechCorp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading design system initiatives and product strategy for enterprise software serving 50k+ users.",
      achievements: [
        "Designed and implemented company-wide design system, reducing development time by 40%",
        "Led UX research initiatives resulting in 25% increase in user satisfaction scores",
        "Mentored junior designers and established design review processes",
      ],
    },
    {
      title: "Product Designer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description: "Full-stack design role covering user research, interface design, and front-end development.",
      achievements: [
        "Redesigned core product experience, improving conversion rates by 35%",
        "Built and maintained React component library used across 3 products",
        "Conducted user interviews and usability testing for product validation",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2018 - 2020",
      description:
        "Client-focused design work across various industries including healthcare, fintech, and e-commerce.",
      achievements: [
        "Delivered 20+ client projects with 95% satisfaction rate",
        "Specialized in accessibility compliance and WCAG guidelines",
        "Collaborated with development teams to ensure design fidelity",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2014 - 2018",
      details: "Focus on Human-Computer Interaction and Software Engineering",
    },
  ]

  const skills = {
    Design: ["User Experience Design", "Interface Design", "Design Systems", "Prototyping", "User Research"],
    Development: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Python"],
    Tools: ["Figma", "Adobe Creative Suite", "Framer", "Storybook", "Git", "Linear"],
    "Soft Skills": ["Team Leadership", "Strategic Thinking", "Cross-functional Collaboration", "Mentoring"],
  }

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
              <p className="text-xs text-muted-foreground mt-1">Professional Resume</p>
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
              <Link href="/currently" className="text-sm font-medium hover:text-primary transition-colors">
                Currently
              </Link>
              <Link href="/resume" className="text-sm font-medium text-primary">
                Resume
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h1 className="font-serif text-3xl font-bold">Professional Resume</h1>
              <div className="h-px bg-border flex-1"></div>
            </div>
            <button className="flex items-center gap-2 text-sm bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a href="mailto:hello@omarrafiq.dev" className="hover:text-primary transition-colors">
                hello@omarrafiq.dev
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <a href="https://omarrafiq.dev" className="hover:text-primary transition-colors">
                omarrafiq.dev
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Available for:</span>
              <Badge variant="secondary" className="text-xs">
                Freelance
              </Badge>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-serif text-2xl font-bold">Professional Summary</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
            Senior Product Designer and Full-Stack Developer with 6+ years of experience creating user-centered digital
            experiences. Proven track record of leading design system initiatives, improving user satisfaction metrics,
            and bridging the gap between design and development teams. Passionate about accessible design and scalable
            solutions.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-2xl font-bold">Professional Experience</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-b border-border pb-8 last:border-b-0">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="font-serif text-xl font-semibold">{job.title}</h3>
                      <span className="text-muted-foreground">at</span>
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="font-mono">{job.period}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-2xl font-bold">Education</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                  <h3 className="font-serif text-lg font-semibold mb-1">{edu.degree}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">{edu.school}</span>
                    <span>•</span>
                    <span className="font-mono">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-2xl font-bold">Skills & Expertise</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-semibold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
