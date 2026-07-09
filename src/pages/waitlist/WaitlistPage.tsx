import { useState } from 'react'
import { Link } from 'react-router-dom'
import QLogo from '../../components/QLogo'
import { submitWaitlist } from '../../lib/waitlist'
import './WaitlistPage.css'

type Role = 'solicitante' | 'inversor'
type Status = 'idle' | 'loading' | 'success' | 'error'

const ROLES: { id: Role; label: string }[] = [
  { id: 'solicitante', label: 'Solicitante' },
  { id: 'inversor', label: 'Inversor' },
]

const SURVEY: { id: string; label: string; options: { id: string; label: string }[] }[] = [
  {
    id: 'interest',
    label: '¿Qué tan interesado estás en una app de préstamos entre personas?',
    options: [
      { id: 'muy', label: 'Muy interesado' },
      { id: 'algo', label: 'Algo interesado' },
      { id: 'curioso', label: 'Solo curioso' },
    ],
  },
  {
    id: 'experience',
    label: '¿Has prestado o pedido dinero entre familia o amigos?',
    options: [
      { id: 'presto', label: 'He prestado' },
      { id: 'pedido', label: 'He pedido' },
      { id: 'ambos', label: 'Ambos' },
      { id: 'nunca', label: 'Nunca' },
    ],
  },
  {
    id: 'concern',
    label: '¿Qué es lo que más te cuesta al prestar o pedir?',
    options: [
      { id: 'impago', label: 'Que no me paguen' },
      { id: 'registro', label: 'Llevar el registro' },
      { id: 'cobrar', label: 'Cobrar sin incomodar' },
      { id: 'tasas', label: 'Tasas justas' },
    ],
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Responde 3 preguntas',
    desc: 'Cuéntanos tu experiencia con préstamos entre personas.',
  },
  {
    step: '02',
    title: 'Ayudas a validar Q-Pay',
    desc: 'Tus respuestas definen qué construimos primero.',
  },
  {
    step: '03',
    title: 'Te avisamos al lanzar',
    desc: 'Acceso anticipado para quienes participaron en Q3 2026.',
  },
]

const QUOTES = [
  {
    quote:
      'Cada préstamo e inversión queda respaldado por un contrato digital claro que ambas partes aceptan y firman.',
    tag: 'Contratos digitales',
  },
  {
    quote:
      'Infraestructura confiable y monitoreada que garantiza la trazabilidad de cada transacción.',
    tag: 'Trazabilidad total',
  },
]

