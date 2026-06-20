// Generates public/og-image.png (1200x630) - branded social share card.
// Run with: node scripts/make-og.mjs
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = join(__dirname, '..', 'public', 'og-image.png')

const font = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif"

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#07080d"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#22d3ee"/>
      <stop offset="1" stop-color="#a855f7"/>
    </linearGradient>
    <radialGradient id="glow1" cx="0.15" cy="0.2" r="0.5">
      <stop offset="0" stop-color="#22d3ee" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.9" cy="0.9" r="0.55">
      <stop offset="0" stop-color="#a855f7" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#a855f7" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- accent badge -->
  <g transform="translate(80, 96)">
    <rect x="0" y="0" width="300" height="46" rx="23" fill="#22d3ee" fill-opacity="0.08" stroke="#22d3ee" stroke-opacity="0.35"/>
    <circle cx="28" cy="23" r="6" fill="#22d3ee"/>
    <text x="48" y="31" font-family="${font}" font-size="20" font-weight="600" fill="#22d3ee">Building AI since 2018</text>
  </g>

  <!-- name -->
  <text x="80" y="280" font-family="${font}" font-size="92" font-weight="700" fill="#ffffff">Pavithra Agraharam</text>

  <!-- role -->
  <text x="82" y="356" font-family="${font}" font-size="46" font-weight="700" fill="url(#accent)">AI/ML Engineer</text>

  <!-- tagline -->
  <text x="82" y="416" font-family="${font}" font-size="28" font-weight="400" fill="#94a3b8">Computer Vision · NLP · MLOps · Data Engineering</text>

  <!-- domain chips -->
  <g font-family="${font}" font-size="20" font-weight="500" fill="#cbd5e1">
    <g transform="translate(80, 470)">
      <rect width="190" height="44" rx="22" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.10"/>
      <text x="24" y="29">25+ Projects</text>
    </g>
    <g transform="translate(286, 470)">
      <rect width="150" height="44" rx="22" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.10"/>
      <text x="24" y="29">MS in CS</text>
    </g>
    <g transform="translate(452, 470)">
      <rect width="220" height="44" rx="22" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.10"/>
      <text x="24" y="29">2 Publications</text>
    </g>
  </g>

  <!-- monogram -->
  <g transform="translate(980, 150)">
    <rect width="140" height="140" rx="32" fill="#0d1117" stroke="url(#accent)" stroke-width="2"/>
    <text x="70" y="98" font-family="${font}" font-size="64" font-weight="700" text-anchor="middle" fill="url(#accent)">PA</text>
  </g>

  <text x="82" y="566" font-family="${font}" font-size="22" font-weight="500" fill="#64748b">pavithra-agraharam.github.io</text>
</svg>
`

await sharp(Buffer.from(svg)).png().toFile(out)
console.log('Wrote', out)
