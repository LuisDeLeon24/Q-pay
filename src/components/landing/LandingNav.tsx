import { Link } from 'react-router-dom'
import QLogo from '../QLogo'
import './LandingNav.css'

const NAV_LINKS = [
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#faq', label: 'FAQ' },
]

export default function LandingNav() {
  return (
    <nav className="landing-nav">
      <Link to="/" className="landing-nav-brand">
        <QLogo size="sm" />
        <span>Q-Pay</span>
      </Link>

      <div className="landing-nav-links">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="landing-nav-link">
            {link.label}
          </a>
        ))}
      </div>

      <div className="landing-nav-actions">
        <a
          href="/app-release.apk"
          download="Q-Pay.apk"
          className="landing-nav-download"
        >
          Descargar app
        </a>
        <Link to="/app/login" className="landing-nav-cta">
          Iniciar sesión
        </Link>
      </div>
    </nav>
  )
}
