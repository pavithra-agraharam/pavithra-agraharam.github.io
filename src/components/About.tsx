import { motion } from 'framer-motion'
import { GraduationCap, Award, Sparkles } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="01 - About" title="Turning data into decisions you can trust" />

      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-7 lg:col-span-3"
        >
          <Sparkles className="mb-4 text-accent-cyan" size={24} />
          <p className="text-base leading-relaxed text-slate-300">{profile.summary}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            My work spans computer vision, NLP, predictive modeling, data engineering and full-stack
            delivery - always with the same goal: ship robust systems that make a measurable
            difference. Across roles at TCS, Progress Solutions and KnowVia Tech, that's meant faster
            pipelines, lower costs, and models teams actually rely on.
          </p>
        </motion.div>

        <div className="space-y-6 lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-white">
              <GraduationCap size={18} className="text-accent-violet" />
              <h3 className="font-display font-semibold">Education</h3>
            </div>
            <ul className="space-y-4">
              {profile.education.map((e) => (
                <li key={e.school}>
                  <p className="text-sm font-semibold text-white">{e.degree}</p>
                  <p className="text-sm text-muted">{e.school}</p>
                  <p className="mt-0.5 font-mono text-xs text-accent-cyan">{e.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-white">
              <Award size={18} className="text-accent-violet" />
              <h3 className="font-display font-semibold">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.certifications.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
