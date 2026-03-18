"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/blog", label: "blog" },
    { href: "/projects", label: "projects" },
  ]

  return (
    <header className="relative w-full px-6 py-8">
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="font-bold text-lg tracking-wide" style={{ color: '#54422b', fontFamily: '"VT323", monospace', textDecoration: 'underline wavy', textDecorationColor: '#54422b', textUnderlineOffset: '4px' }}>OMAR RAFIQ</h1>
        </Link>

        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base underline transition-colors ${
                pathname === item.href || pathname.startsWith(item.href)
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-600 hover:text-gray-900 transition-colors ml-auto"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-6 flex flex-col gap-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base underline transition-colors ${
                pathname === item.href || pathname.startsWith(item.href)
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
