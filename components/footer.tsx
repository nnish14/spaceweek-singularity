export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-background relative">
      <div className="absolute inset-0 bg-cosmic-glow opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Spaceweek. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-space-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-space-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

