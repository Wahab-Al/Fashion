import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('token='))
      ?.split('=')[1]

    const userName = document.cookie
      .split('; ')
      .find(row => row.startsWith('userName='))
      ?.split('=')[1]

    if (token && userName) {
      setUser({ name: decodeURIComponent(userName) })
    }
  }, [])

  const login = (userData, token) => {
    document.cookie = `token=${token}; path=/; samesite=lax`
    document.cookie = `userName=${encodeURIComponent(userData.name)}; path=/; samesite=lax`
    setUser(userData)
  }

  const logout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
    document.cookie = 'userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)