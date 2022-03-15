import { connect } from 'react-redux';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserData } from '../../../APIs/Users';

function Content({userData, userDetail}) {
    const params = useParams();
    useEffect(()=> {
        userDetail(params.userId)
    },[])

  return (
    <div className='container mx-auto text-center'>
        <h1 className='text-2xl font-semibold'>User Profile</h1>
        <div className='card'>
            <div className='card-body'>
                {userData.user.name}
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userDetail: (id) => dispatch(UserData(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)