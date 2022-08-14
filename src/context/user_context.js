import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  const [myUser, setUser] = useState(false)
  useEffect(() => {
    if (isAuthenticated) {
      setUser(user)
    }
    else {
      setUser(false)
    }

  }, [isAuthenticated])
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser, setUser }}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
