import { createContext, useContext, useState, useEffect } from 'react'
import axiosInstance from '../apis/axiosInstance'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkauthenticate = async () => {
      try {
        const response = await axiosInstance.get('/users/me')
        if(response.data.data){
          setUser(response.data.data)
        }
      } catch (error) {
        setUser(null)
        document.cookie = 'userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; samesite=lax'
      }
      finally {
        setLoading(false)
      }
    }

    checkauthenticate()
  }, [])

  const login = (userData, token) => {
    document.cookie = `userName=${encodeURIComponent(userData.name)}; path=/; samesite=lax`
    setUser(userData)
  }

  const logout = () => {
    document.cookie = 'userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; samesite=lax'
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)