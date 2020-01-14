import React from 'react';
import UserCard from './UserCard';
import UserChart from './UserChart';


const User = (props) => {

    return (
        <div className="user-container">
            <UserCard data={props.user}/> 
            <UserChart/>
            <UserChart/>
            <UserCard data={props.challenger} />
        </div>
    )
}

export default User;