import { Navigation } from "@/components/navigation"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Transport Planner",
      slug: "transport-planner",
      summary: "Full-stack web app for planning eco-friendly routes",
      tags: ["TypeScript", "React", "Express", "PostgreSQL", "Docker"],
      github: "https://github.com/omarraf/transport-planner",
      demo: "https://transport-planner-ruddy.vercel.app/",
    },
    {
      title: "Daychart",
      slug: "daychart",
      summary: "Open-source web application for planning and visualizing your day",
      tags: ["TypeScript", "React", "Next.js"],
      github: "https://github.com/omarraf/time-tracker",
      demo: "https://daychart.fyi",
    },
    {
      title: "Global Conflict Tracker",
      slug: "conflict-tracker",
      summary: "AI-powered platform for real-time monitoring of global conflicts",
      tags: ["AI", "Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/omarraf/conflict-tracker",
      demo: "https://conflictlog.vercel.app/",
    },
    {
      title: "Web Crawler",
      slug: "web-crawler",
      summary: "Scalable web crawler for data extraction and analysis",
      tags: ["Go", "Gin", "PostgreSQL", "Redis"],
      github: "https://github.com/omarraf/web-crawler",
    },
    {
      title: "Event Driven Ticketing System",
      slug: "ticketing-system",
      summary: "A serverless event ticketing platform built with AWS services",
      tags: ["Python", "AWS", "Cloud"],
      github: "https://github.com/omarraf/ticketing-system",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-medium mb-12">projects</h1>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={index} className="block">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-medium">{project.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
