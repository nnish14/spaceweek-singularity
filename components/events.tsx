"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Users, Rocket, Microscope, ChevronRight } from "lucide-react"

type EventType = "All" | "Talk" | "Workshop" | "Competition" | "Outreach"

interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  type: Exclude<EventType, "All">
  icon: React.ReactNode
}

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<EventType>("All")

  const events: Event[] = [
    {
      id: 1,
      title: "Journey to Mars: The Next Frontier",
      date: "April 1, 2025",
      time: "10:00 AM - 12:00 PM",
      description:
        "Join our panel of experts as they discuss the challenges and opportunities of human missions to Mars.",
      type: "Talk",
      icon: <Rocket className="h-6 w-6 text-nebula-500" />,
    },
    {
      id: 2,
      title: "Build Your Own Satellite Model",
      date: "April 2, 2025",
      time: "2:00 PM - 5:00 PM",
      description: "A hands-on workshop where participants will build and take home their own satellite models.",
      type: "Workshop",
      icon: <Microscope className="h-6 w-6 text-space-500" />,
    },
    {
      id: 3,
      title: "Space Photography Contest",
      date: "April 3, 2025",
      time: "All Day",
      description: "Submit your best astrophotography for a chance to win amazing prizes and recognition.",
      type: "Competition",
      icon: <Calendar className="h-6 w-6 text-cosmic-500" />,
    },
    {
      id: 4,
      title: "Space Careers Symposium",
      date: "April 4, 2025",
      time: "11:00 AM - 4:00 PM",
      description: "Explore career opportunities in space science, engineering, and related fields.",
      type: "Talk",
      icon: <Users className="h-6 w-6 text-nebula-500" />,
    },
    {
      id: 5,
      title: "Virtual Reality Space Walk",
      date: "April 5, 2025",
      time: "10:00 AM - 6:00 PM",
      description: "Experience what it's like to walk in space with our cutting-edge VR simulation.",
      type: "Outreach",
      icon: <Rocket className="h-6 w-6 text-cosmic-500" />,
    },
    {
      id: 6,
      title: "Rocket Design Challenge",
      date: "April 6, 2025",
      time: "9:00 AM - 3:00 PM",
      description: "Design, build, and launch your own model rocket in this exciting day-long competition.",
      type: "Competition",
      icon: <Rocket className="h-6 w-6 text-space-500" />,
    },
  ]

  const filteredEvents = activeFilter === "All" ? events : events.filter((event) => event.type === activeFilter)

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
    <section id="events" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Featured Events at Spaceweek 2025</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore workshops, talks, competitions, and space-themed activities.
          </p>
        </div>

        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {(["All", "Talk", "Workshop", "Competition", "Outreach"] as EventType[]).map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === type
                    ? "bg-space-600 text-white shadow-lg shadow-space-500/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {type}s
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              className="event-card glassmorphism rounded-xl overflow-hidden border border-space-800/50 hover:border-space-600/50 transition-all"
              variants={item}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-space-900/50">{event.icon}</div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      event.type === "Talk"
                        ? "bg-nebula-500/20 text-nebula-300"
                        : event.type === "Workshop"
                          ? "bg-space-500/20 text-space-300"
                          : event.type === "Competition"
                            ? "bg-cosmic-500/20 text-cosmic-300"
                            : "bg-purple-500/20 text-purple-300"
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>
                    {event.date} • {event.time}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{event.description}</p>
                <button className="flex items-center text-space-400 hover:text-space-300 text-sm font-medium transition-colors">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

