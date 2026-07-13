# Q-Pay — Design System (Link Preview / OG Image)

*Última actualización: 2026-07-13. Extraído de la landing y tokens en código. Uso principal: brief para que una IA genere la imagen de preview al compartir el enlace (WhatsApp, Instagram, iMessage, LinkedIn, Slack).*

Para contexto de producto y messaging, ver [product-marketing.md](./product-marketing.md).

---

## Propósito de este documento

Generar una **Open Graph image** coherente con la web de Q-Pay. No es una guía completa de UI de la app; es el sistema visual mínimo + specs de la preview social.

**Meta OG actuales** (`index.html`):

| Campo | Valor |
|-------|--------|
| `og:title` | Q-Pay — Finanzas informales simplificadas |
| `og:description` | Estandarizando las finanzas informales y ahorrándote dolores de cabeza. |
| `og:image` | `https://q-pay.ldeleon.com/assets/preview.jpg` (1200×630) |
| `og:locale` | `es_ES` |

---

## Marca

| Elemento | Valor |
|----------|--------|
| Nombre | **Q-Pay** |
| Categoría visual | Dark fintech, confianza, informal → claro |
| Headline del hero (landing) | Presta con confianza, sin dolores de cabeza |
| Tagline del hero | Registra préstamos, comparte ofertas con QR y da seguimiento a cada cuota — entre familia y amigos. |
| Tono | Cálido pero serio; premium sin ser frío; verde bottle, no neón |

**Logo**

- Wordmark: `Q-Pay` en Outfit, peso medio, color blanco o secondary.
- Marca gráfica: letra **Q** blanca dentro de un círculo glass (borde sutil, blur, gradiente glass). Alternativa: asset `/assets/logo.png`.
- En la preview, la marca debe ser **hero-level** (grande, centrada o dominante), no un favicon en la esquina.

---

## Sistema visual

### Color

| Token | Hex / valor | Uso |
|-------|-------------|-----|
| Background | `#000000` | Lienzo principal |
| BG soft top / bottom | `#030303` → `#0a1a15` | Atmósfera (casi negro con tinte bottle) |
| Bottle top | `#1a4a38` | CTA primario, acentos de profundidad |
| Bottle bottom | `#0c2e22` | Gradiente bottle, hover CTA |
| Accent green | `#3ecf7a` | Acentos puntuales (nunca flood de pantalla) |
| Accent green muted | `#6b9a7e` | Detalles secundarios |
| Text primary | `#ffffff` | Títulos |
| Text secondary | `rgba(255, 255, 255, 0.55)` | Eyebrow, body suave |
| Text muted | `rgba(255, 255, 255, 0.35)` | Labels |
| CTA text | `#f5f0e3` | Texto sobre botón bottle |
| Border glass | `rgba(255, 255, 255, 0.1)` | Contornos sutiles |
| Border glass strong | `rgba(255, 255, 255, 0.18)` | Contornos más visibles |
| Accent yellow | `#e8c547` | Uso muy limitado (no en OG salvo detalle) |

**Gradiente bottle (referencia):**

```text
linear-gradient(180deg, #1a4a38 0%, #0c2e22 100%)
```

### Tipografía

| Rol | Familia | Peso | Notas |
|-----|---------|------|-------|
| Display / títulos | **Fraunces** (serif) | 500 | Tracking ligeramente negativo; line-height ~1.05 |
| UI / cuerpo | **Outfit** (sans) | 400–500 | Limpia, moderna |

Si la IA de imagen no puede cargar fonts reales, imitar: serif elegante para el headline + sans geométrica limpia para “Q-Pay” y subtítulos.

### Forma y materiales

- **Glass:** superficies casi transparentes, borde blanco al 10%, sombra profunda `0 8px 32px rgba(0,0,0,0.4)`.
- **Radios:** sm 12px, md 20px, lg 28px; CTAs en **pill** (`999px`).
- **No cards densas** en la preview: la web evita look de dashboard en el primer viewport.

### Mood / dirección artística

- Negro como base; profundidad con bottle green oscuro.
- Foto o atmósfera real (confianza humana / dinero informal / gesto cotidiano), no abstracción púrpura genérica.
- Overlay oscuro sobre imagen para que el texto blanco lea bien.
- Evitar: purple-on-white, glow neón, crema+terracotta, look “AI default”, emojis, multi-layer shadows exagerados.

---

## Composición de la landing (referencia)

El primer viewport es **una sola composición**, no un dashboard:

1. Fondo full-bleed (foto o atmósfera) + overlay negro degradado.
2. Eyebrow: logo glass + “Q-Pay”.
3. Headline Fraunces grande, centrado.
4. Una frase de apoyo (Outfit).
5. CTA bottle pill (“Waitlist”) + link secundario subrayado.

