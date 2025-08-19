import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  )
}

export default Profile