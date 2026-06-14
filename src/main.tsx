import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MockAppProvider } from './context/MockAppContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MockAppProvider>
        <App />
      </MockAppProvider>
    </BrowserRouter>
  </StrictMode>,
)
