"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex justify-center md:justify-start space-x-4">
      <div className="countdown-item">
        <span className="text-2xl md:text-3xl font-bold">{timeLeft.days}</span>
        <span className="text-xs uppercase text-muted-foreground">Days</span>
      </div>
      <div className="countdown-item">
        <span className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</span>
        <span className="text-xs uppercase text-muted-foreground">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</span>
        <span className="text-xs uppercase text-muted-foreground">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</span>
        <span className="text-xs uppercase text-muted-foreground">Seconds</span>
      </div>
    </div>
  )
}

