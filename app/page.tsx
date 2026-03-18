export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
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
            <p className="text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-relaxed">
              Current CS student with experience building software across research, non-profits, and open source projects.
              Interested in system design, AI, and cloud computing.
              <br /> Always happy to chat, feel free to reach out!
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 text-sm">
            <a
              href="mailto:omarrafiqq@gmail.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors underline"
            >
              email
            </a>
            <a
              href="https://github.com/omarraf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors underline"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/omarrafiq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors underline"
            >
              linkedin
            </a>
            <a
              href="/Omar-Rafiq_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors underline"
            >
              resume
            </a>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-4 left-0 right-0 text-center">
        <p className="text-gray-300 text-xs">last updated 3/18/26</p>
      </footer>
    </div>
  )
}
