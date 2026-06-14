import GlassCard from '../GlassCard'
import './BenefitsSection.css'

const BENEFITS = [
  {
    problem: 'Se me olvida quién me debe',
    solution: 'Dashboard con tabs Prestado y Debido, con progreso visible de cada cuota.',
  },
  {
    problem: 'Los acuerdos de palabra generan conflictos',
    solution: 'Documenta monto, plazo e interés desde el inicio. Todo queda claro para ambos.',
  },
  {
    problem: 'Es incómodo cobrar a un familiar',
    solution: 'Cuotas definidas y estado visible (Pendiente, % pagado) sin tener que recordarlo tú.',
  },
  {
    problem: 'Compartir una oferta es complicado',
    solution: 'Genera un QR y un código único para que la otra persona acepte al instante.',
  },
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="benefits-section">
      <div className="benefits-header animate-fade-up">
        <h2>Menos malentendidos, más confianza</h2>
        <p>
          Entre familiares y amigos, un préstamo informal puede complicarse. Q-Pay te ayuda a
          poner orden sin perder la cercanía.
        </p>
      </div>

      <div className="benefits-list">
        {BENEFITS.map((item, i) => (
          <GlassCard
            key={item.problem}
            className={`benefit-card animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}`}
          >
            <p className="benefit-problem">{item.problem}</p>
            <p className="benefit-solution">{item.solution}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
