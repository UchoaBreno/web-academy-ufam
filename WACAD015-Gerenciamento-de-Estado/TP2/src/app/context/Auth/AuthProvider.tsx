'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { useRouter } from 'next/navigation'

interface AuthContextData {
  user: string | null
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({
  children
}: AuthProviderProps) {
  const [user, setUser] = useState<string | null>(null)

  const router = useRouter()

  useEffect(() => {
    const currentUser = localStorage.getItem('user')

    if (currentUser) {
      setUser(currentUser)
    }
  }, [])

  function login(email: string) {
    setUser(email)
    localStorage.setItem('user', email)
    router.push('/')
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}