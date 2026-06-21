import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, Search, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { profile } from '../data/profile'
import { sections } from '../data/sections'

interface Props {
  onOpenPalette: () => void
}

export function Navbar({ onOpenPalette }: Props) {
  const active = useScrollSpy(sections.map((l) => l.id))
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-base/70 px-4 py-3 backdrop-blur-lg sm:px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          <span className="gradient-text">{profile.initials}</span>
          <span className="text-white">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                active === l.id ? 'text-accent-cyan' : 'text-slate-400 hover:text-white'
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute inset-0 -z-10 rounded-lg bg-accent-cyan/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPalette}
            className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-400 transition-colors hover:text-white sm:flex"
          >
            <Search size={14} /> Search...
            <kbd className="rounded border border-white/10 px-1.5 font-mono text-[10px] text-slate-500">
              ⌘K
            </kbd>
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="hidden rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet px-4 py-1.5 text-sm font-semibold text-base transition-transform hover:scale-105 sm:inline-block"
          >
            Resume
          </a>
          <button aria-label="Search" onClick={onOpenPalette} className="text-slate-200 sm:hidden">
            <Search size={20} />
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="text-slate-200 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-base/95 p-3 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col">
            {sections.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm ${
                  active === l.id ? 'text-accent-cyan' : 'text-slate-300'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-1 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet px-3 py-2.5 text-center text-sm font-semibold text-base"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
