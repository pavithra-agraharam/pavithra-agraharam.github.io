import { useEffect, useState } from 'react'

/**
 * Soft accent glow that follows the cursor on pointer devices.
 * Disabled on touch and for users who prefer reduced motion.
 */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    // eslint-disable-next-line react-hooks/set-state-in-effect -- enabling depends on a media-query check that can only run client-side; not a derived-state pattern
    setEnabled(true)
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(34,211,238,0.07), transparent 70%)`,
      }}
    />
  )
}
