import { forwardRef, lazy, Suspense, useImperativeHandle, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Github, ArrowUpRight, X } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { projects, DOMAINS, DOMAIN_SHORT, type Domain, type Project } from '../data/projects'
import { profile } from '../data/profile'

const ProjectModal = lazy(() =>
  import('./ProjectModal').then((m) => ({ default: m.ProjectModal })),
)

type Filter = 'All' | Domain

export interface ProjectsHandle {
  openProject: (title: string) => void
}

export const Projects = forwardRef<ProjectsHandle>(function Projects(_props, ref) {
  const [filter, setFilter] = useState<Filter>('All')
  const [techFilter, setTechFilter] = useState<string | null>(null)
  const [selected, setSelected] = useState<Project | null>(null)

  useImperativeHandle(
    ref,
    () => ({
      openProject: (title: string) => {
        const found = projects.find((p) => p.title === title)
        if (found) setSelected(found)
      },
    }),
    [],
  )

  const featured = useMemo(() => projects.filter((p) => p.featured), [])
  const filtered = useMemo(
    () =>
      techFilter
        ? projects.filter((p) => p.tech.includes(techFilter))
        : filter === 'All'
          ? projects
          : projects.filter((p) => p.domain === filter),
    [filter, techFilter],
  )

  const filters: Filter[] = ['All', ...DOMAINS]

  const handleDomainFilter = (f: Filter) => {
    setTechFilter(null)
    setFilter(f)
  }

  const handleTechClick = (tech: string) => {
    setFilter('All')
    setTechFilter(tech)
  }

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="03 - Projects"
        title="25+ projects, 5 AI domains"
        subtitle="A selection of work spanning computer vision, NLP, predictive ML, data engineering and full-stack systems - each with real, measured impact. Selected projects link to their repos; you can explore the rest on GitHub."
      />

      <a
        href={profile.socials.github}
        target="_blank"
        rel="noreferrer"
        className="mb-12 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent-cyan/40 hover:bg-white/10"
      >
        <Github size={17} /> Browse all my work on GitHub <ArrowUpRight size={15} />
      </a>

      {/* Featured */}
      <div className="mb-16">
        <h3 className="mb-5 flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-slate-400">
          <span className="h-px w-8 bg-accent-cyan" /> Featured work
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard
              key={p.title}
              project={p}
              featured
              onOpen={() => setSelected(p)}
              onTechClick={handleTechClick}
            />
          ))}
        </div>
      </div>

      {/* Filter + full grid */}
      <h3 className="mb-5 flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-slate-400">
        <span className="h-px w-8 bg-accent-violet" /> All projects
      </h3>

      <div
        className={`flex flex-wrap gap-2 transition-opacity ${
          techFilter ? 'mb-4 opacity-40' : 'mb-8'
        }`}
      >
        {filters.map((f) => {
          const label = f === 'All' ? 'All' : DOMAIN_SHORT[f]
          const count = f === 'All' ? projects.length : projects.filter((p) => p.domain === f).length
          const isActive = !techFilter && filter === f
          return (
            <button
              key={f}
              onClick={() => handleDomainFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                isActive
                  ? 'border-accent-cyan/50 bg-accent-cyan/15 text-accent-cyan'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {label}
              <span className="ml-1.5 text-xs opacity-60">{count}</span>
            </button>
          )
        })}
      </div>

      {techFilter && (
        <div className="mb-8 flex items-center gap-2">
          <button
            onClick={() => setTechFilter(null)}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-1.5 text-sm font-medium text-accent-cyan"
          >
            tech: {techFilter} <X size={14} />
          </button>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map((p) => (
            <ProjectCard
              key={p.title}
              project={p}
              onOpen={() => setSelected(p)}
              onTechClick={handleTechClick}
            />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
          <Suspense fallback={null}>
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  )
})
