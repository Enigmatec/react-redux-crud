import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Userlist } from '../../APIs/Users'
import Table from '../Table'

function Content({listUsers, usersData}) {

    useEffect(() => {
        listUsers()
        console.log(usersData.users);
    }, [])
    
    return (
        <div className='container px-10 mx-auto mt-5 text-center'>
            <h1 className='text-2xl font-semibold mb-3'>List of Users</h1>
            <Table users={usersData.users} />
            {/* {
                usersData.users ? usersData.users.map(user => <h1 key={user.id}>{user.name}</h1>) : "No Data"
            } */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        usersData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        listUsers: () => dispatch(Userlist())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)