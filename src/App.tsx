import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects, type ProjectsHandle } from './components/Projects'
import { Skills } from './components/Skills'
import { Publications } from './components/Publications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { CursorGlow } from './components/CursorGlow'
import { ScrollToTop } from './components/ScrollToTop'
import { CommandPalette } from './components/CommandPalette'
import { SectionDots } from './components/SectionDots'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const projectsRef = useRef<ProjectsHandle>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects ref={projectsRef} />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <SectionDots />
      <AnimatePresence>
        {paletteOpen && (
          <CommandPalette
            onClose={() => setPaletteOpen(false)}
            onSelectProject={(title) => {
              window.location.hash = '#projects'
              projectsRef.current?.openProject(title)
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}
