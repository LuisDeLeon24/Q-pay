import './SecuritySection.css'

const PILLARS = [
  {
    quote:
      'Q-Pay no presta, no capta y no mueve dinero. El banco ejecuta todas las transferencias.',
    title: 'Sin custodia de fondos',
    tag: 'El banco mueve el dinero',
  },
  {
    quote: 'El banco verifica a su cliente. KYC y AML corresponden al banco.',
    title: 'Verificación del cliente',
    tag: 'KYC y AML del banco',
  },
  {
    quote: 'El préstamo queda como un acuerdo digital aceptado por ambas partes.',
    title: 'Acuerdo digital',
    tag: 'Aceptado por ambas partes',
  },
  {
    quote:
      'Diseñado para cumplir con la normativa guatemalteca: el dinero lo mueve tu banco. También está diseñado para normas de riesgo tecnológico y protección de datos.',
    title: 'Cumplimiento',
    tag: 'Diseñado para cumplir',
  },
] as const

export default function SecuritySection() {
  return (
    <section id="seguridad" className="security-section">
      <div className="security-head animate-fade-up">
        <span className="security-eyebrow">Confianza primero</span>
        <h2>
          Seguridad y cumplimiento
          <br />
          en cada acuerdo
        </h2>
      </div>

      <div className="security-grid">
        {PILLARS.map((pillar, i) => (
          <div
            key={pillar.title}
            className={`security-card animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}`}
          >
            <p className="security-quote">{pillar.quote}</p>
            <div className="security-meta">
              <span className="security-name">{pillar.title}</span>
              <span className="security-role">{pillar.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
