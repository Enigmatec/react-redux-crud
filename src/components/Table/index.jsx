import React from 'react'
import { Link } from 'react-router-dom'

function Table({users}) {
  return (
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`${user.id}`} >edit</Link> 
                            </td>
                        </tr>
                    )
                })
                
            }
        </tbody>
    </table>
  )
}

export default Table