import { Navigation } from "@/components/navigation"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      summary: "Complete overhaul of checkout experience resulting in 40% conversion increase",
      year: "2024",
      tags: ["UX Design", "React", "TypeScript"],
    },
    {
      title: "AI-Powered Analytics Dashboard",
      summary: "Real-time data visualization platform for enterprise clients",
      year: "2024",
      tags: ["Data Viz", "Python", "Machine Learning"],
    },
    {
      title: "Mobile Banking App",
      summary: "Secure financial application serving 100k+ active users",
      year: "2023",
      tags: ["Mobile", "Security", "Fintech"],
    },
    {
      title: "Design System Implementation",
      summary: "Comprehensive component library and design tokens for scaling design across teams",
      year: "2023",
      tags: ["Design Systems", "React", "Storybook"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-medium mb-12">projects</h1>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={index} className="group cursor-pointer">
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
          ))}
        </div>
      </main>
    </div>
  )
}
