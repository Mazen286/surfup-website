"use client"

import { useCallback, useRef, useState } from "react"

export function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({
    transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
  })

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    })
  }, [])

  const onLeave = useCallback(() => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
    })
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
