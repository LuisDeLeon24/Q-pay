import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileAvatar from '../../components/ProfileAvatar'
import GlassButton from '../../components/GlassButton'
import { useMockApp } from '../../context/MockAppContext'
import './ProfilePage.css'

export default function ProfilePage() {
  const navigate = useNavigate()
  const { user, updateUser, resetSession } = useMockApp()
  const [name, setName] = useState(user.name)
  const [gender, setGender] = useState(user.gender)

  const handleSave = () => {
    updateUser({ name, gender })
  }

  const handleLogout = () => {
    resetSession()
    navigate('/')
  }

  return (
    <div className="profile-page page-narrow">
      <div className="profile-avatar-wrap animate-fade-up">
        <ProfileAvatar size="lg" />
      </div>

      <div className="profile-fields animate-fade-up animate-fade-up-delay-1">
        <div className="profile-field">
          <span className="profile-label">Me llamo</span>
          <input
            className="profile-value profile-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="profile-field profile-field-right">
          <span className="profile-label">Soy de</span>
          <span className="profile-flag">🇬🇹</span>
          <span className="profile-value profile-value-sm">{user.country}</span>
        </div>
        <div className="profile-field profile-field-full">
          <span className="profile-label">Me identifico como</span>
          <input
            className="profile-value profile-input"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </div>

      <div className="profile-actions animate-fade-up animate-fade-up-delay-2">
        <GlassButton variant="danger" fullWidth onClick={handleLogout}>
          Cerrar Sesion
        </GlassButton>
        <GlassButton fullWidth onClick={handleSave}>
          Guardar
        </GlassButton>
      </div>
    </div>
  )
}
