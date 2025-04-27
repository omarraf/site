"use client"

import { useState } from "react"
import Image from "next/image"
import { CalendarIcon, Clock, Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Profile Section */}
        <section className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-100 shadow-lg">
            <Image src="/omarraf.jpg?height=192&width=192" alt="Omar R" fill className="object-cover" priority />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">Omar R</h1>
            <h2 className="text-xl text-gray-600 mb-6">Web Developer & Designer</h2>
            <div className="prose max-w-none">
              <p>
                Hello! I'm Omar, a passionate web developer and designer with expertise in creating modern,
                user-friendly websites and applications. With over 5 years of experience in the industry, I specialize
                in React, Next.js, and responsive design.
              </p>
              <p>
                
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities.
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
              <a href="mailto:omar@example.com" aria-label="Email">
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
            <Button variant="outline" size="icon" asChild>
              <a href="https://twitter.com/omarraf" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-gray-600">Feel free to reach out for collaborations or just a friendly chat!</p>
        </section>
      </div>
    </main>
  )
}

// Projects and Blog Section Component
function ProjectsBlogSection() {
  const [activeTab, setActiveTab] = useState("projects")

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

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 13",
      excerpt: "Learn how to set up your first Next.js 13 project with the new App Router.",
      date: "April 15, 2023",
      readTime: "5 min read",
      link: "#",
    },
    {
      id: 2,
      title: "The Power of Tailwind CSS",
      excerpt: "Discover how Tailwind CSS can streamline your styling workflow and improve productivity.",
      date: "March 22, 2023",
      readTime: "7 min read",
      link: "#",
    },
    {
      id: 3,
      title: "Building Accessible Web Applications",
      excerpt: "Best practices for creating web applications that are accessible to everyone.",
      date: "February 10, 2023",
      readTime: "10 min read",
      link: "#",
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
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center text-sm text-gray-500 gap-4">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.readTime}
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
