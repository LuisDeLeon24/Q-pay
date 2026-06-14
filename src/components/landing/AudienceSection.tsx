import GlassCard from '../GlassCard'
import './AudienceSection.css'

const PROFILES = [
  {
    title: 'Familia',
    description:
      'Préstamos entre parientes con condiciones claras. Evita malentendidos en reuniones familiares.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 19c0-3 2.2-5 5-5M14 19c0-2.5 1.8-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Amigos cercanos',
    description:
      'Favores con plazo definido. Presta o pide sin que el dinero opaque la amistad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M7 11a4 4 0 118 0 4 4 0 01-8 0z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 19c0-3 3-5 8-5s8 2 8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Compañeros de convivencia',
    description:
      'Gastos compartidos formalizados. Ideal para roommates y gastos del hogar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M4 10L6 4H18L20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="5" y="10" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="14" width="4" height="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function AudienceSection() {
  return (
    <section className="audience-section">
      <div className="audience-header animate-fade-up">
        <h2>Hecho para acuerdos entre personas de confianza</h2>
        <p>
          &ldquo;Estandarizando las finanzas informales y ahorrándote dolores de cabeza&rdquo;
        </p>
      </div>

      <div className="audience-grid">
        {PROFILES.map((profile, i) => (
          <GlassCard
            key={profile.title}
            className={`audience-card animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}`}
          >
            <div className="audience-icon">{profile.icon}</div>
            <h3>{profile.title}</h3>
            <p>{profile.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
