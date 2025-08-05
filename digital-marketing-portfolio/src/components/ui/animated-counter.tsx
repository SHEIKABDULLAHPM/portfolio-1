"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { formatNumber } from "@/lib/utils"

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = ""
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = from + (to - from) * easeOutQuart
      
      setCount(Math.floor(currentCount))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      } else {
        setCount(to)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isInView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}