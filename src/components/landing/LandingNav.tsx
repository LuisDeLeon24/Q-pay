import { Link } from 'react-router-dom'
import './LandingNav.css'

const WAITLIST_URL = 'mailto:hola@qpay.app?subject=Join%20Waitlist'

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
        <a href={WAITLIST_URL} className="landing-nav-cta">
          Waitlist
        </a>
      </div>
    </nav>
  )
}
