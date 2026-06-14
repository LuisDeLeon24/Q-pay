import { useNavigate } from 'react-router-dom'
import QLogo from '../../components/QLogo'
import GlassCard from '../../components/GlassCard'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <GlassCard className="login-panel animate-fade-up">
      <div className="login-header">
        <h1>Bienvenido</h1>
        <p className="login-tagline">
          &ldquo;Estandarizando las finanzas informales y ahorrándote dolores de cabeza&rdquo;
        </p>
      </div>

      <div className="login-logo">
        <QLogo size="lg" variant="glass" />
        <span className="login-brand">PAY</span>
      </div>

      <button
        className="gmail-button"
        onClick={() => navigate('/app/register')}
      >
        <span>Inicia Sesión con Gmail</span>
        <img src="/assets/gmail.png" alt="Gmail" className="gmail-icon" />
      </button>
    </GlassCard>
  )
}
