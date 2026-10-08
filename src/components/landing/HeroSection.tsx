import QLogo from '../QLogo'
import { DEMO_MAILTO, PROTOTYPE_PATH } from '../../lib/contact'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/assets/landing/pexels-silverkblack-36729509.webp"
          alt=""
          className="hero-media-img"
        />
        <div className="hero-media-overlay" />
      </div>

      <div className="hero-inner">
        <span className="hero-eyebrow animate-fade-up">
          <QLogo size="sm" variant="glass" />
          Q-Pay
        </span>

        <h1 className="hero-title animate-fade-up animate-fade-up-delay-1">
          Presta con confianza,
          <br />
          sin dolores de cabeza
        </h1>

        <p className="hero-tagline animate-fade-up animate-fade-up-delay-2">
          Formaliza los préstamos de palabra sin salir de tu banca en línea.
          Gratis para ti; tu banco lo integra.
        </p>

        <div className="hero-actions animate-fade-up animate-fade-up-delay-3">
          <a href={DEMO_MAILTO} className="hero-cta">
            Agenda una demo
          </a>
          <a href={PROTOTYPE_PATH} className="hero-download" download="Q-Pay.apk">
            Ver el prototipo
          </a>
        </div>

        <p className="hero-stage animate-fade-up animate-fade-up-delay-4">
          Prototipo para Android (demo), en validación. Sin ingresos todavía.
          Siguiente paso: un piloto con un banco o cooperativa en Guatemala.
        </p>
      </div>
    </section>
  )
}
