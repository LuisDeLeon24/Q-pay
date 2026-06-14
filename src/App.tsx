import { Routes, Route, Navigate } from 'react-router-dom'
import LandingShell from './layouts/LandingShell'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/landing/LandingPage'
import LoginPage from './pages/app/LoginPage'
import RegisterPage from './pages/app/RegisterPage'
import DashboardPage from './pages/app/DashboardPage'
import GeneratePage from './pages/app/GeneratePage'
import ScanPage from './pages/app/ScanPage'
import DetailPage from './pages/app/DetailPage'
import ProfilePage from './pages/app/ProfilePage'

export default function App() {
  return (
    <Routes>
      <Route element={<LandingShell />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate to="/app/dashboard" replace />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="generate" element={<GeneratePage />} />
        <Route path="scan" element={<ScanPage />} />
        <Route path="detail" element={<DetailPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
