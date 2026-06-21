import { useScrollSpy } from '../hooks/useScrollSpy'
import { sections } from '../data/sections'

export function SectionDots() {
  const active = useScrollSpy(sections.map((s) => s.id))

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={s.label}
          aria-current={active === s.id ? 'true' : undefined}
          className="group relative flex items-center justify-end"
        >
          <span className="pointer-events-none absolute right-5 whitespace-nowrap rounded-md border border-white/10 bg-base/90 px-2 py-1 font-mono text-xs text-slate-300 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
            {s.label}
          </span>
          <span
            className={`h-2.5 w-2.5 rounded-full border transition-all ${
              active === s.id
                ? 'scale-125 border-accent-cyan bg-accent-cyan'
                : 'border-white/20 bg-white/10 group-hover:border-accent-cyan/50'
            }`}
          />
        </a>
      ))}
    </nav>
  )
}
