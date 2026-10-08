import { Link } from 'react-router-dom'
import QLogo from '../QLogo'
import { DEMO_MAILTO, PROTOTYPE_PATH } from '../../lib/contact'
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
            Préstamos entre conocidos, integrados en tu banca en línea.
          </p>
        </div>

        <div className="landing-footer-columns">
          <div className="landing-footer-col">
            <h4>Producto</h4>
            <a href="#problema">El problema</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#bancos">Para bancos</a>
            <a href="#personas">Para personas</a>
            <a href="#seguridad">Seguridad</a>
            <a href="#equipo">Equipo</a>
          </div>

          <div className="landing-footer-col">
            <h4>Instituciones</h4>
            <a href={DEMO_MAILTO}>Agenda una demo</a>
            <a href={PROTOTYPE_PATH} download="Q-Pay.apk">
              Prototipo para Android (demo)
            </a>
            <a href="#contacto">Contacto</a>
          </div>

          <div className="landing-footer-col">
            <h4>Legal</h4>
            <Link to="/terminos">Términos</Link>
            <Link to="/privacidad">Política de privacidad</Link>
          </div>
        </div>
      </div>

      <div className="landing-footer-bottom">
        <p>&copy; {new Date().getFullYear()} Q-Pay. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
