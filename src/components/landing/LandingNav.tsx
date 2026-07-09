import { Link } from 'react-router-dom'
import './LandingNav.css'

export default function LandingNav() {
  return (
    <nav className="landing-nav">
      <Link to="/" className="landing-nav-brand">
        Q-Pay
      </Link>

      <div className="landing-nav-actions">
        <a
          href="/app-release.apk"
          download="Q-Pay.apk"
          className="landing-nav-download"
        >
          Descargar app
        </a>
        <Link to="/waitlist" className="landing-nav-cta">
          Waitlist
        </Link>
      </div>
    </nav>
  )
}
