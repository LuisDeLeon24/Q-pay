import { useState } from 'react'
import './FAQSection.css'

const FAQ_ITEMS = [
  {
    question: '¿Q-Pay cobra comisión?',
    answer:
      'No. Q-Pay no cobra comisión por usar la app. Tú defines el interés de tu préstamo (incluso 0%) directamente con la otra persona.',
  },
  {
    question: '¿Puedo prestar sin interés?',
    answer:
      'Sí. Al generar una oferta puedes poner 0% de interés. Es ideal para préstamos entre familiares o amigos cercanos.',
  },
  {
    question: '¿Cómo comparto una oferta?',
    answer:
      'Genera tu préstamo en la app y comparte el QR o el código único. La otra persona lo escanea o ingresa el código para ver el detalle y aceptar.',
  },
  {
    question: '¿Qué pasa si alguien no paga una cuota?',
    answer:
      'Q-Pay te muestra el progreso y el estado de cada cuota para que tengas claridad. El cobro en sí sigue siendo un acuerdo entre ustedes; la app te ayuda a documentar y dar seguimiento.',
  },
  {
    question: '¿Necesito la app móvil o puedo usar la web?',
    answer:
      'Puedes usar la web desde el navegador o descargar la app Android. Ambas te permiten gestionar préstamos con la misma experiencia.',
  },
  {
    question: '¿Es seguro usar Gmail para entrar?',
    answer:
      'El inicio de sesión con Gmail es la forma prevista de acceder. En esta versión de demostración los datos son de ejemplo; en producción se conectaría con autenticación real de Google.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="faq-section">
      <div className="faq-header animate-fade-up">
        <h2>Preguntas frecuentes</h2>
        <p>Todo lo que necesitas saber antes de empezar.</p>
      </div>

      <div className="faq-list">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={item.question}
              className={`faq-item animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className={`faq-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
