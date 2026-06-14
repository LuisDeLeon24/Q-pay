import { Link } from 'react-router-dom'
import QLogo from '../QLogo'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content animate-fade-up">
        <h1>Bienvenido</h1>
        <p className="hero-tagline">
          &ldquo;Estandarizando las finanzas informales y ahorrándote dolores de cabeza&rdquo;
        </p>
        <div className="hero-actions">
          <Link to="/app/login" className="hero-cta">
            Empezar gratis
          </Link>
          <a
            href="/app-release.apk"
            download="Q-Pay.apk"
            className="hero-download"
          >
            Descargar app
          </a>
        </div>
      </div>

      <div className="hero-visual animate-fade-up animate-fade-up-delay-1">
        <QLogo size="xl" variant="glass" />
        <span className="hero-brand">PAY</span>
      </div>
    </section>
  )
}
