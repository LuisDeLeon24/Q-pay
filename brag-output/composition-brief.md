# Hyperframes Composition Brief: Q-Pay

## Objective
Create a short launch-style brag video for Q-Pay.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080, 30fps
- Duration: 21.5 seconds

## Source Material
- Project root: `Q-pay/`
- Primary files read: `src/components/landing/HeroSection.tsx`, `src/pages/app/GeneratePage.tsx`, `DetailPage.tsx`, `DashboardPage.tsx`, `src/context/MockAppContext.tsx`, `src/index.css`, `.agents/design.md`, `.agents/product-marketing.md`, `public/assets/landing/step-*.png`
- Product name: Q-Pay
- Tagline / strongest claim: "Presta con confianza, sin dolores de cabeza"
- Key UI to recreate: Generar (Quiero Prestar / A un plazo de / Con interes de + botón flecha), Detalle (Monto/Plazo/Cuota/Interes + QR), Dashboard (Hola, Luis · Prestado/Debido · Mario – 10 cuotas · anillo de progreso)
- Copy that must appear verbatim:
  - Presta con confianza, sin dolores de cabeza
  - Quiero Prestar / A un plazo de / Con interes de
  - Mario ha aceptado tu oferta de:
  - Prestado / Debido
  - q-pay.ldeleon.com

## Creative Direction
- Tone preset: default
- Creative direction: telenovela latina del cobro incómodo, resuelta con calma premium
- Interpretation: drama doméstico en el hook (serif, silencio), producto limpio y seguro en el medio, final cálido.
- Angle: ver `brag-plan.md` → The angle
- Hook: "Capítulo 47 · Mario todavía no paga." + chat "Oye Mario… ¿y los $100?" → Visto → escribiendo… → nada
- Outro / punchline: "Mario pagó. La amistad sigue." → lockup Q-Pay
- Avoid: generic SaaS language, abstract filler, purple/neon, full-screen linear gradients, redesigning the app UI

## Visual Identity
- Background: `#000000`, atmosphere radial `#0a1a15`
- Text: `#ffffff`, secondary `rgba(255,255,255,0.55)`
- Accent: `#3ecf7a`; bottle `#1a4a38`/`#0c2e22`; muted green `#6b9a7e`
- Display font: Fraunces (local woff2)
- Body font: Outfit (local woff2)
- Visual references: glass cards (white 4% fill, 10–18% border), pill/rounded buttons, the Q logo (`public/assets/logo.png`)

## Storyboard
Use `brag-output/brag-plan.md` as the creative contract.

1. Capítulo 47 — 3.70s — chat hook
2. Giro de guion — 2.64s — logo + headline (beat-locked 3.70s)
3. Generar — 4.20s — typing $100, tap arrow
4. QR y aceptación — 4.22s — Detalle + QR scan + "Mario ha aceptado…" (12.65s)
5. Seguimiento — 3.68s — ring 10% → 100%, "Mario pagó. La amistad sigue."
6. Lockup — 3.06s — logo, headline, B2B line, URL

## Audio
- Audio role: warm bed + sparse accents
- Audio arc: near-silent hook → bed rises at logo → UI accents follow the flow → soft bell, fade out
- Music: `assets/music/happy-beats-business-moves-vol-9-by-ende-dot-app.mp3`
- Music treatment: volume automation — ~0.08 during hook, 0.32 from 3.7s, fade to 0 over the last 2s
- Music cue guidance: bundled preset (vol-9). Strong locks: 3.70, 6.34, 10.54 (+12.65 secondary). Ring ticks on beats 15.28/15.81/16.34/16.86.
- Audio-reactive treatment: subtle — RMS/bass drives the bottle glow behind the phone
- Audio-coupled moments: chat pop, per-digit keypress, arrow click, card slide on acceptance, chip ticks on ring, bell on lockup
- SFX analysis guidance: `brag/assets/sfx/sfx-analysis.md` — prefer low/medium HF risk
- Exact SFX choice: chosen after the animation exists
- Audio files: copied into `brag-output/composition/assets/`

## Hyperframes Instructions
Follow hyperframes-core / animation / creative / keyframes / cli. Standalone `index.html`, one paused GSAP timeline registered at `window.__timelines["main"]`, local fonts via `@font-face`, local GSAP, `npx hyperframes check` as the gate before render.
