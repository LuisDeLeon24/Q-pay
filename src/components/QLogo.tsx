import './QLogo.css'

interface QLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'image' | 'glass'
}

export default function QLogo({ size = 'md', variant = 'image' }: QLogoProps) {
  if (variant === 'glass') {
    return (
      <div className={`q-logo-glass q-logo-${size}`} aria-hidden="true">
        <span>Q</span>
      </div>
    )
  }

  return (
    <img
      src="/assets/logo.png"
      alt="Q-Pay"
      className={`q-logo-img q-logo-${size}`}
    />
  )
}
