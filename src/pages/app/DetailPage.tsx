import { useSearchParams, useNavigate } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import ProfileAvatar from '../../components/ProfileAvatar'
import GlassButton from '../../components/GlassButton'
import { useMockApp } from '../../context/MockAppContext'
import './DetailPage.css'

const DEFAULT_LOAN = {
  amount: 100,
  installments: 2,
  installmentAmount: 10,
  interest: 0,
}

export default function DetailPage() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const { user, lastGenerated } = useMockApp()
  const mode = params.get('mode') ?? 'borrower'
  const isLender = mode === 'lender'

  const loan = lastGenerated ?? DEFAULT_LOAN

  return (
    <div className="detail-page page-narrow">
      <div className="detail-header">
        <BackButton />
      </div>

      <h1 className="detail-title animate-fade-up">Detalle</h1>

      <div className="detail-body">
        <div className="detail-info animate-fade-up animate-fade-up-delay-1">
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Monto</span>
              <span className="detail-value accent">${loan.amount}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Plazo</span>
              <span className="detail-value">{loan.installments} cuotas</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Cuota</span>
              <span className="detail-value">${loan.installmentAmount}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Interes</span>
              <span className="detail-value">{loan.interest}%</span>
            </div>
          </div>

          {isLender && (
            <div className="detail-lender">
              <p className="detail-lender-label">Prestamo dado por:</p>
              <div className="detail-lender-row">
                <ProfileAvatar size="sm" />
                <span>{user.name}</span>
              </div>
            </div>
          )}
        </div>

        {!isLender && (
          <div className="detail-qr animate-fade-up animate-fade-up-delay-2">
            <svg viewBox="0 0 200 200" className="detail-qr-code">
              <rect width="200" height="200" fill="#fff" rx="12" />
              <rect x="20" y="20" width="50" height="50" fill="#000" />
              <rect x="130" y="20" width="50" height="50" fill="#000" />
              <rect x="20" y="130" width="50" height="50" fill="#000" />
              <rect x="80" y="80" width="40" height="40" fill="#000" />
              <rect x="130" y="130" width="15" height="15" fill="#000" />
              <rect x="150" y="130" width="15" height="15" fill="#000" />
              <rect x="130" y="150" width="15" height="15" fill="#000" />
              <rect x="165" y="150" width="15" height="15" fill="#000" />
              <rect x="165" y="130" width="15" height="15" fill="#000" />
            </svg>
          </div>
        )}
      </div>

      <div className="detail-actions animate-fade-up animate-fade-up-delay-3">
        {isLender ? (
          <GlassButton variant="green" fullWidth onClick={() => navigate('/app/dashboard')}>
            Aceptar
          </GlassButton>
        ) : (
          <button className="share-btn" aria-label="Compartir enlace">
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
              <path
                d="M10 13a5 5 0 007.5 4.3l1.5-1.5M14 11a5 5 0 00-7.5-4.3L5 8.2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
