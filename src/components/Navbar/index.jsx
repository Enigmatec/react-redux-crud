import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-red-400'>
        <div className='container mx-auto px-8 py-7'>
            <div className='flex justify-center space-x-4 text-white hover:text-white'>
                <Link to='user'>User</Link>
                <Link to='post'>Post</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar