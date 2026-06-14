import GlassCard from '../GlassCard'
import './FeaturesSection.css'

const FEATURES = [
  {
    title: 'Registrar préstamos informales',
    description: 'Documenta acuerdos entre personas con montos, plazos e interés claros.',
  },
  {
    title: 'Compartir ofertas con QR',
    description: 'Genera un código único para que otros acepten tu oferta al instante.',
  },
  {
    title: 'Seguimiento de cuotas e interés',
    description: 'Visualiza el progreso de cada préstamo y el estado de cada cuota.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <h2 className="features-title animate-fade-up">¿Por qué Q-Pay?</h2>
      <div className="features-grid">
        {FEATURES.map((feature, i) => (
          <GlassCard
            key={feature.title}
            className={`feature-card animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}`}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
