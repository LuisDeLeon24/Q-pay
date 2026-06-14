import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import BottomNav from '../components/layout/BottomNav'
import AppHeader from '../components/layout/AppHeader'
import './AppLayout.css'

const AUTH_ROUTES = ['/app/login', '/app/register']

export default function AppLayout() {
  const { pathname } = useLocation()
  const isAuthRoute = AUTH_ROUTES.includes(pathname)

  return (
    <div className="app-layout">
      {!isAuthRoute && <Sidebar />}

      <div className={`app-main ${isAuthRoute ? 'app-main-auth' : ''}`}>
        {!isAuthRoute && <AppHeader />}
        <div className={`app-content ${isAuthRoute ? 'app-content-auth' : ''}`}>
          <Outlet />
        </div>
      </div>

      {!isAuthRoute && <BottomNav />}
    </div>
  )
}
