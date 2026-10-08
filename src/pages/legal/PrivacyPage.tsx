import { Link } from 'react-router-dom'
import { DEMO_MAILTO } from '../../lib/contact'
import QLogo from '../../components/QLogo'
import './LegalPage.css'

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <Link to="/" className="legal-brand">
          <QLogo size="sm" variant="glass" />
          Q-Pay
        </Link>
      </header>

      <main className="legal-main">
        <h1>Política de privacidad</h1>
        <p className="legal-updated">Octubre 2026</p>

        <p>
          Q-Pay trata los datos de este sitio para responder a bancos y cooperativas y para guardar
          lo que la lista de espera llegó a recoger. No publicamos cuántas personas escribieron.
        </p>

        <h2>Lista de espera, ya cerrada</h2>
        <p>El formulario ya no está en el sitio. Mientras estuvo abierto guardamos:</p>
        <ul>
          <li>tu correo</li>
          <li>el perfil que elegiste</li>
          <li>las respuestas a tres preguntas sobre préstamos entre personas</li>
        </ul>
        <p>
          Esos registros siguen en nuestra base de datos. El acceso público de la aplicación solo
          puede insertar un registro nuevo; no está previsto que pueda leer correos ajenos. Si
          quieres que borremos el tuyo,{' '}
          <a href={DEMO_MAILTO}>agenda una demo</a>.
        </p>

        <h2>Contacto de ahora</h2>
        <p>
          Agenda una demo abre tu correo para escribirnos. No hay un formulario en el sitio.
        </p>

        <h2>Prototipo</h2>
        <p>
          El archivo para Android es una demo en validación. No es la banca en línea de un banco y
          no mueve dinero.
        </p>

        <h2>Qué no hacemos</h2>
        <p>No vendemos estos datos ni los mostramos en la web.</p>
      </main>

      <footer className="legal-footer">
        <Link to="/">Inicio</Link>
        <Link to="/terminos">Términos</Link>
      </footer>
    </div>
  )
}
