import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
const UserResults = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])


  useEffect(() => {
    fetchUsers()
  })

  const fetchUsers = async () => {
    const request = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
    const data = await request.json()
    setUsers(data)
    setLoading(false)
  }

  if (!loading) { // if false
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md_grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        )
        )}
      </div>
    )
  } else {
    return (
      <Spinner />
    )
  }

}

export default UserResults
