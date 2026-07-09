import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { WaitlistProvider } from './components/waitlist/WaitlistContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <WaitlistProvider>
        <App />
      </WaitlistProvider>
    </BrowserRouter>
  </StrictMode>,
)
