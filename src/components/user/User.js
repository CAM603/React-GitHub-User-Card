import React from 'react';
import UserCard from './UserCard';
import UserChart from './UserChart';


const User = (props) => {

    return (
        <div className="user-container">
            <UserCard 
            data={props.user}
            color="blue"
            /> 
            <UserChart/>
            <UserChart/>
            <UserCard 
            data={props.challenger} 
            color="red"
            />
        </div>
    )
}

export default User;