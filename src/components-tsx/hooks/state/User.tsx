import { useState } from 'react'
import { AuthUser } from './LoggedIn.types'

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null)

  const handleLogin = () => {
    setUser({
      name: 'Rasoul',
      email: 'rjdeveloper17@gamil.com'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }

  return(
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {
        user &&
        <>
          <div>User name is {user?.name}</div>
          <div>User email is {user?.email}</div>
        </>
      }
    </div>
  )

}