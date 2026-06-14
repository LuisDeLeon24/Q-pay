import type { ReactNode } from 'react'
import './GlassButton.css'

interface GlassButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'default' | 'green' | 'danger'
  fullWidth?: boolean
  className?: string
}

export default function GlassButton({
  children,
  onClick,
  variant = 'default',
  fullWidth,
  className = '',
}: GlassButtonProps) {
  return (
    <button
      className={`glass-button glass-button-${variant} ${fullWidth ? 'glass-button-full' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
