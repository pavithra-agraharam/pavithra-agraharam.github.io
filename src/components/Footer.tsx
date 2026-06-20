import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.
        </p>
        <p className="font-mono text-xs text-slate-500">Designed in the dark · ⚡ AI since {profile.since}</p>
      </div>
    </footer>
  )
}
