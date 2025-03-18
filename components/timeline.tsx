"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"

interface TimelineEvent {
  id: number
  day: string
  date: string
  events: {
    id: number
    time: string
    name: string
    location: string
  }[]
}

export default function Timeline() {
  const schedule: TimelineEvent[] = [
    {
      id: 1,
      day: "Day 1",
      date: "April 1, 2025",
      events: [
        {
          id: 101,
          time: "09:00 AM",
          name: "Opening Ceremony",
          location: "Main Auditorium",
        },
        {
          id: 102,
          time: "10:30 AM",
          name: "Journey to Mars: The Next Frontier",
          location: "Hall A",
        },
        {
          id: 103,
          time: "02:00 PM",
          name: "Space Technology Exhibition",
          location: "Exhibition Hall",
        },
        {
          id: 104,
          time: "04:30 PM",
          name: "Networking Reception",
          location: "Skyview Lounge",
        },
      ],
    },
    {
      id: 2,
      day: "Day 2",
      date: "April 2, 2025",
      events: [
        {
          id: 201,
          time: "09:30 AM",
          name: "Future of Space Exploration Panel",
          location: "Hall B",
        },
        {
          id: 202,
          time: "11:00 AM",
          name: "Student Research Presentations",
          location: "Conference Room 1",
        },
        {
          id: 203,
          time: "02:00 PM",
          name: "Build Your Own Satellite Workshop",
          location: "Workshop Area",
        },
        {
          id: 204,
          time: "05:00 PM",
          name: "Astronomy Night Preparations",
          location: "Observatory",
        },
      ],
    },
    {
      id: 3,
      day: "Day 3",
      date: "April 3, 2025",
      events: [
        {
          id: 301,
          time: "10:00 AM",
          name: "Space Photography Contest",
          location: "Gallery Hall",
        },
        {
          id: 302,
          time: "01:00 PM",
          name: "Lunch with an Astronaut",
          location: "Dining Hall",
        },
        {
          id: 303,
          time: "03:00 PM",
          name: "Virtual Reality Space Experience",
          location: "Tech Pavilion",
        },
        {
          id: 304,
          time: "07:00 PM",
          name: "Stargazing Event",
          location: "Observatory",
        },
      ],
    },
    {
      id: 4,
      day: "Day 4",
      date: "April 4, 2025",
      events: [
        {
          id: 401,
          time: "09:00 AM",
          name: "Space Careers Symposium",
          location: "Main Hall",
        },
        {
          id: 402,
          time: "11:30 AM",
          name: "International Space Collaboration",
          location: "Conference Room 2",
        },
        {
          id: 403,
          time: "02:30 PM",
          name: "Robotics in Space Demonstration",
          location: "Tech Pavilion",
        },
        {
          id: 404,
          time: "05:00 PM",
          name: "Documentary Screening",
          location: "Theater",
        },
      ],
    },
    {
      id: 5,
      day: "Day 5",
      date: "April 5, 2025",
      events: [
        {
          id: 501,
          time: "10:00 AM",
          name: "Virtual Reality Space Walk",
          location: "VR Zone",
        },
        {
          id: 502,
          time: "12:00 PM",
          name: "Space Food Tasting",
          location: "Dining Hall",
        },
        {
          id: 503,
          time: "02:00 PM",
          name: "Kids Space Art Competition",
          location: "Creative Zone",
        },
        {
          id: 504,
          time: "04:00 PM",
          name: "Meet the Scientists",
          location: "Main Lobby",
        },
      ],
    },
    {
      id: 6,
      day: "Day 6",
      date: "April 6, 2025",
      events: [
        {
          id: 601,
          time: "09:00 AM",
          name: "Rocket Design Challenge",
          location: "Engineering Lab",
        },
        {
          id: 602,
          time: "01:00 PM",
          name: "Model Rocket Launches",
          location: "Launch Field",
        },
        {
          id: 603,
          time: "03:30 PM",
          name: "Space Debris Solutions Workshop",
          location: "Workshop Area",
        },
        {
          id: 604,
          time: "06:00 PM",
          name: "Awards Ceremony",
          location: "Main Auditorium",
        },
      ],
    },
    {
      id: 7,
      day: "Day 7",
      date: "April 7, 2025",
      events: [
        {
          id: 701,
          time: "10:00 AM",
          name: "Future of Human Spaceflight",
          location: "Hall A",
        },
        {
          id: 702,
          time: "12:30 PM",
          name: "Community Space Project Launch",
          location: "Main Stage",
        },
        {
          id: 703,
          time: "03:00 PM",
          name: "Closing Panel Discussion",
          location: "Main Auditorium",
        },
        {
          id: 704,
          time: "05:00 PM",
          name: "Farewell Reception",
          location: "Skyview Lounge",
        },
      ],
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Event Schedule Timeline</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Plan your Spaceweek experience with our comprehensive event schedule.
          </p>
        </div>

        <div className="relative timeline-stepper py-10">
          {schedule.map((day, index) => (
            <motion.div
              key={day.id}
              className="mb-16 md:mb-24 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/3 mb-4 md:mb-0 md:pr-8 md:text-right">
                  <div className="sticky top-24">
                    <h3 className="text-2xl font-bold text-space-400">{day.day}</h3>
                    <div className="flex items-center md:justify-end mt-2">
                      <Calendar className="h-4 w-4 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span className="text-muted-foreground">{day.date}</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 pl-8 md:pl-16 border-l border-space-800/50 relative">
                  <div className="absolute w-4 h-4 bg-space-600 rounded-full -left-2 top-0 border-2 border-background"></div>

                  <div className="space-y-6">
                    {day.events.map((event) => (
                      <div
                        key={event.id}
                        className="glassmorphism p-4 rounded-lg border border-space-800/50 hover:border-space-600/50 transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-bold text-lg">{event.name}</h4>
                            <div className="flex items-center text-sm text-muted-foreground mt-2">
                              <Clock className="h-4 w-4 mr-1" />
                              <span className="mr-3">{event.time}</span>
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

