import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-16">
          <div className="mb-12">
            <img
              src="/personal-illustration.png"
              alt="Illustration of person with glasses reading a book with basketball nearby"
              className="w-80 h-60 object-contain"
            />
          </div>

          {/* Bio text */}
          <div className="space-y-4">
            <p className="text-foreground text-base leading-relaxed">
              I like to contribute to open source projects and am currently conduction research on AI and health tracking for families. Currently a CS major senior.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-6 mt-16 text-sm">
            {["email", "github", "twitter", "linkedin"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-muted-foreground hover:text-foreground transition-colors underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
