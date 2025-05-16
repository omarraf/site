"use client"

import Image from "next/image"
import { CalendarIcon, Clock, Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts } from './data/blog-posts'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Profile Section */}
        <section className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-100 shadow-lg">
            <Image src="/omarraf.jpg?height=192&width=192" alt="Omar R" fill className="object-cover" priority />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">Omar Rafiq</h1>
            <h2 className="text-xl text-muted-foreground mb-6">Software Engineer</h2>
            <div className="prose max-w-none">
              <p>
                Hi. I like to build things. Interested in machine learning, full-stack dev and contributing to open source.
              </p>
              <p>
                When I'm not coding, you can find me playing basketball, reading a book, or at the gym.
              </p>
            </div>
          </div>
        </section>

        {/* Projects/Blog Section */}
        <ProjectsBlogSection />

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:omarrafiqq@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/omarraf" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/omarrafiq" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground">Feel free to reach out for collaborations or just a friendly chat!</p>
        </section>
      </div>
    </main>
  )
}

// Projects and Blog Section Component
function ProjectsBlogSection() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and inventory management.",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      sourceCode: "#",
      liveDemo: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website for a photographer showcasing their work.",
      tags: ["React", "Framer Motion", "CSS Grid"],
      sourceCode: "#",
      liveDemo: undefined,
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects with team collaboration features.",
      tags: ["TypeScript", "Redux", "Firebase"],
      sourceCode: "#",
      liveDemo: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather information with interactive maps and forecasts.",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      sourceCode: "#",
      liveDemo: undefined,
    },
  ]

  return (
    <section className="mb-16">
      <Tabs defaultValue="projects" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="projects" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                    {project.liveDemo && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="blog" className="mt-0">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>
                    <a href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </a>
                  </CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
