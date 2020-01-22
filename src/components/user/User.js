import React from 'react';
import UserCard from './UserCard';
import { StyledButton } from '../styles/StyledButton';


const User = (props) => {

    return (
        <div className="user-container">
            <UserCard 
            data={props.user}
            color="blue"
            player="P1"
            />
            <StyledButton 
            onClick={() => props.toggleFight()}
            fighting={props.fighting}>Fight</StyledButton>
            <UserCard 
            data={props.challenger} 
            color="red"
            player="P2"
            />
        </div>
    )
}

export default User;