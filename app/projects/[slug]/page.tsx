import { Navigation } from "@/components/navigation"
import { notFound } from "next/navigation"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

const projects = [
  {
    title: "Transport Planner",
    slug: "transport-planner",
    summary: "Full-stack web app for planning eco-friendly routes",
    year: "2025",
    tags: ["TypeScript", "React", "Express", "PostgreSQL", "Docker"],
    description: `
## Overview
A comprehensive transport planning application that helps users find the most eco-friendly routes for their journeys.

## Key Features
- Real-time route optimization
- Multi-modal transport options
- Carbon footprint calculation
- User-friendly interface

## Technical Implementation
Built with TypeScript and React on the frontend, with Express and PostgreSQL powering the backend. The application is containerized using Docker for easy deployment.

## Challenges & Solutions
One of the main challenges was integrating multiple transport APIs and normalizing their data formats...
    `,
    images: [
      // Add your image paths here
      // "/projects/transport-planner/screenshot1.png",
    ],
    videos: [
      // Add your video paths here
      // "/projects/transport-planner/demo.mp4",
    ],
    github: "https://github.com/omarraf/transport-planner",
    demo: "https://transport-planner-ruddy.vercel.app/",
  },
  {
    title: "AI Story Generator",
    slug: "ai-story-generator",
    summary: "Fully automated story generation using GPT-4 ",
    year: "2025",
    tags: ["LLMs", "Python", "FastAPI", "Next.js"],
    description: `
## Overview
An AI-powered application that generates creative stories based on user prompts using GPT-4.

## Key Features
- Interactive story generation
- Multiple genre support
- Character development tools
- Export to various formats

## Technical Implementation
The backend is built with Python and FastAPI, leveraging OpenAI's GPT-4 API. The frontend uses Next.js for a smooth user experience.
    `,
    images: [],
    videos: [],
    github: "https://github.com/omarraf/story-generator",
  },
  {
    title: "Global Conflict Tracker",
    slug: "conflict-tracker",
    summary: "AI-powered platform for real-time monitoring of global conflicts",
    year: "2025",
    tags: ["AI", "Next.js", "Node.js", "MongoDB"],
    description: `
## Overview
A real-time platform for monitoring and analyzing global conflicts using AI-powered data aggregation and visualization.

## Key Features
- Real-time conflict tracking
- Interactive maps
- AI-powered news aggregation
- Historical data analysis
    `,
    images: [],
    videos: [],
    github: "https://github.com/omarraf/conflict-tracker",
  },
  {
    title: "Web Crawler",
    slug: "web-crawler",
    summary: "High-performance distributed web crawler for efficient data extraction and indexing",
    year: "2023",
    tags: ["Go", "Gin", "PostgreSQL", "Redis"],
    description: `
## Overview
A high-performance web crawler built with Go for efficient data extraction and indexing.

## Key Features
- Distributed crawling architecture
- Rate limiting and politeness policies
- Content extraction and parsing
- Redis-based queue management
    `,
    images: [],
    videos: [],
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-medium">{project.title}</h1>
            <span className="text-sm text-gray-500 font-mono">{project.year}</span>
          </div>
          <p className="text-lg text-gray-700 mb-4">{project.summary}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-500 hover:text-red-600 transition-colors"
              >
                View on GitHub →
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-500 hover:text-red-600 transition-colors"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12 space-y-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Videos */}
        {project.videos && project.videos.length > 0 && (
          <div className="mb-12 space-y-6">
            {project.videos.map((video, index) => (
              <video
                key={index}
                controls
                className="w-full rounded-lg"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="prose prose-gray max-w-none leading-relaxed text-gray-700">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => <h2 className="text-xl font-medium mt-8 mb-4" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-lg font-medium mt-6 mb-3" {...props} />,
              p: ({ node, ...props }) => <p className="mb-4" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-1" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />,
              li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
              code: ({ node, ...props }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" {...props} />,
              pre: ({ node, ...props }) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
            }}
          >
            {project.description}
          </ReactMarkdown>
        </div>

        {/* Back Link */}
        <div className="mt-16">
          <a
            href="/projects"
            className="text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            ← Back to projects
          </a>
        </div>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
