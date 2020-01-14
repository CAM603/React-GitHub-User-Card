import React from 'react';
import UserCard from './UserCard';
import UserChart from './UserChart';

const User = (props) => {

    return (
        <div>
            <UserCard data={props.data}/> 
            <UserChart/>
        </div>
    )
}

export default User;