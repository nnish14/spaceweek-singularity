"use client"

import { motion } from "framer-motion"
import { Mail, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="h-6 w-6" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-6 w-6" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-6 w-6" />, href: "#" },
    { name: "YouTube", icon: <Youtube className="h-6 w-6" />, href: "#" },
  ]

  return (
    <section id="contact" className="py-20 bg-space-gradient relative">
      <div className="absolute inset-0 bg-nebula-gradient opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">Contact Us</h2>

            <div className="glassmorphism rounded-xl p-8 mb-8 inline-block">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 mr-2 text-space-400" />
                <p className="text-lg">
                  Email us at:{" "}
                  <a
                    href="mailto:example@spaceweek.org"
                    className="text-space-400 hover:text-space-300 transition-colors"
                  >
                    example@spaceweek.org
                  </a>
                </p>
              </div>

              <div className="flex justify-center space-x-6">
                {socialLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="social-icon" aria-label={link.name}>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-muted-foreground">
              <p>Join us for an unforgettable week celebrating space exploration and discovery.</p>
              <p className="mt-2">Spaceweek 2025 • April 1-7, 2025</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

