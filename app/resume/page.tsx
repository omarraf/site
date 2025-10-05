import { Navigation } from "@/components/navigation"

export default function ResumePage() {
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
  ]

  const skills = {
    Design: ["User Experience Design", "Interface Design", "Design Systems", "Prototyping", "User Research"],
    Development: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Python"],
    Tools: ["Figma", "Adobe Creative Suite", "Framer", "Storybook", "Git", "Linear"],
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-medium">resume</h1>
          <button className="text-sm text-gray-500 hover:text-red-500 transition-colors">download pdf</button>
        </div>

        {/* Contact */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <a href="mailto:hello@omarrafiq.dev" className="hover:text-red-500 transition-colors">
              hello@omarrafiq.dev
            </a>
            <span>•</span>
            <span>San Francisco, CA</span>
            <span>•</span>
            <span>Available for freelance</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h2 className="text-lg font-medium mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Senior Product Designer and Full-Stack Developer with 6+ years of experience creating user-centered digital
            experiences. Proven track record of leading design system initiatives, improving user satisfaction metrics,
            and bridging the gap between design and development teams.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-lg font-medium mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{job.title}</h3>
                    <p className="text-gray-600">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 font-mono">{job.period}</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">{job.description}</p>
                <ul className="space-y-1">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-gray-700">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-medium mb-6">Skills</h2>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-medium mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span key={index} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
