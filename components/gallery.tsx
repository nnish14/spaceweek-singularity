"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const images: GalleryImage[] = [
    { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Space exhibition" },
    { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Rocket launch" },
    { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Astronomy workshop" },
    { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "VR space experience" },
    { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "Student competition" },
    { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Guest speaker" },
    { id: 7, src: "/placeholder.svg?height=400&width=600", alt: "Stargazing event" },
    { id: 8, src: "/placeholder.svg?height=400&width=600", alt: "Space art exhibition" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="gallery" className="py-20 bg-space-gradient relative">
      <div className="absolute inset-0 bg-cosmic-glow opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Spaceweek Memories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Glimpses from the cosmos and highlights from previous events.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="gallery-item aspect-square rounded-lg overflow-hidden cursor-pointer"
              variants={item}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-space-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <div className="bg-background rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-lg font-medium">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

