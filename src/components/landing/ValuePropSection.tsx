import { useWaitlist } from '../waitlist/WaitlistContext'
import './ValuePropSection.css'

const SIDES = [
  {
    variant: 'borrower',
    tag: 'Para solicitantes',
    title: 'Consigue el préstamo que necesitas',
    description:
      'Accede a capital de forma rápida y sin trámites eternos, con condiciones justas para tu perfil.',
    points: [
      'Acceso rápido a financiamiento cuando lo necesitas',
      'Tasas justas basadas en un score transparente',
      'Herramientas de control de deudas y recordatorios',
    ],
    image: '/assets/landing/step-generate.png',
    stat: { value: '24-48h', label: 'Acceso a financiamiento' },
  },
  {
    variant: 'investor',
    tag: 'Para inversores',
    title: 'Haz crecer tu dinero con propósito',
    description:
      'Invierte directamente en personas de tu comunidad y obtén rendimientos con un riesgo gestionado.',
    points: [
      'Rendimientos atractivos apoyando a personas reales',
      'Impacto directo en tu comunidad, no en un banco',
      'Ecosistema con riesgo evaluado y diversificable',
    ],
    image: '/assets/landing/step-dashboard.png',
    stat: { value: '100%', label: 'Directo a tu comunidad' },
  },
]

export default function ValuePropSection() {
  const { open } = useWaitlist()

  return (
    <section id="valor" className="value-section">
      <div className="value-header animate-fade-up">
        <h2>
          <span className="value-header-muted">Un ecosistema,</span> dos formas
          de ganar
        </h2>
        <button type="button" onClick={open} className="value-header-cta">
          Únete a la waitlist
        </button>
      </div>

      <div className="value-showcases">
        {SIDES.map((side, i) => (
          <div
            key={side.variant}
            className={`value-showcase value-showcase--${side.variant} animate-fade-up animate-fade-up-delay-${i + 1}`}
          >
            <div className="value-media">
              <img src={side.image} alt="" className="value-media-img" />
              <div className="value-stat">
                <span className="value-stat-value">{side.stat.value}</span>
                <span className="value-stat-label">{side.stat.label}</span>
              </div>
            </div>

            <div className="value-panel">
              <span className="value-tag">{side.tag}</span>
              <h3 className="value-panel-title">{side.title}</h3>
              <p className="value-panel-desc">{side.description}</p>
              <ul className="value-panel-list">
                {side.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
