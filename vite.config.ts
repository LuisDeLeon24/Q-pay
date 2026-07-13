import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function pitchRedirect(): Plugin {
  const redirect = (req: { url?: string | null }, _res: unknown, next: () => void) => {
    if (!req.url) return next()

    const path = req.url.split('?')[0]

    if (path === '/pitch' || path === '/pitch/') {
      req.url = '/pitch/index.html' + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '')
      return next()
    }

    if (path.startsWith('/pitch/') && !path.startsWith('/pitch/css/') && path !== '/pitch/index.html') {
      req.url = '/pitch/index.html' + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '')
    }

    next()
  }

  return {
    name: 'pitch-redirect',
    configureServer(server) {
      server.middlewares.use(redirect)
    },
    configurePreviewServer(server) {
      server.middlewares.use(redirect)
    },
  }
}

export default defineConfig({
  plugins: [react(), pitchRedirect()],
})
