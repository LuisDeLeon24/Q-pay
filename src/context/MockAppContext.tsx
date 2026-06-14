import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'

export type LoanStatus = 'active' | 'pending'

export interface Loan {
  id: string
  name: string
  amount: number
  installments: number
  paid: number
  total: number
  status: LoanStatus
  progress?: number
  interest: number
  type: 'lent' | 'owed'
}

export interface UserProfile {
  name: string
  email: string
  country: string
  gender: string
}

export interface GeneratedLoan {
  amount: number
  months: number
  interest: number
  installments: number
  installmentAmount: number
  code: string
}

interface MockAppState {
  user: UserProfile
  loansLent: Loan[]
  loansOwed: Loan[]
  lastGenerated: GeneratedLoan | null
  updateUser: (updates: Partial<UserProfile>) => void
  setLastGenerated: (loan: GeneratedLoan) => void
  resetSession: () => void
}

const DEFAULT_USER: UserProfile = {
  name: 'Luis',
  email: 'pepito@gmail.com',
  country: 'Guatemala',
  gender: 'Masculino',
}

const DEFAULT_LOANS_LENT: Loan[] = [
  {
    id: '1',
    name: 'Mario',
    amount: 100,
    installments: 10,
    paid: 10,
    total: 100,
    status: 'active',
    progress: 10,
    interest: 0,
    type: 'lent',
  },
]

const DEFAULT_LOANS_OWED: Loan[] = [
  {
    id: '2',
    name: 'Mario',
    amount: 100,
    installments: 2,
    paid: 0,
    total: 100,
    status: 'pending',
    interest: 0,
    type: 'owed',
  },
]

const STORAGE_KEY = 'qpay-mock-state'

interface SavedState {
  user?: UserProfile
  lastGenerated?: GeneratedLoan | null
}

function loadState(): SavedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as SavedState
  } catch {
    /* ignore */
  }
  return {}
}

const MockAppContext = createContext<MockAppState | null>(null)

export function MockAppProvider({ children }: { children: ReactNode }) {
  const saved = loadState()

  const [user, setUser] = useState<UserProfile>(saved.user ?? DEFAULT_USER)
  const [loansLent] = useState<Loan[]>(DEFAULT_LOANS_LENT)
  const [loansOwed] = useState<Loan[]>(DEFAULT_LOANS_OWED)
  const [lastGenerated, setLastGeneratedState] = useState<GeneratedLoan | null>(
    saved.lastGenerated ?? null,
  )

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ user, lastGenerated }),
    )
  }, [user, lastGenerated])

  const updateUser = (updates: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...updates }))
  }

  const setLastGenerated = (loan: GeneratedLoan) => {
    setLastGeneratedState(loan)
  }

  const resetSession = () => {
    setUser(DEFAULT_USER)
    setLastGeneratedState(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <MockAppContext.Provider
      value={{
        user,
        loansLent,
        loansOwed,
        lastGenerated,
        updateUser,
        setLastGenerated,
        resetSession,
      }}
    >
      {children}
    </MockAppContext.Provider>
  )
}

export function useMockApp() {
  const ctx = useContext(MockAppContext)
  if (!ctx) throw new Error('useMockApp must be used within MockAppProvider')
  return ctx
}
