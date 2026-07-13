import { Link } from 'react-router-dom'
import QLogo from '../QLogo'
import './LandingFooter.css'

export default function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="landing-footer-inner">
        <div className="landing-footer-brand">
          <Link to="/" className="landing-footer-logo">
            <QLogo size="sm" />
            <span>Q-Pay</span>
          </Link>
          <p className="landing-footer-tagline">
            Finanzas informales, estandarizadas.
          </p>
        </div>

        <div className="landing-footer-columns">
          <div className="landing-footer-col">
            <h4>Producto</h4>
            <a href="#valor">Propuesta de valor</a>
            <a href="#features">Características</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#seguridad">Seguridad</a>
            <Link to="/waitlist">Waitlist</Link>
          </div>

          <div className="landing-footer-col">
            <h4>Descargar</h4>
            <a href="/app-release.apk" download="Q-Pay.apk">
              App Android (APK)
            </a>
          </div>

          <div className="landing-footer-col">
            <h4>Legal</h4>
            <a href="https://q-pay.ldeleon.com/">q-pay.ldeleon.com</a>
          </div>
        </div>
      </div>

      <div className="landing-footer-bottom">
        <p>&copy; {new Date().getFullYear()} Q-Pay. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
