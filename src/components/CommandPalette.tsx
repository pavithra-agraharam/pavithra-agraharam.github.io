import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Search } from 'lucide-react'
import { sections } from '../data/sections'
import { projects } from '../data/projects'
import { profile } from '../data/profile'

type ResultKind = 'section' | 'project' | 'action'

interface Result {
  kind: ResultKind
  id: string
  label: string
  sublabel?: string
  run: () => void
}

interface Props {
  onClose: () => void
  onSelectProject: (title: string) => void
}

const actionDefs: { id: string; label: string; sublabel?: string }[] = [
  { id: 'email', label: 'Email me', sublabel: profile.email },
  { id: 'resume', label: 'Download résumé' },
  { id: 'github', label: 'Open GitHub' },
  { id: 'linkedin', label: 'Open LinkedIn' },
]

function runAction(id: string) {
  if (id === 'email') {
    window.location.href = profile.socials.email
  } else if (id === 'resume') {
    const a = document.createElement('a')
    a.href = profile.resumeUrl
    a.download = ''
    a.click()
  } else if (id === 'github') {
    window.open(profile.socials.github, '_blank', 'noreferrer')
  } else if (id === 'linkedin') {
    window.open(profile.socials.linkedin, '_blank', 'noreferrer')
  }
}

export function CommandPalette({ onClose, onSelectProject }: Props) {
  const [query, setQuery] = useState('')
  const [highlighted, setHighlighted] = useState(0)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const results = useMemo<Result[]>(() => {
    const q = query.trim().toLowerCase()

    const sectionResults: Result[] = sections
      .filter((s) => s.label.toLowerCase().includes(q))
      .map((s) => ({
        kind: 'section' as const,
        id: s.id,
        label: s.label,
        run: () => {
          window.location.hash = `#${s.id}`
        },
      }))

    const projectResults: Result[] = q
      ? projects
          .filter(
            (p) =>
              p.title.toLowerCase().includes(q) ||
              p.domain.toLowerCase().includes(q) ||
              p.tech.some((t) => t.toLowerCase().includes(q)),
          )
          .slice(0, 8)
          .map((p) => ({
            kind: 'project' as const,
            id: p.title,
            label: p.title,
            sublabel: p.domain,
            run: () => onSelectProject(p.title),
          }))
      : []

    const actionResults: Result[] = actionDefs
      .filter((a) => a.label.toLowerCase().includes(q))
      .map((a) => ({ kind: 'action' as const, ...a, run: () => runAction(a.id) }))

    return [...sectionResults, ...projectResults, ...actionResults]
  }, [query, onSelectProject])

  const groups: { title: string; items: Result[] }[] = [
    { title: 'Sections', items: results.filter((r) => r.kind === 'section') },
    { title: 'Projects', items: results.filter((r) => r.kind === 'project') },
    { title: 'Actions', items: results.filter((r) => r.kind === 'action') },
  ].filter((g) => g.items.length > 0)

  const select = (result: Result | undefined) => {
    if (!result) return
    result.run()
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm sm:pt-32"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.98 }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
        className="glass w-full max-w-lg overflow-hidden"
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <Search size={18} className="text-slate-500" />
          <input
            autoFocus
            role="combobox"
            aria-expanded="true"
            aria-controls="command-palette-list"
            aria-autocomplete="list"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setHighlighted(0)
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setHighlighted((h) => (results.length ? (h + 1) % results.length : 0))
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setHighlighted((h) => (results.length ? (h - 1 + results.length) % results.length : 0))
              } else if (e.key === 'Enter') {
                e.preventDefault()
                select(results[highlighted])
              }
            }}
            placeholder="Search sections, projects, tech..."
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
          <kbd className="hidden rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 sm:block">
            Esc
          </kbd>
        </div>

        <div id="command-palette-list" role="listbox" className="max-h-80 overflow-y-auto p-2">
          {groups.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-slate-500">No matches.</p>
          )}
          {groups.map((group) => (
            <div key={group.title} className="mb-2">
              <p className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {group.title}
              </p>
              {group.items.map((item) => {
                const index = results.indexOf(item)
                const isHighlighted = index === highlighted
                return (
                  <button
                    key={`${item.kind}-${item.id}`}
                    role="option"
                    aria-selected={isHighlighted}
                    onMouseEnter={() => setHighlighted(index)}
                    onClick={() => select(item)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      isHighlighted ? 'bg-accent-cyan/10 text-accent-cyan' : 'text-slate-300'
                    }`}
                  >
                    <span>
                      {item.label}
                      {item.sublabel && (
                        <span className="ml-2 text-xs text-slate-500">{item.sublabel}</span>
                      )}
                    </span>
                    <ArrowRight size={14} className="opacity-50" />
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
