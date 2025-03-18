import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Events from "@/components/events"
import Speakers from "@/components/speakers"
import Timeline from "@/components/timeline"
import Gallery from "@/components/gallery"
import RegistrationForm from "@/components/registration-form"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingCTA from "@/components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Events />
      <Speakers />
      <Timeline />
      <Gallery />
      <RegistrationForm />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  )
}

