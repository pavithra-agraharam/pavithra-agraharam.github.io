import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { profile } from '../data/profile'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const active = useScrollSpy(links.map((l) => l.id))
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-base/70 px-4 py-3 backdrop-blur-lg sm:px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          <span className="gradient-text">{profile.initials}</span>
          <span className="text-white">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                active === l.id ? 'text-accent-cyan' : 'text-slate-400 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="hidden rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet px-4 py-1.5 text-sm font-semibold text-base transition-transform hover:scale-105 sm:inline-block"
          >
            Resume
          </a>
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
            {links.map((l) => (
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