function ValidationForm({
  email,
  answers,
  role,
  onEmailChange,
  onAnswerChange,
  onRoleChange,
  onSubmit,
  status,
  errorMsg,
  idPrefix,
}: {
  email: string
  answers: Record<string, string>
  role: Role
  onEmailChange: (value: string) => void
  onAnswerChange: (questionId: string, value: string) => void
  onRoleChange: (value: Role) => void
  onSubmit: (e: React.FormEvent) => void
  status: Status
  errorMsg: string
  idPrefix: string
}) {
  const allAnswered = SURVEY.every((q) => answers[q.id])
  const canSubmit = email.trim() && allAnswered

  return (
    <form className="waitlist-form" onSubmit={onSubmit}>
      {SURVEY.map((q) => (
        <fieldset key={`${idPrefix}-${q.id}`} className="waitlist-field">
          <legend>{q.label}</legend>
          <div className="waitlist-options">
            {q.options.map((opt) => (
              <button
                type="button"
                key={opt.id}
                className={`waitlist-option ${answers[q.id] === opt.id ? 'active' : ''}`}
                onClick={() => onAnswerChange(q.id, opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </fieldset>
      ))}

      <label className="waitlist-field" htmlFor={`${idPrefix}-email`}>
        <span>Correo</span>
        <input
          id={`${idPrefix}-email`}
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="tucorreo@ejemplo.com"
          autoComplete="email"
          required
        />
      </label>

      <fieldset className="waitlist-field">
        <legend>Me interesa como</legend>
        <div className="waitlist-roles" role="radiogroup" aria-label="Perfil">
          {ROLES.map((r) => (
            <button
              type="button"
              key={r.id}
              role="radio"
              aria-checked={role === r.id}
              className={`waitlist-role ${role === r.id ? 'active' : ''}`}
              onClick={() => onRoleChange(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>
      </fieldset>

      {status === 'error' && <p className="waitlist-error">{errorMsg}</p>}

      <button type="submit" className="waitlist-submit" disabled={status === 'loading' || !canSubmit}>
        {status === 'loading' ? 'Enviando…' : 'Enviar respuesta →'}
      </button>
    </form>
  )
}

function SuccessView({ alreadyRegistered }: { alreadyRegistered: boolean }) {
  return (
    <div className="waitlist-success-card animate-fade-up">
      <div className="waitlist-success-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
          <path
            d="M5 12.5L10 17.5L19 7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="waitlist-success-title">
        {alreadyRegistered ? 'Ya habíamos recibido tu respuesta' : '¡Gracias por tu respuesta!'}
      </h1>
      <p className="waitlist-success-sub">
        {alreadyRegistered
          ? 'Tu opinión ya está registrada. Te avisaremos cuando Q-Pay esté disponible.'
          : 'Tu opinión nos ayuda a construir Q-Pay. Te avisaremos en cuanto abramos el acceso.'}
      </p>
      <Link to="/" className="waitlist-home-link">
        Volver al inicio
      </Link>
    </div>
  )
}

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [role, setRole] = useState<Role>('solicitante')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    const trimmedEmail = email.trim().toLowerCase()
    const allAnswered = SURVEY.every((q) => answers[q.id])

    if (!trimmedEmail || !allAnswered) {
      setStatus('error')
      setErrorMsg('Responde las 3 preguntas y deja tu correo.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    const { ok, alreadyRegistered: duplicate, error } = await submitWaitlist({
      email: trimmedEmail,
      role,
      interest: answers.interest,
      experience: answers.experience,
      concern: answers.concern,
    })

    if (!ok) {
      setStatus('error')
      setErrorMsg(error ?? 'No pudimos guardar tu respuesta.')
      return
    }

    setAlreadyRegistered(duplicate)
    setStatus('success')
    setEmail('')
    setAnswers({})
    setRole('solicitante')
  }

  if (status === 'success') {
    return (
      <div className="waitlist-page">
        <header className="waitlist-page-header">
          <Link to="/" className="waitlist-page-brand">
            <QLogo size="sm" variant="glass" />
            Q-Pay
          </Link>
        </header>
        <main className="waitlist-success-main">
          <SuccessView alreadyRegistered={alreadyRegistered} />
        </main>
      </div>
    )
  }

  return (
    <div className="waitlist-page">
      <header className="waitlist-page-header">
        <Link to="/" className="waitlist-page-brand">
          <QLogo size="sm" variant="glass" />
          Q-Pay
        </Link>
      </header>

      <section className="waitlist-hero">
        <div className="waitlist-hero-inner animate-fade-up">
          <span className="waitlist-eyebrow">Validación de producto</span>
          <h1 className="waitlist-hero-title">
            Presta e invierte entre personas,
            <br />
            sin perseguir pagos
          </h1>
          <p className="waitlist-hero-sub">
            Q-Pay conecta préstamos P2P con contratos digitales y seguimiento de
            cuotas. Cuéntanos tu experiencia — son 3 preguntas y tu correo.
          </p>

          <ValidationForm
            idPrefix="hero"
            email={email}
            answers={answers}
            role={role}
            onEmailChange={setEmail}
            onAnswerChange={handleAnswerChange}
            onRoleChange={setRole}
            onSubmit={handleSubmit}
            status={status}
            errorMsg={errorMsg}
          />
        </div>
      </section>

      <section className="waitlist-section waitlist-how">
        <div className="waitlist-section-inner">
          <h2 className="waitlist-section-title">Cómo funciona</h2>
          <div className="waitlist-steps">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="waitlist-step">
                <span className="waitlist-step-num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="waitlist-section waitlist-quotes">
        <div className="waitlist-section-inner">
          <h2 className="waitlist-section-title">Por qué Q-Pay</h2>
          <div className="waitlist-quote-grid">
            {QUOTES.map((q) => (
              <blockquote key={q.tag} className="waitlist-quote">
                <p>{q.quote}</p>
                <footer>{q.tag}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <footer className="waitlist-footer">
        <Link to="/">Inicio</Link>
      </footer>
    </div>
  )
}
