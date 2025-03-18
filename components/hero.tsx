"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import CountdownTimer from "./countdown-timer"

export default function Hero() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!starsRef.current) return

    // Create stars
    const starsContainer = starsRef.current
    const starCount = 100

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.classList.add("star")

      // Random size
      const size = Math.random() * 3
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`

      // Random animation delay
      star.style.animationDelay = `${Math.random() * 4}s`

      starsContainer.appendChild(star)
    }

    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      starsContainer.style.transform = `translate(${x * 20}px, ${y * 20}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild)
      }
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-gradient"
    >
      <div ref={starsRef} className="stars-container parallax" />

      <div className="absolute inset-0 bg-cosmic-glow z-0" />

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-glow">Spaceweek 2025</h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Celebrating Space, Science & Innovation | April 1–7, 2025
            </p>

            <div className="mb-8">
              <CountdownTimer targetDate="2025-04-01T00:00:00" />
            </div>

            <Link
              href="#register"
              className="inline-block bg-space-600 hover:bg-space-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-space-500/50 text-glow"
            >
              Register Now
            </Link>
          </motion.div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full animate-float">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Astronaut illustration"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}

