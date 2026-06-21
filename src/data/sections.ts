export interface NavSection {
  id: string
  label: string
}

export const sections: NavSection[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]
