import QLogo from '../QLogo'
import './HeroSection.css'

const WAITLIST_URL = 'mailto:hola@qpay.app?subject=Join%20Waitlist'

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
          Registra préstamos, comparte ofertas con QR y da seguimiento a cada
          cuota — entre familia y amigos.
        </p>

        <div className="hero-actions animate-fade-up animate-fade-up-delay-3">
          <a href={WAITLIST_URL} className="hero-cta">
            Waitlist
          </a>
          <a
            href="/app-release.apk"
            download="Q-Pay.apk"
            className="hero-download"
          >
            Descargar app
          </a>
        </div>
      </div>
    </section>
  )
}
