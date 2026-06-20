import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { type Project, DOMAIN_SHORT } from '../data/projects'

interface Props {
  project: Project
  featured?: boolean
  onOpen?: () => void
}

export const ProjectCard = forwardRef<HTMLElement, Props>(function ProjectCard(
  { project, featured, onOpen },
  ref,
) {
  const repo = project.github

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen?.()
        }
      }}
      className={`group glass relative flex cursor-pointer flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40 hover:shadow-glow focus:outline-none focus-visible:border-accent-cyan/60 ${
        featured ? 'lg:p-7' : ''
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="chip border-accent-violet/30 bg-accent-violet/5 text-[11px] text-accent-violet">
          {DOMAIN_SHORT[project.domain]}
        </span>
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.title} on GitHub`}
            className="text-slate-500 transition-colors hover:text-accent-cyan"
          >
            <Github size={18} />
          </a>
        )}
      </div>

      <h3
        className={`font-display font-semibold text-white ${featured ? 'text-xl' : 'text-lg'}`}
      >
        {project.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.metrics.map((m) => (
          <span
            key={m}
            className="rounded-md bg-accent-cyan/10 px-2 py-1 font-mono text-[11px] font-medium text-accent-cyan"
          >
            {m}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[11px] text-slate-500">
            #{t.replace(/\s+/g, '')}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-cyan transition-colors group-hover:text-white">
          View details <ArrowUpRight size={15} />
        </span>
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors hover:text-accent-cyan"
          >
            <Github size={14} /> Code
          </a>
        )}
      </div>
    </motion.article>
  )
})
