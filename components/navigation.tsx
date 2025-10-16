"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/thoughts", label: "thoughts" },
    { href: "/projects", label: "projects" },
    { href: "/currently", label: "currently" },
    { href: "/resume", label: "resume" },
  ]

  return (
    <header className="w-full px-6 py-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="font-bold text-lg tracking-wide" style={{ color: '#54422b', fontFamily: '"VT323", monospace' }}>OMAR RAFIQ</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
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
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base transition-colors ${
                  isActive ? "text-gray-900 underline" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
