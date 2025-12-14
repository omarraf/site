import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-8 sm:py-16">
          <div className="mb-8 sm:mb-12">
            <img
              src="/me5.png"
              alt="Illustration of person with glasses reading a book with basketball nearby"
              className="w-64 h-48 sm:w-80 sm:h-60 object-contain rounded-full"
            />
          </div>

          {/* Bio text */}
          <div className="space-y-4 px-2">
            <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
              I'm a current CS Major with experience building software spanning from research projects, non-profit orgs and open source projects.
              Currently focused on system design, ai and cloud computing.
              I'm always open to chat, so feel free to reach out!
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-12 sm:mt-16 text-sm">
            <a
              href="mailto:omarrafiqq@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors underline"
            >
              email
            </a>
            <a
              href="https://github.com/omarraf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors underline"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/omarrafiq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors underline"
            >
              linkedin
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
