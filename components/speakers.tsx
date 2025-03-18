"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Speaker {
  id: number
  name: string
  title: string
  bio: string
  image: string
}

export default function Speakers() {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Dr. Samantha Clarke",
      title: "Astrophysicist, NASA",
      bio: "Leading researcher in exoplanet atmospheres with over 15 years of experience at NASA's Jet Propulsion Laboratory.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Dr. Marcus Johnson",
      title: "Space Engineer, SpaceX",
      bio: "Pioneering engineer working on next-generation propulsion systems for Mars missions and deep space exploration.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Prof. Elena Rodriguez",
      title: "Astrobiologist, MIT",
      bio: "Renowned researcher studying the potential for life on other planets and the origins of life in our solar system.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Cmdr. James Wilson",
      title: "Former Astronaut, ESA",
      bio: "Veteran of three space missions including a six-month stay aboard the International Space Station.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Dr. Aisha Patel",
      title: "Planetary Geologist, ISRO",
      bio: "Specialist in Martian geology and contributor to multiple rover missions exploring the red planet's surface.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Prof. David Kim",
      title: "Space Policy Expert, UN",
      bio: "Advisor on international space law and cooperation with focus on sustainable space development.",
      image: "/placeholder.svg?height=300&width=300",
    },
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="speakers" className="py-20 bg-space-gradient relative">
      <div className="absolute inset-0 bg-nebula-gradient opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Meet the Experts</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from leading scientists, engineers, and space industry professionals.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              className="speaker-card glassmorphism rounded-xl overflow-hidden border border-space-800/50"
              variants={item}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  width={300}
                  height={300}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-space-400 text-sm mb-3">{speaker.title}</p>
                <p className="text-muted-foreground text-sm line-clamp-3">{speaker.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

