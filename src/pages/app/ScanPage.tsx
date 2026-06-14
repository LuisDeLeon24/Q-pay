import { useNavigate } from 'react-router-dom'
import ArrowButton from '../../components/ArrowButton'
import { useMockApp } from '../../context/MockAppContext'
import './ScanPage.css'

export default function ScanPage() {
  const navigate = useNavigate()
  const { lastGenerated } = useMockApp()
  const code = lastGenerated?.code ?? '5FD3939493D'

  return (
    <div className="scan-page page-narrow">
      <div className="scan-viewfinder animate-fade-up">
        <div className="scan-corners">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
        </div>
        <div className="scan-preview">
          <svg viewBox="0 0 200 200" className="scan-qr-placeholder">
            <rect width="200" height="200" fill="#fff" rx="8" />
            <rect x="20" y="20" width="50" height="50" fill="#000" />
            <rect x="130" y="20" width="50" height="50" fill="#000" />
            <rect x="20" y="130" width="50" height="50" fill="#000" />
            <rect x="80" y="80" width="40" height="40" fill="#000" />
            <rect x="130" y="130" width="15" height="15" fill="#000" />
            <rect x="150" y="130" width="15" height="15" fill="#000" />
            <rect x="130" y="150" width="15" height="15" fill="#000" />
            <rect x="165" y="150" width="15" height="15" fill="#000" />
          </svg>
        </div>
      </div>

      <div className="scan-code-section animate-fade-up animate-fade-up-delay-1">
        <h2>Codigo</h2>
        <p className="scan-code">{code}</p>
        <div className="scan-underline" />
      </div>

      <div className="scan-actions animate-fade-up animate-fade-up-delay-2">
        <ArrowButton onClick={() => navigate('/app/detail?mode=borrower')} />
      </div>
    </div>
  )
}
