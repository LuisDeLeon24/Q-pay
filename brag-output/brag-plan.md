# Brag Plan: Q-Pay

## What is this app?
Q-Pay formaliza los préstamos entre familia y amigos: defines monto, plazo e interés, compartes la oferta por QR, la otra persona la acepta y cada cuota se sigue sola — y para el banco, esa red de confianza se vuelve su canal de adquisición más barato.

## The angle
**"Telenovela del cobro incómodo."** Todo latinoamericano conoce el capítulo: le prestaste a alguien cercano, le escribes "¿y lo que te presté?", te deja en visto y la relación se tensa. El video abre como un episodio de telenovela ("Capítulo 47: Mario todavía no paga") contado con un chat real, y Q-Pay entra como el giro de guion: el mismo préstamo, ahora con estructura. El final feliz no es "Mario pagó" solamente — es "Mario pagó. La amistad sigue." Específico a LATAM, a la encuesta de waitlist ("Que no me paguen", "Cobrar sin incomodar") y al producto real.

## Hook (first 2-3 seconds)
Pantalla negra con tinte bottle. Etiqueta serif pequeña "Capítulo 47" sobre un chat: aparece el mensaje de Luis **"Oye Mario… ¿y los $100?"**, abajo un "Visto 11:47 p.m.", luego "Mario está escribiendo…" que desaparece sin respuesta. El silencio incómodo es el gancho.

## Key moments (the middle)
- El logo Q-Pay aterriza con el titular real: "Presta con confianza, sin dolores de cabeza".
- Pantalla **Generar** real: se teclea `$100`, plazo `10 meses`, interés `0%`; el botón flecha se presiona.
- Pantalla **Detalle** real: Monto $100 · Plazo 10 cuotas · Cuota $10 · Interés 0% + el **QR**; un visor de escaneo lo barre y entra la tarjeta "Mario ha aceptado tu oferta de: $100".
- **Dashboard** real: fila "Mario – 10 cuotas", el anillo de progreso sube 10% → 100% mientras `$10/100` cuenta a `$100/100`.

## Outro / punchline
"Mario pagó. La amistad sigue." → lockup final: logo Q-Pay, "Presta con confianza, sin dolores de cabeza", línea B2B pequeña "Préstamos entre personas, dentro de tu banco." y `q-pay.ldeleon.com`.

## User flow worth showing
Generar oferta ($100, 10 meses, 0%) → compartir QR y que Mario lo acepte → seguimiento automático de cuotas hasta 100%.

## Tone
- Preset: default
- Creative direction: telenovela latina del cobro incómodo, resuelta con calma premium
- Interpretation: el hook se juega como drama doméstico (serif, "Capítulo 47", silencio), luego el producto entra limpio y seguro; humor desde la situación, no desde chistes. Transiciones limpias, ritmo cómodo, holds legibles.

## Format: landscape — 1920x1080
## Duration: 21.5s

## Visual identity (from the project)
- Background: `#000000` con atmósfera `#030303` → `#0a1a15` (radial, nunca lineal full-screen)
- Accent: `#3ecf7a` (puntual), bottle `#1a4a38` / `#0c2e22`, muted `#6b9a7e`
- Text: `#ffffff`, secundario `rgba(255,255,255,0.55)`
- Display font: Fraunces 500 (titulares, "Capítulo 47")
- Body font: Outfit 300–600 (UI de la app, labels)
- Strongest visual element: las pantallas reales de la app (Generar / Detalle con QR / Dashboard con anillo de progreso) en superficies glass sobre negro-bottle.

## Share copy (draft)
Capítulo 47: Mario todavía no paga. Hicimos Q-Pay para que prestarle a tu familia no arruine la familia — oferta por QR, cuotas con seguimiento automático, dentro de tu banco.

