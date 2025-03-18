"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling past the hero section
      if (window.scrollY > window.innerHeight) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 floating-cta">
      <Link
        href="#register"
        className="flex items-center justify-center h-14 w-14 md:h-auto md:w-auto md:px-6 md:py-3 bg-space-600 hover:bg-space-500 text-white font-bold rounded-full shadow-lg hover:shadow-space-500/50 transition-all duration-300 text-glow"
      >
        <span className="hidden md:inline">Register Now</span>
        <span className="md:hidden">🚀</span>
      </Link>
    </div>
  )
}

