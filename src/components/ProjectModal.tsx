import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, Github, ArrowUpRight, Target, Wrench, TrendingUp } from 'lucide-react'
import { type Project, DOMAIN_SHORT } from '../data/projects'

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
        className="glass my-8 w-full max-w-2xl p-7 sm:my-0 sm:p-9"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <span className="chip mb-3 border-accent-violet/30 bg-accent-violet/5 text-[11px] text-accent-violet">
              {DOMAIN_SHORT[project.domain]}
            </span>
            <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 transition-colors hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="rounded-md bg-accent-cyan/10 px-2.5 py-1 font-mono text-xs font-medium text-accent-cyan"
            >
              {m}
            </span>
          ))}
        </div>

        <Block icon={<Target size={16} />} title="The goal">
          <p className="text-sm leading-relaxed text-slate-300">{project.details.goal}</p>
        </Block>

        <Block icon={<Wrench size={16} />} title="Engineering challenges">
          <ul className="space-y-2.5">
            {project.details.challenges.map((c, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-violet" />
                {c}
              </li>
            ))}
          </ul>
        </Block>

        <Block icon={<TrendingUp size={16} />} title="What I delivered">
          <ul className="space-y-2.5">
            {project.details.highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-cyan" />
                {h}
              </li>
            ))}
          </ul>
        </Block>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-5">
          {project.tech.map((t) => (
            <span key={t} className="chip font-mono text-[11px]">
              {t}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet px-5 py-2.5 text-sm font-semibold text-base transition-transform hover:scale-105"
          >
            <Github size={16} /> View on GitHub <ArrowUpRight size={14} />
          </a>
        )}
      </motion.div>
    </motion.div>
  )
}

function Block({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-6">
      <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-cyan">
        {icon}
        {title}
      </h4>
      {children}
    </div>
  )
}
