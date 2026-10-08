import { Navigate, Route, Routes } from 'react-router-dom'
import LandingShell from './layouts/LandingShell'
import LandingPage from './pages/landing/LandingPage'
import PrivacyPage from './pages/legal/PrivacyPage'
import TermsPage from './pages/legal/TermsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<LandingShell />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terminos" element={<TermsPage />} />
        <Route path="/privacidad" element={<PrivacyPage />} />
        <Route
          path="/waitlist"
          element={<Navigate to={{ pathname: '/', hash: 'contacto' }} replace />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
