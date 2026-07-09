import { Link } from 'react-router-dom'
import { useWaitlist } from '../waitlist/WaitlistContext'
import './LandingNav.css'

export default function LandingNav() {
  const { open } = useWaitlist()

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
        <button type="button" onClick={open} className="landing-nav-cta">
          Waitlist
        </button>
      </div>
    </nav>
  )
}
