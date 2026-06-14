import { Outlet } from 'react-router-dom'
import './LandingShell.css'

export default function LandingShell() {
  return (
    <div className="landing-shell">
      <Outlet />
    </div>
  )
}
