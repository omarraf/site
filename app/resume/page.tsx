import { Navigation } from "@/components/navigation"

export default function ResumePage() {
  const education = {
    school: "California State University, Fullerton",
    degree: "BS in Computer Science",
    graduation: "Expected Graduation: May 2026",
    coursework: ["Operating Systems", "Algorithms", "Machine Learning", "Software Engineering"],
  }

  const experience = [
    {
      title: "Software Developer & Researcher",
      company: "University of Iowa",
      location: "Iowa City, IA",
      period: "May 2025 – Dec 2025",
      description: "Building software and researching LLMs related to health tracking for families.",
      achievements: [
        "Engineered distributed health data pipeline (Java/Kotlin) for real-time sync across 50+ users",
        "Fine-tuned and integrated LLM within modular AI assistant for health insights and anomaly detection",
        "Deployed scalable GCP infrastructure supporting continuous multi-user data processing",
        "Expanded development to iOS, saving over $5,000 in hardware costs",
      ],
    },
    {
      title: "Open Source Contributor",
      company: "Open Energy Dashboard, FreeCodeCamp",
      location: "Remote",
      period: "2024 - Present",
      description: "Contributing to open source projects focused on sustainability and developer education.",
      achievements: [
        <>Boosted test coverage by 15% with Express API test suites (<a href="https://github.com/OpenEnergyDashboard/OED/pull/1503" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 transition-colors">PR #1503</a>)</>,
        <>Hardened security across 20+ endpoints via validation and sanitization (<a href="https://github.com/OpenEnergyDashboard/OED/pull/1528" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 transition-colors">PR #1528</a>)</>,
        "Collaborated through code reviews and documentation to ensure maintainability",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "The Masjid App",
      location: "Irvine, CA",
      period: "May 2024 – Sep. 2024",
      description: "Full-stack development on features serving 120K+ mosques worldwide.",
      achievements: [
        "Shipped prayer timetable system with TypeScript and React, improving admin efficiency",
        "Led end-to-end feature development from UI design to state handling",
        "Enhanced UI workflows and accessibility for mosque administrators",
      ],
    },
  ]

  const leadership = [
    {
      title: "AI Board Officer",
      organization: "ACM @ CSUF",
      period: "May 2025 – Present",
      achievements: [
        "Lead AI/ML workshops for 50+ students, helping them build foundational skills",
        "Coordinate coding demonstrations connecting students with real-world tech applications",
      ],
    },
  ]

  const skills = {
    "Programming Languages": ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
    "Frameworks/Libraries": ["React", "Next.js", "FastAPI", "Django", "Flask", "Spring Boot", "Express", "Tailwind CSS"],
    "Cloud & Tools": ["AWS", "Google Cloud Platform", "Docker", "GitHub Actions", "Git", "Linux", "Postman", "Bash"],
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
          <h1 className="text-xl sm:text-2xl font-medium">resume</h1>
          <a
            href="/Omar_Rafiq_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
          >
            View resume
          </a>
        </div>

        {/* Contact */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
            <a href="mailto:omarrafiqq@gmail.com" className="hover:text-red-500 transition-colors">
              omarrafiqq@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <span>Orange County, CA</span>
          </div>
        </div>

        {/* Summary */}
        

        {/* Education */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Education</h2>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
            <div>
              <h3 className="font-medium text-sm sm:text-base">{education.school}</h3>
              <p className="text-gray-600 text-sm">{education.degree}</p>
            </div>
            <span className="text-xs sm:text-sm text-gray-500 font-mono">{education.graduation}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 mt-2">
            <span className="font-medium">Relevant Coursework: </span>
            {education.coursework.join(", ")}
          </p>
        </div>

        {/* Experience */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((job, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">{job.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 font-mono">{job.period}</span>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm mb-3">{job.description}</p>
                <ul className="space-y-1">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-xs sm:text-sm text-gray-700">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Skills</h2>
          <div className="space-y-3 sm:space-y-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-medium mb-2 text-sm sm:text-base">{category}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
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

        {/* Leadership */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Leadership</h2>
          <div className="space-y-6 sm:space-y-8">
            {leadership.map((role, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">{role.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{role.organization}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 font-mono">{role.period}</span>
                </div>
                <ul className="space-y-1">
                  {role.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-xs sm:text-sm text-gray-700">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-lg font-medium mb-4">Projects</h2>
          <a
            href="/projects"
            className="text-sm text-red-500 hover:text-red-600 transition-colors"
          >
            View all projects →
          </a>
        </div>
      </main>
    </div>
  )
}
