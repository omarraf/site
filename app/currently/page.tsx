import { Navigation } from "@/components/navigation"

export default function CurrentlyPage() {
  const sections = [
    {
      title: "Reading",
      items: [ 
        "Slow Productivity  by Cal Newport",
        "Research papers on LLMs",    
        "Dozens of other books yet to be started"
      ],
    },
    {
      title: "Learning",
      items: [
        "System Design",
        "Golang",
        "Cloud Computing (AWS/GCP)",
        "blockchain"
      ],
    },
    {
      title: "Exploring",
      items: [
        "🌍"
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
