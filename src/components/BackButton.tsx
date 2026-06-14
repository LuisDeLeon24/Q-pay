import { useNavigate } from 'react-router-dom'
import './BackButton.css'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button className="back-button" onClick={() => navigate(-1)} aria-label="Volver">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
