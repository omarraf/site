"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Landscape() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-80 h-60" />
  }

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <div className="w-80 h-60 flex items-center justify-center">
      <svg
        width="320"
        height="240"
        viewBox="0 0 320 240"
        className="w-full h-full"
      >
        {/* Sky gradient */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={isDark ? "#1a1a2e" : "#87CEEB"}
            />
            <stop
              offset="100%"
              stopColor={isDark ? "#16213e" : "#B0E0E6"}
            />
          </linearGradient>
          <linearGradient id="riverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={isDark ? "#2c3e50" : "#4682B4"}
            />
            <stop
              offset="100%"
              stopColor={isDark ? "#34495e" : "#5F9EA0"}
            />
          </linearGradient>
        </defs>

        {/* Sky background */}
        <rect width="320" height="240" fill="url(#skyGradient)" />

        {/* Sun/Moon */}
        <circle
          cx="260"
          cy="50"
          r="20"
          fill={isDark ? "#F5F5DC" : "#FFD700"}
          className="transition-all duration-500"
        />
        {isDark && (
          <circle
            cx="265"
            cy="45"
            r="18"
            fill={isDark ? "#1a1a2e" : "#87CEEB"}
            className="transition-all duration-500"
          />
        )}

        {/* Back mountains */}
        <path
          d="M0,120 L60,80 L120,100 L180,70 L240,90 L320,60 L320,240 L0,240 Z"
          fill={isDark ? "#2c3e50" : "#708090"}
          className="transition-all duration-500"
        />

        {/* Front mountains */}
        <path
          d="M0,160 L80,110 L140,130 L200,100 L260,120 L320,90 L320,240 L0,240 Z"
          fill={isDark ? "#34495e" : "#696969"}
          className="transition-all duration-500"
        />

        {/* River */}
        <path
          d="M0,180 Q80,170 160,185 Q240,200 320,190 L320,240 L0,240 Z"
          fill="url(#riverGradient)"
          className="transition-all duration-500"
        />

        {/* River reflection highlights */}
        <path
          d="M0,180 Q80,170 160,185 Q240,200 320,190 L320,195 Q240,205 160,190 Q80,175 0,185 Z"
          fill={isDark ? "#3498db" : "#ADD8E6"}
          opacity="0.3"
          className="transition-all duration-500"
        />

        {/* Trees on mountains */}
        <polygon
          points="100,130 105,110 110,130"
          fill={isDark ? "#1e3a1e" : "#228B22"}
          className="transition-all duration-500"
        />
        <polygon
          points="180,110 185,90 190,110"
          fill={isDark ? "#1e3a1e" : "#228B22"}
          className="transition-all duration-500"
        />
        <polygon
          points="220,135 225,115 230,135"
          fill={isDark ? "#1e3a1e" : "#228B22"}
          className="transition-all duration-500"
        />

        {/* Stars (only in dark mode) */}
        {isDark && (
          <>
            <circle cx="50" cy="30" r="1" fill="#FFFFFF" opacity="0.8" />
            <circle cx="120" cy="25" r="1" fill="#FFFFFF" opacity="0.6" />
            <circle cx="200" cy="35" r="1" fill="#FFFFFF" opacity="0.9" />
            <circle cx="280" cy="20" r="1" fill="#FFFFFF" opacity="0.7" />
            <circle cx="30" cy="60" r="1" fill="#FFFFFF" opacity="0.5" />
          </>
        )}
      </svg>
    </div>
  )
}