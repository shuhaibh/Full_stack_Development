import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {
  const [users,setUsers]=useState([])
  const [error,setError]=useState(null)
  useEffect(()=>{
    const fetchData = async()=>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(response)
            if(response.status!=200){
              throw new Error("User retrieval failed")
            }
            setUsers(response.data)
        }
         catch (error)
        {
            console.log(error)
            setError(error.message)
        }
    }
    fetchData()
  },[])

    if(error) return (<p>Error: {error}</p>)

    return (
    <ul>
      {
        users.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))
      }
    </ul>
  )
}

export default Users
