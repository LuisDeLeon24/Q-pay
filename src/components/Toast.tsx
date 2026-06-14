import './Toast.css'

interface ToastProps {
  message: string
  visible: boolean
}

export default function Toast({ message, visible }: ToastProps) {
  return (
    <div className={`toast ${visible ? 'toast-visible' : ''}`} role="alert">
      <img src="/assets/logo.png" alt="" className="toast-icon" />
      <span>{message}</span>
    </div>
  )
}
