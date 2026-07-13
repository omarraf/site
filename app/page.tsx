import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

const projects = [
  {
    name: "Transport Planner",
    url: "https://github.com/omarraf/transport-planner",
    description: "full-stack web app for planning eco-friendly routes",
  },
  {
    name: "Daychart",
    url: "https://daychart.fyi",
    description: "web app for planning and visualizing your day (100+ registered users)",
  },
  {
    name: "Global Conflict Tracker",
    url: "https://conflictlog.vercel.app/",
    description: "platform for real-time monitoring of global conflicts",
  },
  {
    name: "Web Crawler",
    url: "https://github.com/omarraf/web-crawler",
    description: "scalable web crawler for data extraction and analysis built in Go",
  },
  {
    name: "Event Driven Ticketing System",
    url: "https://github.com/omarraf/ticketing-system",
    description: "serverless event ticketing platform built on AWS",
  },
]

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="page">
      <header>
        <img src="/me5.png" alt="Omar Rafiq" className="portrait" />
        <h1>Omar Rafiq</h1>
        <p>
          I'm a software engineer and recent CS grad with experience building
          software across research, non-profits, and open source projects.
          Always happy to chat about anything, feel free to reach out!
          
        </p>
        <p className="link-row">
          <a href="https://github.com/omarraf">github</a>
          <span className="muted"> · </span>
          <a href="mailto:omarrafiqq@gmail.com">email</a>
          <span className="muted"> · </span>
          <a href="/Omar_Rafiq_Resume_6-26.pdf">resume</a>
        </p>
      </header>

      <section>
        <h2>Featured Projects</h2>
        <ul className="plain-list">
          {projects.map((project) => (
            <li key={project.name}>
              <a href={project.url}>{project.name}</a>
              <span className="muted"> — {project.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Writing</h2>
        <ul className="plain-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <span className="post-date">{post.date.slice(0, 7)}</span>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
