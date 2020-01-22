import React from 'react';
import UserCard from './UserCard';


const User = (props) => {

    return (
        <div className="user-container">
            <UserCard 
            data={props.user}
            color="blue"
            player="P1"
            />
            <UserCard 
            data={props.challenger} 
            color="red"
            player="P2"
            />
        </div>
    )
}

export default User;