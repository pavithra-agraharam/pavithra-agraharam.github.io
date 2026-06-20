import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, BookOpen } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeading eyebrow="06 - Contact" title="Let's build something intelligent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass relative overflow-hidden p-8 sm:p-12"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-cyan/10 blur-3xl" />
        <div className="relative">
          <p className="max-w-xl text-lg leading-relaxed text-slate-300">
            I'm open to AI/ML engineering roles and collaborations. If you're hiring or want to talk
            shop about computer vision, MLOps or data pipelines, my inbox is open.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.socials.email}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet px-6 py-3 text-sm font-semibold text-base shadow-glow transition-transform hover:scale-105"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Download Résumé
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { href: profile.socials.github, icon: Github, label: 'GitHub' },
              { href: profile.socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: profile.socials.medium, icon: BookOpen, label: 'Medium' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-xl border border-white/15 bg-white/5 p-3 text-white transition-colors hover:bg-white/10 hover:text-accent-cyan"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
