import './StatsSection.css'

const STATS = [
  { value: '100%', label: 'Finanzas informales, estandarizadas' },
  { value: '0%', label: 'Comisión en la app' },
  { value: 'QR', label: 'Para compartir ofertas al instante' },
  { value: '24/7', label: 'Seguimiento de cuotas' },
]

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid animate-fade-up">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`stats-item animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}`}
          >
            <span className="stats-value">{stat.value}</span>
            <span className="stats-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
