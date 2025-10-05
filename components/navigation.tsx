"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/thoughts", label: "thoughts" },
    { href: "/projects", label: "projects" },
    { href: "/currently", label: "currently" },
    { href: "/resume", label: "resume" },
  ]

  return (
    <header className="w-full px-6 py-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-primary font-bold text-lg tracking-wide">OMAR RAFIQ</h1>
        </Link>

        <nav className="flex gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive ? "text-foreground underline" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
