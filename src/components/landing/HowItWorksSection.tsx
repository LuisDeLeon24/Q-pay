import { useState } from 'react'
import './HowItWorksSection.css'

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M5 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" stroke="currentColor" />
  </svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
    <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FLOWS = {
  borrower: {
    label: 'Solicitante',
    steps: [
      {
        icon: <UserIcon />,
        title: 'Crea tu cuenta e ingresa tu perfil',
        description: 'Regístrate en segundos y completa tu información para generar tu score.',
      },
      {
        icon: <TargetIcon />,
        title: 'Define tu meta de financiamiento',
        description: 'Indica cuánto necesitas y el plazo. Recibirás condiciones justas a tu perfil.',
      },
      {
        icon: <ShieldIcon />,
        title: 'Conecta y opera de forma segura',
        description: 'Acepta la oferta, firma el contrato digital y gestiona tus pagos desde la app.',
      },
    ],
  },
  investor: {
    label: 'Inversor',
    steps: [
      {
        icon: <UserIcon />,
        title: 'Crea tu cuenta e ingresa tu perfil',
        description: 'Regístrate y verifica tu identidad para empezar a invertir con confianza.',
      },
      {
        icon: <SearchIcon />,
        title: 'Elige dónde invertir',
        description: 'Explora solicitudes con su score de riesgo y arma un portafolio diversificado.',
      },
      {
        icon: <ShieldIcon />,
        title: 'Conecta y opera de forma segura',
        description: 'Fondea con contratos digitales y sigue tus rendimientos en tiempo real.',
      },
    ],
  },
} as const

type FlowKey = keyof typeof FLOWS

export default function HowItWorksSection() {
  const [active, setActive] = useState<FlowKey>('borrower')
  const flow = FLOWS[active]

  return (
    <section id="como-funciona" className="how-section">
      <div className="how-header animate-fade-up">
        <h2>
          Así de simple.{' '}
          <span className="how-header-muted">
            Tres pasos para empezar, ya sea que busques financiamiento o quieras
            invertir.
          </span>
        </h2>
      </div>

      <div className="how-toggle animate-fade-up" role="tablist" aria-label="Perfil">
        {(Object.keys(FLOWS) as FlowKey[]).map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            className={`how-toggle-btn ${active === key ? 'active' : ''}`}
            onClick={() => setActive(key)}
          >
            {FLOWS[key].label}
          </button>
        ))}
      </div>

      <div className="how-steps" key={active}>
        {flow.steps.map((step, i) => (
          <div
            key={step.title}
            className={`how-step animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}`}
          >
            <span className="how-step-icon">{step.icon}</span>
            <p className="how-step-text">
              <strong>{step.title}.</strong> {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
