import './HowItWorksSection.css'

const STEPS = [
  {
    title: 'Quien presta crea el préstamo',
    description:
      'Desde la app de su banco define monto, plazo y cuotas, y envía la solicitud.',
  },
  {
    title: 'Quien recibe acepta',
    description:
      'El acuerdo queda registrado: un acuerdo digital aceptado por ambas partes.',
  },
  {
    title: 'El banco desembolsa',
    description: 'Lo hace con una transferencia normal.',
  },
  {
    title: 'Llegan los recordatorios',
    description: 'Q-Pay avisa de forma automática antes de cada cuota.',
  },
  {
    title: 'Quien recibe paga',
    description: 'Paga desde la misma app y Q-Pay marca la cuota como pagada.',
  },
  {
    title: 'Ambos ven el saldo',
    description: 'Saldo e historial, en todo momento.',
  },
] as const

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="how-section">
      <div className="how-header animate-fade-up">
        <h2>
          Así funciona, dentro de la app del banco.{' '}
          <span className="how-header-muted">
            Seis pasos. Q-Pay registra el acuerdo; el banco mueve el dinero.
          </span>
        </h2>
      </div>

      <ol className="how-steps">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className={`how-step animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}`}
          >
            <span className="how-step-num">{String(i + 1).padStart(2, '0')}</span>
            <p className="how-step-text">
              <strong>{step.title}.</strong> {step.description}
            </p>
          </li>
        ))}
      </ol>

      <p className="how-note">El dinero siempre lo mueve tu banco.</p>
    </section>
  )
}
