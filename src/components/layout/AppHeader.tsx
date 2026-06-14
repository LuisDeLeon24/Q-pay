import { useNavigate } from 'react-router-dom'
import QLogo from '../QLogo'
import ProfileAvatar from '../ProfileAvatar'
import { useMockApp } from '../../context/MockAppContext'
import './AppHeader.css'

export default function AppHeader() {
  const navigate = useNavigate()
  const { user } = useMockApp()

  return (
    <header className="app-header">
      <button
        className="app-header-brand"
        onClick={() => navigate('/app/dashboard')}
        aria-label="Ir al dashboard"
      >
        <QLogo size="sm" />
        <span>Q-Pay</span>
      </button>

      <button
        className="app-header-profile"
        onClick={() => navigate('/app/profile')}
        aria-label="Perfil"
      >
        <span className="app-header-greeting">Hola, {user.name}</span>
        <ProfileAvatar size="sm" />
      </button>
    </header>
  )
}
