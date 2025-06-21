"use client"

import { CalendarIcon, Github, ExternalLink } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts } from './data/blog-posts'
import { AnimatedProfile } from "./components/AnimatedProfile"
import { Navbar } from "./components/Navbar"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedProfile />
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                {project.image && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
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
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">blog posts</h2>
            <p className="text-muted-foreground text-lg">a collection of my thoughts and insights on my journey in computer science, more to come!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 min-h-24 flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors whitespace-nowrap overflow-x-auto">
                    <a href={`/blog/${post.id}`}>
                      {post.title}
                    </a>
                  </CardTitle>
                  <CardDescription className="text-base">{post.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const projects = [
  {
    id: 1,
    title: "Diabetes Risk Prediction",
    description: "Logistic regression model implemented manually using NumPy to predict an individual's risk of diabetes based on health and lifestyle indicators.",
    tags: ["Python", "NumPy", "Pandas", "Matplotlib"],
    sourceCode: "https://github.com/omarraf/diabetes-risk-prediction",
    image: "/images/diabetes_project.png",
  },
  {
    id: 2,
    title: "NBA Player Comparison",
    description: "A modern, interactive Streamlit app for comparing NBA players' statistics, shooting charts, and advanced metrics side-by-side. Powered by the nba_api, pandas, and Plotly.",
    tags: ["Python", "Pandas"],
    sourceCode: "https://github.com/omarraf/nba-comparison",
    liveDemo: "https://nba-player-comparison.streamlit.app/",
    image: "/images/nba_project.png",
  },
  {
    id: 3,
    title: "AI Recipe Generator",
    description: "A web app that uses AI to generate recipes based on user preferences and ingredients.",
    tags: ["JavaScript", "React", "Claude"],
    sourceCode: "https://github.com/omarraf/ai-chef",
    image: "/images/airecipe.png",
  },
  {
    id: 4,
    title: "DayChart: Daily Time Tracker",
    description: "Web app that allows users to track their daily time spent on various activities and visualize the data in a chart.",
    tags: ["Typescript", "React", "Chart.js", "Firebase"],
    sourceCode: "https://github.com/omarraf/time-tracker",
    liveDemo: "https://www.daychart.fyi/",
    image: "/images/daychart.png",
  },
]
