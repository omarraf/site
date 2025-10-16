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
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="font-bold text-lg tracking-wide" style={{ color: '#54422b', fontFamily: '"VT323", monospace' }}>OMAR RAFIQ</h1>
        </Link>

        <nav className="flex gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base transition-colors ${
                  isActive ? "text-gray-900 underline" : "text-gray-600 hover:text-gray-900"
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
