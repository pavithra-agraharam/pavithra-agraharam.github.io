import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * Lightweight canvas "neural network" particle field.
 * Perf-guarded: capped node count, pauses when tab hidden, respects reduced-motion.
 */
export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let raf = 0

    const count = Math.min(95, Math.floor((width * height) / 18000))
    const nodes: Node[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }
      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.5
            ctx.strokeStyle = `rgba(56, 220, 240, ${alpha})`
            ctx.lineWidth = 1.1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      // nodes
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(180, 120, 255, 0.95)'
        ctx.shadowColor = 'rgba(34, 211, 238, 0.8)'
        ctx.shadowBlur = 6
        ctx.beginPath()
        ctx.arc(n.x, n.y, 2.1, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0
      raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else if (!prefersReduced) raf = requestAnimationFrame(draw)
    }

    if (prefersReduced) {
      draw() // single static frame
    } else {
      raf = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
    />
  )
}
