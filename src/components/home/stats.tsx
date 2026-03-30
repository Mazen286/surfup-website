"use client"

import { useEffect, useRef, useState } from "react"
import { CursorGlow } from "@/components/shared/cursor-glow"

const STATS = [
  { value: 1000, suffix: "+", label: "Boards Rented" },
  { value: 24, suffix: "/7", label: "Availability" },
  { value: 30, suffix: "s", label: "To Start Surfing" },
]

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [target, active])

  return count
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, active)

  return (
    <div className="relative z-10 text-center">
      <p className="text-4xl font-extrabold text-white sm:text-5xl">
        {count}
        <span className="text-surf-400">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/60">
        {label}
      </p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <CursorGlow className="noise-overlay bg-ocean-950 py-20 sm:py-24">
      <div ref={ref} className="relative mx-auto max-w-4xl px-6">
        <div
          className="morph-blob pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[400px] opacity-20 blur-3xl sm:h-[350px] sm:w-[500px]"
          style={{
            background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 40%, #0284c7 100%)",
          }}
        />
        <div className="relative z-10 grid grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </CursorGlow>
  )
}
