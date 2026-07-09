import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import WaitlistModal from './WaitlistModal'

interface WaitlistContextValue {
  open: () => void
  close: () => void
  isOpen: boolean
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen])

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <WaitlistModal isOpen={isOpen} onClose={close} />
    </WaitlistContext.Provider>
  )
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) {
    throw new Error('useWaitlist debe usarse dentro de WaitlistProvider')
  }
  return ctx
}
