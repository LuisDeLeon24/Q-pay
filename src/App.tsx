import { Routes, Route, Navigate } from 'react-router-dom'
import LandingShell from './layouts/LandingShell'
import LandingPage from './pages/landing/LandingPage'
import WaitlistPage from './pages/waitlist/WaitlistPage'

export default function App() {
  return (
    <Routes>
      <Route element={<LandingShell />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
