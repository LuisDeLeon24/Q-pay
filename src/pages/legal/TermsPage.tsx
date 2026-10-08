import { Link } from 'react-router-dom'
import { DEMO_MAILTO } from '../../lib/contact'
import QLogo from '../../components/QLogo'
import './LegalPage.css'

export default function TermsPage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <Link to="/" className="legal-brand">
          <QLogo size="sm" variant="glass" />
          Q-Pay
        </Link>
      </header>

      <main className="legal-main">
        <h1>Términos</h1>
        <p className="legal-updated">Octubre 2026</p>

        <p>
          Este sitio describe Q-Pay y ofrece un prototipo de demostración para Android. Q-Pay
          formaliza préstamos entre conocidos como un módulo dentro de la banca en línea de bancos
          y cooperativas.
        </p>

        <h2>Qué es Q-Pay, y qué no es</h2>
        <p>
          Q-Pay no presta, no capta y no mueve dinero. En un piloto, el banco verifica al cliente y
          ejecuta las transferencias. Q-Pay registra el acuerdo, envía recordatorios y concilia
          cuotas.
        </p>
        <p>
          El prototipo está en validación. Todavía no hay ingresos ni un banco integrado en
          producción. Descargarlo no abre una cuenta ni te da un préstamo.
        </p>

        <h2>El acuerdo</h2>
        <p>
          Cuando el producto esté integrado, el préstamo queda como un acuerdo digital aceptado por
          ambas partes. El dinero lo mueve el banco, con una transferencia normal.
        </p>

        <h2>Contacto</h2>
        <p>
          Si eres banco o cooperativa,{' '}
          <a href={DEMO_MAILTO}>agenda una demo</a>.
        </p>
      </main>

      <footer className="legal-footer">
        <Link to="/">Inicio</Link>
        <Link to="/privacidad">Política de privacidad</Link>
      </footer>
    </div>
  )
}
