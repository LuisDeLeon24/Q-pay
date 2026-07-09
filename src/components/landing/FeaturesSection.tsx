import './FeaturesSection.css'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
    <path d="M5 12.5L10 17.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function ConnectionVisual() {
  return (
    <svg viewBox="0 0 260 190" fill="none" className="feature-svg" aria-hidden="true">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M1 1L6 4L1 7" stroke="var(--accent-green)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </marker>
      </defs>
      <line x1="96" y1="95" x2="118" y2="95" stroke="var(--accent-green)" strokeWidth="1.4" markerStart="url(#arrow)" />
      <line x1="164" y1="95" x2="142" y2="95" stroke="var(--accent-green)" strokeWidth="1.4" markerStart="url(#arrow)" />
      <circle cx="60" cy="95" r="34" stroke="var(--accent-green)" strokeWidth="1.4" fill="rgba(62,207,122,0.06)" />
      <circle cx="200" cy="95" r="34" stroke="var(--accent-green)" strokeWidth="1.4" fill="rgba(62,207,122,0.06)" />
      <text x="60" y="99" textAnchor="middle" className="feature-node-label">Presta</text>
      <text x="200" y="99" textAnchor="middle" className="feature-node-label">Pide</text>
      <circle cx="130" cy="95" r="17" fill="#0b0f0d" stroke="var(--accent-green)" strokeWidth="1.2" />
      <text x="130" y="99" textAnchor="middle" className="feature-node-mini">QR</text>
    </svg>
  )
}

const AXES = [
  { label: 'Historial', frac: 0.85, anchor: 'middle' },
  { label: 'Ingresos', frac: 0.7, anchor: 'start' },
  { label: 'Puntualidad', frac: 0.6, anchor: 'start' },
  { label: 'Deuda', frac: 0.9, anchor: 'middle' },
  { label: 'Antigüedad', frac: 0.75, anchor: 'end' },
  { label: 'Garantías', frac: 0.65, anchor: 'end' },
] as const

function RadarVisual() {
  const cx = 130
  const cy = 100
  const r = 68
  const pt = (i: number, radius: number) => {
    const a = (-90 + 60 * i) * (Math.PI / 180)
    return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)]
  }
  const outer = AXES.map((_, i) => pt(i, r))
  const score = AXES.map((ax, i) => pt(i, r * ax.frac))
  const ring = (f: number) => AXES.map((_, i) => pt(i, r * f)).map((p) => p.join(',')).join(' ')
  const label = AXES.map((_, i) => pt(i, r + 22))

  return (
    <svg viewBox="0 0 260 200" fill="none" className="feature-svg" aria-hidden="true">
      <polygon points={ring(1)} stroke="var(--border-glass-strong)" strokeWidth="1" fill="none" />
      <polygon points={ring(0.66)} stroke="var(--border-glass)" strokeWidth="1" fill="none" />
      <polygon points={ring(0.33)} stroke="var(--border-glass)" strokeWidth="1" fill="none" />
      {outer.map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} stroke="var(--border-glass)" strokeWidth="1" />
      ))}
      <polygon
        points={score.map((p) => p.join(',')).join(' ')}
        fill="rgba(62,207,122,0.18)"
        stroke="var(--accent-green)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {score.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="2.4" fill="var(--accent-green)" />
      ))}
      {AXES.map((ax, i) => (
        <text
          key={ax.label}
          x={label[i][0]}
          y={label[i][1] + 3}
          textAnchor={ax.anchor}
          className="feature-axis-label"
        >
          {ax.label}
        </text>
      ))}
    </svg>
  )
}

const MANAGE_ITEMS = [
  { label: 'Flujo de efectivo', desc: 'Gráficas de entradas y salidas' },
  { label: 'Recordatorios de pago', desc: 'Nunca olvides una cuota' },
  { label: 'Presupuestos', desc: 'Define y controla tus límites' },
  { label: 'Estado de cuotas', desc: 'Progreso de cada préstamo' },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="features-header animate-fade-up">
        <h2>Características clave</h2>
        <p>Todas las herramientas para prestar, invertir y gestionar en un solo lugar.</p>
      </div>

      <div className="features-grid">
        <div className="feature-card animate-fade-up animate-fade-up-delay-1">
          <div className="feature-top">
            <span className="feature-num">01</span>
            <h3>P2P Lending</h3>
          </div>
          <div className="feature-visual feature-visual--center">
            <ConnectionVisual />
          </div>
          <p className="feature-caption">
            Conexión directa entre personas, sin intermediarios que encarezcan el trato.
          </p>
        </div>

        <div className="feature-card animate-fade-up animate-fade-up-delay-2">
          <div className="feature-top">
            <span className="feature-num">02</span>
            <h3>Gestión financiera integrada</h3>
          </div>
          <div className="feature-visual">
            <ul className="feature-list">
              {MANAGE_ITEMS.map((item) => (
                <li key={item.label}>
                  <div className="feature-list-text">
                    <span className="feature-list-label">{item.label}</span>
                    <span className="feature-list-desc">{item.desc}</span>
                  </div>
                  <span className="feature-list-check">
                    <CheckIcon />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="feature-caption">Todo tu dinero, en un solo tablero.</p>
        </div>

        <div className="feature-card animate-fade-up animate-fade-up-delay-3">
          <div className="feature-top">
            <span className="feature-num">03</span>
            <h3>Evaluación de riesgo Smart</h3>
          </div>
          <div className="feature-visual feature-visual--center">
            <RadarVisual />
          </div>
          <p className="feature-caption">
            Un score transparente que asegura la salud de cada préstamo.
          </p>
        </div>
      </div>
    </section>
  )
}
