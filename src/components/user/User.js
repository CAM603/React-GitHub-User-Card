import React from 'react';
import UserCard from './UserCard';
import UserChart from './UserChart';


const User = (props) => {

    return (
        <div style={{width: '100%', border: 'solid black 1px'}}>
            <UserCard data={props.data}/> 
            <UserChart/>
        </div>
    )
}

export default User;