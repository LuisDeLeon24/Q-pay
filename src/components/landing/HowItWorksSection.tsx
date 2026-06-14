import './HowItWorksSection.css'

const STEPS = [
  {
    step: 1,
    title: 'Inicia sesión',
    description: 'Entra con Gmail y completa tu registro en segundos.',
    image: '/assets/landing/step-login.png',
  },
  {
    step: 2,
    title: 'Genera tu oferta',
    description: 'Define monto, plazo e interés. Tú decides las condiciones.',
    image: '/assets/landing/step-generate.png',
  },
  {
    step: 3,
    title: 'Comparte el QR',
    description: 'Envía el código para que la otra persona acepte tu oferta.',
    image: '/assets/landing/step-qr.png',
  },
  {
    step: 4,
    title: 'Da seguimiento',
    description: 'Revisa cuotas, progreso y estado de cada préstamo.',
    image: '/assets/landing/step-dashboard.png',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="how-section">
      <div className="how-header animate-fade-up">
        <h2>Cómo funciona</h2>
        <p>De un acuerdo informal a un plan claro en cuatro pasos.</p>
      </div>

      <div className="how-steps">
        {STEPS.map((item, i) => (
          <div
            key={item.step}
            className={`how-step animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}`}
          >
            <div className="how-step-number">{item.step}</div>
            <div className="how-step-image-wrap">
              <img src={item.image} alt={item.title} className="how-step-image" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
