import './SecuritySection.css'

const PILLARS = [
  {
    quote:
      'Tu información personal y financiera se cifra de extremo a extremo y se almacena bajo estándares de la industria.',
    title: 'Protección de datos',
    tag: 'Cifrado y privacidad',
  },
  {
    quote:
      'Cada préstamo e inversión queda respaldado por un contrato digital claro que ambas partes aceptan y firman.',
    title: 'Contratos digitales',
    tag: 'Acuerdos vinculantes',
  },
  {
    quote:
      'Operamos dentro del marco normativo vigente para proteger por igual a solicitantes e inversores.',
    title: 'Cumplimiento legal',
    tag: 'Marco regulatorio',
  },
  {
    quote:
      'Infraestructura confiable y monitoreada que garantiza la trazabilidad de cada transacción.',
    title: 'Respaldo técnico',
    tag: 'Trazabilidad total',
  },
]

export default function SecuritySection() {
  return (
    <section id="seguridad" className="security-section">
      <div className="security-head animate-fade-up">
        <span className="security-eyebrow">Confianza primero</span>
        <h2>
          Seguridad y transparencia
          <br />
          en cada operación
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
