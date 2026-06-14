import './ArrowButton.css'

interface ArrowButtonProps {
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function ArrowButton({ onClick, type = 'button', disabled }: ArrowButtonProps) {
  return (
    <button
      className="arrow-button"
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label="Continuar"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12H19M19 12L13 6M19 12L13 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
