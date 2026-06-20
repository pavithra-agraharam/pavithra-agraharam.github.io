import { motion } from 'framer-motion'
import { ArrowUpRight, FileText } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { publications } from '../data/publications'

export function Publications() {
  return (
    <section id="publications" className="section">
      <SectionHeading
        eyebrow="05 - Writing & Research"
        title="Published work"
        subtitle="From a 2018 research paper to a modern MLOps guide."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {publications.map((pub, i) => (
          <motion.a
            key={pub.title}
            href={pub.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group glass flex flex-col p-7 transition-all hover:border-accent-violet/40 hover:shadow-glow-violet"
          >
            <div className="mb-4 flex items-center justify-between">
              <FileText className="text-accent-violet" size={22} />
              <ArrowUpRight
                className="text-slate-500 transition-colors group-hover:text-accent-violet"
                size={20}
              />
            </div>
            <h3 className="font-display text-lg font-semibold leading-snug text-white">
              {pub.title}
            </h3>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-muted">
              <span className="text-accent-cyan">{pub.venue}</span>
              <span>·</span>
              <span>{pub.role}</span>
              <span>·</span>
              <span>{pub.date}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
