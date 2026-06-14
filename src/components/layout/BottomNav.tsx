import { NavLink } from 'react-router-dom'
import './BottomNav.css'

const NAV_ITEMS = [
  { to: '/app/dashboard', label: 'Préstamos', short: 'Inicio' },
  { to: '/app/generate', label: 'Generar', short: 'Nuevo' },
  { to: '/app/scan', label: 'Escanear', short: 'QR' },
  { to: '/app/profile', label: 'Perfil', short: 'Perfil' },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `bottom-nav-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="bottom-nav-short">{item.short}</span>
          <span className="bottom-nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
