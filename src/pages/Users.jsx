import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { getUsersThunk } from '../states/users/action'

const Users = () => {
  const { users } = useSelector((store) => store.users)
  const dispatch = useDispatch()
  console.log(users)
  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])
  return (
        <div className="text-center">
            <h1>Users</h1>
            {users.length > 0 && users.map((user) => {
              return (
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
              )
            })}
        </div>

  )
}

export default Users
