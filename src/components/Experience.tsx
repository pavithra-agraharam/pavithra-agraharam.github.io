import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { experiences } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="02 - Experience"
        title="Where I've shipped"
        subtitle="Five roles across enterprise AI/ML, data engineering and full-stack delivery."
      />

      <div className="relative">
        <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-accent-cyan/60 via-accent-violet/40 to-transparent sm:left-4" />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative pl-12 sm:pl-16"
            >
              <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-accent-cyan bg-base sm:left-2.5" />
              <div className="glass p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                  <span className="font-mono text-xs text-accent-cyan">{exp.period}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-accent-violet">{exp.company}</p>
                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-cyan" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="chip font-mono text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
