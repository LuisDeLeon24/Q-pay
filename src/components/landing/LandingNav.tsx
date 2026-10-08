import { Link } from 'react-router-dom'
import { DEMO_MAILTO, PROTOTYPE_PATH } from '../../lib/contact'
import './LandingNav.css'

export default function LandingNav() {
  return (
    <nav className="landing-nav">
      <Link to="/" className="landing-nav-brand">
        Q-Pay
      </Link>

      <div className="landing-nav-actions">
        <a href={PROTOTYPE_PATH} className="landing-nav-download" download="Q-Pay.apk">
          Ver el prototipo
        </a>
        <a href={DEMO_MAILTO} className="landing-nav-cta">
          Agenda una demo
        </a>
      </div>
    </nav>
  )
}
