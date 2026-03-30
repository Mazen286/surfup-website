"use client"

import { useCallback, useRef, useState } from "react"

export function MagneticButton({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode
  className?: string
  href: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    setOffset({ x: distX * 0.15, y: distY * 0.15 })
  }, [])

  const onLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 })
  }, [])

  const isExternal = href.startsWith("http")

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      {children}
    </a>
  )
}
