import { Navigation } from "@/components/navigation"

export default function CurrentlyPage() {
  const sections = [
    {
      title: "Programming",
      items: [
        "Building a personal design system with Tailwind CSS",
        "Learning advanced React Server Components patterns",
        "Exploring WebAssembly for performance-critical applications",
        "Contributing to open source component libraries",
      ],
    },
    {
      title: "Reading",
      items: [
        '"Atomic Habits" by James Clear',
        '"The Design of Everyday Things" (re-read)',
        "Various articles on system design and architecture",
        "Technical blogs about AI-assisted development workflows",
      ],
    },
    {
      title: "Learning",
      items: [
        "Design system architecture at scale",
        "Micro-interactions and animation libraries",
        "Sustainable web development practices",
        "Performance monitoring and optimization techniques",
      ],
    },
    {
      title: "Exploring",
      items: [
        "AI-assisted design workflows and tools",
        "The intersection of AI and user interface design",
        "Building more intuitive and accessible interfaces",
        "Next-generation enterprise software patterns",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-medium mb-12">currently</h1>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-medium mb-4">{section.title}</h2>
              <ul className="space-y-2 text-gray-700">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
