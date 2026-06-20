import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import { NeuralBackground } from './NeuralBackground'
import { profile } from '../data/profile'

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <NeuralBackground />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-accent-violet/10 blur-3xl" />

      <div className="section relative z-10 w-full pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="chip mb-6 border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-cyan" />
          Building AI since {profile.since}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-tight text-white sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-snug text-white sm:text-4xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 flex h-9 items-center gap-2 font-mono text-lg sm:text-2xl"
        >
          <span className="text-slate-500">&gt;</span>
          <motion.span
            key={roleIdx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="gradient-text animate-gradient-x"
          >
            {profile.roles[roleIdx]}
          </motion.span>
          <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-accent-cyan/70" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.headline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet px-6 py-3 text-sm font-semibold text-base shadow-glow transition-transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Download size={16} /> Resume
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-xl border border-white/15 bg-white/5 p-3 text-white transition-colors hover:bg-white/10"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-xl border border-white/15 bg-white/5 p-3 text-white transition-colors hover:bg-white/10"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
        >
          {profile.stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-bold text-white">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-accent-cyan"
      >
        <ArrowDown className="animate-float" size={22} />
      </a>
    </section>
  )
}