La OG image debe evocar **ese** look: marca + un mensaje + atmósfera dark bottle — no una captura de la app.

---

## Specs: imagen de preview social (OG)

| Spec | Valor |
|------|--------|
| Tamaño | **1200 × 630 px** (ratio ~1.91:1) |
| Formato de entrega | PNG o JPG de alta calidad; WebP opcional |
| Nombre sugerido | `public/assets/og-preview.png` (o `.jpg`) |
| Safe zone | Mantener logo + texto dentro del ~80% central (WhatsApp/Instagram recortan bordes) |
| Texto máximo | Marca + **una** línea de headline (opcional: media línea de support) |
| Contraste | Texto blanco sobre negro / bottle oscuro; legible a ~200px de ancho (thumbnail) |

### Debe incluir

- Nombre **Q-Pay** dominante.
- Un headline corto alineado a la marca, por ejemplo:
  - `Presta con confianza`
  - o `Finanzas informales simplificadas`
- Atmósfera dark + bottle green.
- Marca gráfica (Q glass o logo) visible.

### No incluir

- Párrafos largos, listas, precios, stats.
- Mockups de dashboard, tablas, UI densa.
- Badges flotantes, stickers, “New!”, QR ilegible a tamaño thumbnail.
- Gradientes purple/indigo genéricos.
- Más de ~8–10 palabras de copy en total (además del nombre).

### Copy recomendado en la imagen

```text
Q-Pay
Presta con confianza,
sin dolores de cabeza
```

Alternativa más corta:

```text
Q-Pay
Finanzas informales simplificadas
```

---

## Prompt listo para pegar (generación de imagen)

Usa este bloque tal cual (o con el modelo de imagen que prefieras):

```text
Create a social link preview / Open Graph image, exactly 1200x630 pixels.

Brand: Q-Pay — dark fintech for informal peer lending made simple.

Visual system:
- Deep black background (#000) with subtle bottle-green atmosphere (#1a4a38 to #0c2e22), not neon
- Accent green #3ecf7a used sparingly only as a tiny highlight if needed
- White typography; secondary text soft white ~55% opacity
- Display headline in an elegant serif like Fraunces (medium weight, tight tracking)
- Brand name in a clean geometric sans like Outfit
- Optional: circular glass “Q” mark (frosted glass circle, thin white border, white Q)

Composition (one clear composition, not a dashboard):
- Centered brand-first layout
- Large “Q-Pay” as the hero brand signal
- Headline under it: “Presta con confianza, sin dolores de cabeza”
- Full-bleed dark photographic or atmospheric feel with a soft black gradient overlay so text stays readable
- Generous padding; keep all text in the central safe zone
- No UI cards, no app screenshots, no purple gradients, no glow spam, no emojis, no floating badges

Mood: trusted, calm, premium LATAM fintech; bottle green, not startup purple.
High contrast so it remains legible as a small WhatsApp/Instagram link thumbnail.
```

### Prompt corto (si el modelo tiene límite de tokens)

```text
1200x630 OG image for Q-Pay. Black canvas, bottle-green (#1a4a38/#0c2e22) atmosphere, white Fraunces-style headline “Presta con confianza, sin dolores de cabeza”, Outfit-style “Q-Pay” brand mark large and centered, optional glass circle Q logo. Dark, calm fintech. No dashboard, no purple, no clutter. Safe zone center. High contrast for WhatsApp thumbnail.
```

---

## Checklist de validación

Antes de publicar el asset:

- [ ] Exactamente **1200×630** (o mayor con el mismo ratio).
- [ ] “Q-Pay” legible a tamaño thumbnail (~200px de ancho).
- [ ] Headline legible; no más de una idea.
- [ ] Colores alineados a negro + bottle green + acento `#3ecf7a` mínimo.
- [ ] No parece un dashboard ni una plantilla purple genérica.
- [ ] Safe zone: nada crítico pegado a los bordes.
- [ ] Tras generar: colocar en `public/assets/` y actualizar `og:image` (y preferible URL absoluta en producción) en `index.html`.

---

## Referencias en el repo

| Qué | Dónde |
|-----|--------|
| Tokens CSS | `src/index.css` |
| Hero layout / tipografía | `src/components/landing/HeroSection.tsx`, `HeroSection.css` |
| Logo glass | `src/components/QLogo.tsx`, `QLogo.css` |
| Meta OG | `index.html` |
| Pitch theme (misma paleta) | `public/pitch/css/qpay-theme.css` |
| Producto / copy | `.agents/product-marketing.md` |
