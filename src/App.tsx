import { useEffect, useRef } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import LandingShell from './layouts/LandingShell'
import LandingPage from './pages/landing/LandingPage'
import { useWaitlist } from './components/waitlist/WaitlistContext'

function WaitlistRoute() {
  const { open, isOpen } = useWaitlist()
  const navigate = useNavigate()
  const opened = useRef(false)

  useEffect(() => {
    open()
    opened.current = true
  }, [open])

  useEffect(() => {
    if (opened.current && !isOpen) {
      navigate('/', { replace: true })
    }
  }, [isOpen, navigate])

  return <LandingPage />
}

export default function App() {
  return (
    <Routes>
      <Route element={<LandingShell />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<WaitlistRoute />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
