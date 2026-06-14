import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/GlassCard'
import ProfileAvatar from '../../components/ProfileAvatar'
import TabSwitcher from '../../components/TabSwitcher'
import ProgressRing from '../../components/ProgressRing'
import Modal from '../../components/Modal'
import GlassButton from '../../components/GlassButton'
import { useMockApp } from '../../context/MockAppContext'
import './DashboardPage.css'

export default function DashboardPage() {
  const navigate = useNavigate()
  const { user, loansLent, loansOwed } = useMockApp()
  const [activeTab, setActiveTab] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const loans = activeTab === 0 ? loansLent : loansOwed
  const pendingLoan = loansOwed.find((l) => l.status === 'pending')

  return (
    <div className="dashboard-page">
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar animate-fade-up">
          <GlassCard className="dashboard-card">
            <div className="dashboard-greeting">
              <div>
                <p className="dashboard-hello">Hola, {user.name}</p>
                <p className="dashboard-welcome">Bienvenido de nuevo!</p>
              </div>
              <button onClick={() => navigate('/app/profile')} aria-label="Perfil" className="dashboard-avatar-btn">
                <ProfileAvatar size="sm" />
              </button>
            </div>

            <div className="dashboard-divider" />

            <p className="dashboard-section-title">Prestamos</p>

            <div className="dashboard-icons">
              <button className="dashboard-icon-btn active" aria-label="Préstamos">
                <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                  <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="7" y="3" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="13" r="2" fill="currentColor" />
                </svg>
              </button>
              <button className="dashboard-icon-btn" aria-label="Ahorros">
                <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                  <ellipse cx="12" cy="14" rx="8" ry="6" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              <button className="dashboard-icon-btn" aria-label="Tienda">
                <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                  <path d="M4 10L6 4H18L20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="5" y="10" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="10" y="14" width="4" height="6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          </GlassCard>

          <TabSwitcher
            tabs={['Prestado', 'Debido']}
            active={activeTab}
            onChange={setActiveTab}
          />

          <div className="dashboard-quick-actions">
            <button className="quick-action-btn" onClick={() => navigate('/app/generate')}>
              Generar préstamo
            </button>
            <button className="quick-action-btn" onClick={() => navigate('/app/scan')}>
              Escanear QR
            </button>
          </div>
        </aside>

        <section className="dashboard-main animate-fade-up animate-fade-up-delay-1">
          <h2 className="dashboard-list-title">
            {activeTab === 0 ? 'Préstamos otorgados' : 'Préstamos recibidos'}
          </h2>

          <div className="dashboard-loans">
            {loans.length === 0 ? (
              <GlassCard className="dashboard-empty">
                <p>No hay préstamos en esta categoría.</p>
              </GlassCard>
            ) : (
              loans.map((loan) => (
                <GlassCard
                  key={loan.id}
                  className="loan-item"
                  onClick={() => {
                    if (loan.status === 'pending') setShowModal(true)
                    else navigate('/app/detail?mode=borrower')
                  }}
                >
                  <ProfileAvatar size="sm" />
                  <div className="loan-info">
                    {loan.status === 'active' ? (
                      <>
                        <p className="loan-name">{loan.name} - {loan.installments} cuotas</p>
                        <p className="loan-amount-small">${loan.paid}/{loan.total}</p>
                      </>
                    ) : (
                      <>
                        <p className="loan-name">
                          {loan.name} - <span className="loan-pending">Pendiente</span>
                        </p>
                        <p className="loan-amount">${loan.amount}</p>
                      </>
                    )}
                  </div>
                  {loan.progress !== undefined && <ProgressRing progress={loan.progress} />}
                  {loan.status === 'pending' && <div className="loan-ring-empty" />}
                </GlassCard>
              ))
            )}
          </div>
        </section>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <GlassCard className="accept-modal">
          <div className="accept-modal-avatar">
            <ProfileAvatar size="md" />
          </div>
          <p className="accept-modal-text">Pablo ha aceptado tu oferta de:</p>
          <p className="accept-modal-amount">${pendingLoan?.amount ?? 100}</p>
          <p className="accept-modal-detail">{pendingLoan?.installments ?? 2} cuotas</p>
          <p className="accept-modal-detail bold">{pendingLoan?.interest ?? 0}% interes</p>
          <div className="accept-modal-actions">
            <GlassButton onClick={() => setShowModal(false)}>Cancelar</GlassButton>
            <GlassButton onClick={() => setShowModal(false)}>Aceptar</GlassButton>
          </div>
        </GlassCard>
      </Modal>
    </div>
  )
}
