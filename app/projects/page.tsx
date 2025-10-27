import { Navigation } from "@/components/navigation"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Transport Planner",
      slug: "transport-planner",
      summary: "Full-stack web app for planning eco-friendly routes",
      year: "2025",
      tags: ["TypeScript", "React", "Express", "PostgreSQL", "Docker"],
    },
    {
      title: "AI Story Generator",
      slug: "ai-story-generator",
      summary: "Fully automated story generation using GPT-4 ",
      year: "2025",
      tags: ["LLMs", "Python", "FastAPI", "Next.js"],
    },
    {
      title: "Global Conflict Tracker",
      slug: "conflict-tracker",
      summary: "AI-powered platform for real-time monitoring of global conflicts",
      year: "2025",
      tags: ["AI", "Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "Web Crawler",
      slug: "web-crawler",
      summary: "Scalable web crawler for data extraction and analysis",
      year: "2023",
      tags: ["Go", "Gin", "PostgreSQL", "Redis"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-medium mb-12">projects</h1>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={`/projects/${project.slug}`}
              className="block group cursor-pointer"
            >
              <article>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-medium group-hover:text-red-500 transition-colors">{project.title}</h2>
                  <span className="text-sm text-gray-500 font-mono">{project.year}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
