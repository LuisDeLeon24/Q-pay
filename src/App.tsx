import { Routes, Route, Navigate } from 'react-router-dom'
import LandingShell from './layouts/LandingShell'
import LandingPage from './pages/landing/LandingPage'

export default function App() {
  return (
    <Routes>
      <Route element={<LandingShell />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
