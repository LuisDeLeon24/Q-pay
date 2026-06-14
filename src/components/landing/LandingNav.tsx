import { Link } from 'react-router-dom'
import QLogo from '../QLogo'
import './LandingNav.css'

export default function LandingNav() {
  return (
    <nav className="landing-nav">
      <Link to="/" className="landing-nav-brand">
        <QLogo size="sm" />
        <span>Q-Pay</span>
      </Link>
      <Link to="/app/login" className="landing-nav-cta">
        Iniciar sesión
      </Link>
    </nav>
  )
}
