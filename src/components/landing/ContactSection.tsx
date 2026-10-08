import { DEMO_MAILTO, PROTOTYPE_PATH } from '../../lib/contact'
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-inner animate-fade-up">
        <h2>Agenda una demo</h2>
        <p className="contact-lead">
          Si eres banco o cooperativa, vemos juntos un piloto en Guatemala.
        </p>
        <div className="contact-actions">
          <a href={DEMO_MAILTO} className="contact-cta">
            Agenda una demo
          </a>
          <a href={PROTOTYPE_PATH} className="contact-secondary" download="Q-Pay.apk">
            Ver el prototipo
          </a>
        </div>
        <p className="contact-stage">
          Prototipo para Android (demo), en validación. Sin ingresos todavía. Siguiente paso: un
          piloto con un banco o cooperativa en Guatemala.
        </p>
      </div>
    </section>
  )
}