## Audio direction
- Role: warm bed + sparse professional accents
- Music: `happy-beats-business-moves-vol-9-by-ende-dot-app.mp3` (mid-energy, 114.84 BPM)
- Music treatment: entra muy bajo durante el hook (el silencio incómodo manda), sube cuando aterriza el logo (~3.7s), fade-out bajo el lockup final.
- Music cue guidance: preset `assets/music/cues/happy-beats-business-moves-vol-9-by-ende-dot-app.music-cues.json`. Strong cues: **3.70s** (reveal del logo), **6.34s** (entra Generar), **10.54s** (entra Detalle/QR), 12.65s (aceptación de Mario). Beat grid para los ticks del anillo: 15.28, 15.81, 16.34, 16.86 (ticks no-textuales, pueden ir a cada beat).
- Audio-reactive treatment: subtle; el RMS/bajo de la música hace respirar el glow bottle detrás del teléfono. Sin barras ni waveform.
- SFX posture: moderate, motion-matched
- Audio-coupled moments: pop del mensaje de chat, teclas al escribir $100, click del botón flecha, card slide al entrar la aceptación, chips al llenarse el anillo, bell suave en el lockup.
- Restraint rule: nada de SFX en el "visto" (el silencio es el chiste); no más de un bell en todo el video.

## Storyboard

### Scene 1 — Capítulo 47 — 3.7s (0.00–3.70)
Fondo negro-bottle. Arriba a la izquierda "Capítulo 47" en Fraunces itálica + "Mario todavía no paga." A la derecha, un chat: burbuja verde bottle de Luis "Oye Mario… ¿y los $100?" (0.5s), debajo "Visto 11:47 p.m." (1.4s), luego burbuja gris con "escribiendo…" (2.1s) que se desvanece sin respuesta (3.1s).
Sequential/interaction: sí — mensaje entra, visto, typing dots y desaparece.
Audio intent: incomodidad; música casi inaudible.
Audio-coupled idea: pop suave al enviar el mensaje; silencio en el visto.
Transition mood: clean → Scene 2

### Scene 2 — Giro de guion — 2.64s (3.70–6.34)
El logo Q glass + "Q-Pay" aterriza (beat-locked 3.70s); titular Fraunces "Presta con confianza, sin dolores de cabeza".
Sequential/interaction: none
Audio intent: alivio; la música sube.
Audio-coupled idea: impact suave en el reveal.
Transition mood: clean slide → Scene 3

### Scene 3 — Generar — 4.2s (6.34–10.54)
Teléfono con la pantalla Generar real. Izquierda: label "1. Arma la oferta". Se teclea `100` después del `$`, el plazo muestra `10 Meses`, interés `0`. Cursor/tap presiona el botón flecha (~9.9s).
Sequential/interaction: sí — typing del monto con teclas, tap del botón.
Audio intent: acción concreta, ágil.
Audio-coupled idea: keypress por dígito; click en el botón.
Transition mood: clean → Scene 4

### Scene 4 — QR y aceptación — 4.22s (10.54–14.76)
Pantalla Detalle real: Monto $100 (verde muted), Plazo 10 cuotas, Cuota $10, Interés 0%, QR blanco. Izquierda: "2. Comparte el QR". Un visor de esquinas barre el QR; a 12.65s entra la tarjeta glass "Mario ha aceptado tu oferta de: $100 · 10 cuotas · 0% interés".
Sequential/interaction: sí — scan sweep, tarjeta entra.
Audio intent: confirmación.
Audio-coupled idea: card slide al entrar la tarjeta.
Transition mood: clean → Scene 5

### Scene 5 — Seguimiento — 3.68s (14.76–18.44)
Dashboard real: "Hola, Luis", tabs Prestado/Debido, fila "Mario – 10 cuotas". El anillo sube 10% → 100%, `$10/100` → `$100/100`. Izquierda: "3. Cada cuota, sola." y al llenarse: "Mario pagó. La amistad sigue."
Sequential/interaction: sí — contador del anillo.
Audio intent: satisfacción creciente.
Audio-coupled idea: chips stacking en ticks del anillo (beats 15.28–16.86).
Transition mood: soft → Scene 6

### Scene 6 — Lockup — 3.06s (18.44–21.50)
Logo Q-Pay grande, "Presta con confianza, sin dolores de cabeza", línea "Préstamos entre personas, dentro de tu banco.", `q-pay.ldeleon.com`. Hold.
Sequential/interaction: none
Audio intent: cierre cálido; bell suave, música se desvanece.
Transition mood: hold to end

**Music mood for this video:** upbeat-warm
**Audio summary:** casi silencio incómodo en el chat, la música sube con el giro de Q-Pay, acentos de UI siguen el flujo real y un bell suave cierra mientras la música se apaga.

## Privacy note
Nombres "Luis" y "Mario" son los datos mock de la app (`MockAppContext`); no se muestran correos ni datos reales.
