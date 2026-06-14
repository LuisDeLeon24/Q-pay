import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/GlassCard'
import ArrowButton from '../../components/ArrowButton'
import { useMockApp } from '../../context/MockAppContext'
import './RegisterPage.css'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { user, updateUser } = useMockApp()
  const [name, setName] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      updateUser({ name: name.trim() })
      navigate('/app/dashboard')
    }
  }

  return (
    <GlassCard className="register-panel">
      <h1 className="register-title animate-fade-up">Registro</h1>

      <form className="register-form animate-fade-up animate-fade-up-delay-1" onSubmit={handleSubmit}>
        <label className="register-label">Hola yo me llamo</label>
        <input
          type="text"
          className="register-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </form>

      <div className="register-actions animate-fade-up animate-fade-up-delay-2">
        <ArrowButton
          onClick={() => {
            if (name.trim()) {
              updateUser({ name: name.trim() })
              navigate('/app/dashboard')
            }
          }}
        />
      </div>

      <div className="register-footer animate-fade-up animate-fade-up-delay-3">
        <div>
          <p className="register-footer-label">Bienvenido</p>
          <p className="register-footer-email">{user.email}</p>
        </div>
        <img src="/assets/gmail.png" alt="Gmail" className="register-gmail" />
      </div>
    </GlassCard>
  )
}
