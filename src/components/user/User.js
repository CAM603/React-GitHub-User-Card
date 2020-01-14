import React from 'react';
import UserCard from './UserCard';
import UserChart from './UserChart';


const User = (props) => {

    return (
        <div style={{width: '100%', border: 'solid black 1px', display: 'flex', justifyContent: 'space-between'}}>
            <UserCard data={props.data}/> 
            <UserChart/>
            <UserChart/>
            <UserCard data={props.challenger} />
        </div>
    )
}

export default User;