import { NavLink } from 'react-router-dom'
import QLogo from '../QLogo'
import './Sidebar.css'

const NAV_ITEMS = [
  {
    to: '/app/dashboard',
    label: 'Préstamos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="7" y="3" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="13" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    to: '/app/generate',
    label: 'Generar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 10L19 12L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/app/scan',
    label: 'Escanear',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="3" height="3" fill="currentColor" />
        <rect x="18" y="14" width="3" height="3" fill="currentColor" />
        <rect x="14" y="18" width="3" height="3" fill="currentColor" />
        <rect x="18" y="18" width="3" height="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    to: '/app/profile',
    label: 'Perfil',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="sidebar-brand">
        <QLogo size="sm" />
        <span>Q-Pay</span>
      </NavLink>

      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
