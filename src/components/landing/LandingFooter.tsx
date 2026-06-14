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
            <a href="#beneficios">Beneficios</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#faq">FAQ</a>
            <Link to="/app/login">Empezar gratis</Link>
          </div>

          <div className="landing-footer-col">
            <h4>Descargar</h4>
            <a href="/app-release.apk" download="Q-Pay.apk">
              App Android (APK)
            </a>
            <Link to="/app/login">Versión web</Link>
          </div>

          <div className="landing-footer-col">
            <h4>Legal</h4>
            <Link to="/app/login">Privacidad</Link>
            <Link to="/app/login">Términos</Link>
            <a href="mailto:hola@qpay.app">Contacto</a>
          </div>
        </div>
      </div>

      <div className="landing-footer-bottom">
        <p>&copy; {new Date().getFullYear()} Q-Pay. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
