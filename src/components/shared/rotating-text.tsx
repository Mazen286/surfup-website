"use client"

import { useEffect, useState } from "react"

const PHRASES = [
  "Adventure starts here.",
  "No reservations needed.",
  "Available 24/7.",
  "30 seconds to surf.",
]

export function RotatingText() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
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
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {PHRASES[index]}
    </span>
  )
}
