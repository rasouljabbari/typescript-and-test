import { useContext } from 'react'
import { UserContext } from './UsetContext'

export const User = () => {

  const userContext = useContext(UserContext)

  const handleLogin = () => {
      userContext.setUser({
        name: 'Rasoul',
        email: 'rjdeveloper17@gmail.com'
      })
  }
  const handleLogout = () => {
      userContext.setUser(null)
  }

  return(
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  )

}