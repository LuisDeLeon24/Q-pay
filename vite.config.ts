import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/** Canonical production domain (WhatsApp/OG require absolute image URLs). */
const DEFAULT_SITE_URL = 'https://q-pay.ldeleon.com'

function resolveSiteUrl(mode: string): string {
  const env = loadEnv(mode, process.cwd(), '')
  const fromEnv = env.VITE_SITE_URL
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  return DEFAULT_SITE_URL
}

function siteUrlHtml(mode: string): Plugin {
  const siteUrl = resolveSiteUrl(mode)

  return {
    name: 'site-url-html',
    transformIndexHtml(html) {
      return html.replaceAll('%VITE_SITE_URL%', siteUrl)
    },
    config() {
      return {
        define: {
          'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl),
        },
      }
    },
  }
}

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

export default defineConfig(({ mode }) => ({
  plugins: [react(), siteUrlHtml(mode), pitchRedirect()],
}))
