import { Github, Linkedin, BookOpen, ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-xs text-slate-500">
            © {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.
          </p>
          <p className="font-mono text-xs text-slate-500">
            Designed in the dark · ⚡ AI since {profile.since}
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <div className="flex items-center gap-4">
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
                className="text-slate-500 transition-colors hover:text-accent-cyan"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <a
            href="#home"
            className="flex items-center gap-1.5 font-mono text-xs text-slate-500 transition-colors hover:text-accent-cyan"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  )
}
