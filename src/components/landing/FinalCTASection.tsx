import { Link } from 'react-router-dom'
import './FinalCTASection.css'

export default function FinalCTASection() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-inner animate-fade-up">
        <h2>Empieza a organizar tus préstamos hoy</h2>
        <p>
          Estandarizando las finanzas informales y ahorrándote dolores de cabeza.
        </p>
        <div className="final-cta-actions">
          <Link to="/app/login" className="final-cta-primary">
            Empezar gratis
          </Link>
          <a
            href="/app-release.apk"
            download="Q-Pay.apk"
            className="final-cta-secondary"
          >
            Descargar app
          </a>
        </div>
      </div>
    </section>
  )
}
