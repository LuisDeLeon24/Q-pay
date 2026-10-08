import { DEMO_MAILTO } from '../../lib/contact'
import './ValuePropSection.css'

const SIDES = [
  {
    id: 'bancos',
    variant: 'banks',
    tag: 'Para bancos y cooperativas',
    title: 'Un módulo en tu banca en línea',
    description:
      'Q-Pay no presta, no capta y no mueve dinero. Tú verificas al cliente (KYC/AML) y ejecutas las transferencias. Q-Pay registra el acuerdo, envía recordatorios y concilia cuotas. Pagas una licencia fija, más una tarifa por uso.',
    points: [
      'Llegas a personas fuera del sistema',
      'Más transferencias dentro de tu banco',
      'Historial de pagos de clientes sin historial crediticio',
      'Integración modular, sin riesgo de crédito para el banco ni para Q-Pay',
    ],
    image: '/assets/landing/step-generate.png',
    stat: { value: 'B2B2C', label: 'Licencia fija + tarifa por uso' },
  },
  {
    id: 'personas',
    variant: 'people',
    tag: 'Para personas',
    title: 'El préstamo queda claro para los dos',
    description:
      'Formalizas un préstamo de palabra sin salir de la app de tu banco. Quien presta y quien recibe ven el mismo acuerdo.',
    points: [
      'Sin descargar otra app',
      'Sin cobrar incómodo',
      'Todo queda claro para ambos',
      'Gratis para ti',
    ],
    image: '/assets/landing/step-dashboard.png',
    stat: { value: 'Gratis', label: 'Para quien presta y quien recibe' },
  },
] as const

export default function ValuePropSection() {
  return (
    <section className="value-section">
      <div className="value-header animate-fade-up">
        <h2>
          Una licencia para el banco.{' '}
          <span className="value-header-muted">Gratis para ti.</span>
        </h2>
        <a href={DEMO_MAILTO} className="value-header-cta">
          Agenda una demo
        </a>
      </div>

      <div className="value-showcases">
        {SIDES.map((side, i) => (
          <article
            key={side.id}
            id={side.id}
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
          </article>
        ))}
      </div>
    </section>
  )
}
