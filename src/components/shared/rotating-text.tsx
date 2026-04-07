"use client"

import { useEffect, useState } from "react"

const PHRASES = [
  "Hawaii & San Diego. Available 24/7.",
  "No reservations needed.",
  "30 seconds to surf.",
  "Scan. Grab. Go.",
]

export function RotatingText() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % PHRASES.length)
        setVisible(true)
      }, 400)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="inline-block transition-all duration-400 ease-out"
      style={{
        opacity: !mounted || visible ? 1 : 0,
        transform: !mounted || visible ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {PHRASES[index]}
    </span>
  )
}
