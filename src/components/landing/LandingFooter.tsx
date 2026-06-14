import { Link } from 'react-router-dom'
import './LandingFooter.css'

export default function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="landing-footer-inner">
        <p className="landing-footer-copy">
          &copy; {new Date().getFullYear()} Q-Pay. Todos los derechos reservados.
        </p>
        <div className="landing-footer-links">
          <Link to="/app/login">Privacidad</Link>
          <Link to="/app/login">Términos</Link>
        </div>
      </div>
    </footer>
  )
}
