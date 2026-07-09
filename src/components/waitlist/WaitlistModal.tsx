import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../../lib/supabase'
import './WaitlistModal.css'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

type Role = 'solicitante' | 'inversor'
type Step = 'survey' | 'form'
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

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [step, setStep] = useState<Step>('survey')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<Role>('solicitante')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      setStep('survey')
      setStatus('idle')
      setErrorMsg('')
    }
  }, [isOpen])

  if (!isOpen) return null

  const allAnswered = SURVEY.every((q) => answers[q.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    const trimmedEmail = email.trim().toLowerCase()
    const trimmedName = name.trim()

    if (!trimmedName || !trimmedEmail) {
      setStatus('error')
      setErrorMsg('Completa tu nombre y correo.')
      return
    }

    if (!isSupabaseConfigured || !supabase) {
      setStatus('error')
      setErrorMsg('La conexión con Supabase no está configurada todavía.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    const { error } = await supabase.from('waitlist').insert({
      name: trimmedName,
      email: trimmedEmail,
      role,
      interest: answers.interest ?? null,
      experience: answers.experience ?? null,
      concern: answers.concern ?? null,
    })

    if (error) {
      setStatus('error')
      if (error.code === '23505') {
        setErrorMsg('Ese correo ya está en la lista. ¡Gracias!')
      } else {
        setErrorMsg('No pudimos guardar tu registro. Inténtalo de nuevo.')
      }
      return
    }

    setStatus('success')
    setAnswers({})
    setName('')
    setEmail('')
    setRole('solicitante')
  }

  return (
    <div className="waitlist-overlay" onClick={onClose} role="presentation">
      <div
        className="waitlist-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="waitlist-close" onClick={onClose} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="waitlist-success">
            <div className="waitlist-success-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                <path d="M5 12.5L10 17.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 id="waitlist-title">¡Estás en la lista!</h2>
            <p>Gracias por tus respuestas. Te avisaremos en cuanto Q-Pay esté disponible.</p>
            <button className="waitlist-submit" onClick={onClose}>
              Listo
            </button>
          </div>
        ) : step === 'survey' ? (
          <>
            <div className="waitlist-head">
              <span className="waitlist-eyebrow">Antes de empezar</span>
              <h2 id="waitlist-title">¿Te interesa una app de préstamos entre personas?</h2>
              <p>
                Q-Pay conecta a quienes prestan e invierten con quienes necesitan
                financiamiento. Cuéntanos un poco para construir algo que de verdad te sirva.
              </p>
            </div>

            <div className="waitlist-survey">
              {SURVEY.map((q) => (
                <div key={q.id} className="waitlist-question">
                  <span className="waitlist-question-label">{q.label}</span>
                  <div className="waitlist-options">
                    {q.options.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`waitlist-option ${answers[q.id] === opt.id ? 'active' : ''}`}
                        onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt.id }))}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="waitlist-actions">
              <button
                type="button"
                className="waitlist-submit"
                disabled={!allAnswered}
                onClick={() => setStep('form')}
              >
                Continuar
              </button>
              <button type="button" className="waitlist-skip" onClick={() => setStep('form')}>
                Prefiero omitir
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="waitlist-head">
              <button type="button" className="waitlist-back" onClick={() => setStep('survey')}>
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M14 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Atrás
              </button>
              <span className="waitlist-eyebrow">Casi listo</span>
              <h2 id="waitlist-title">Únete a la waitlist</h2>
              <p>Déjanos tus datos y te avisamos cuando abramos el acceso.</p>
            </div>

            <form className="waitlist-form" onSubmit={handleSubmit}>
              <label className="waitlist-field">
                <span>Nombre</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="waitlist-field">
                <span>Correo</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  autoComplete="email"
                  required
                />
              </label>

              <div className="waitlist-field">
                <span>Me interesa como</span>
                <div className="waitlist-roles" role="radiogroup" aria-label="Perfil">
                  {ROLES.map((r) => (
                    <button
                      type="button"
                      key={r.id}
                      role="radio"
                      aria-checked={role === r.id}
                      className={`waitlist-role ${role === r.id ? 'active' : ''}`}
                      onClick={() => setRole(r.id)}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {status === 'error' && <p className="waitlist-error">{errorMsg}</p>}

              <button type="submit" className="waitlist-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando…' : 'Unirme a la waitlist'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
