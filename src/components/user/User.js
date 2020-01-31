import React, {useState} from 'react';
import UserCard from './UserCard';
import { StyledButton } from '../styles/StyledButton';

import FakeUserCard from './FakeUserCard';


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
            fighting={props.fighting}>
                {props.fighting ? 'End Fight' : 'Fight!'}
            </StyledButton>
            {props.challenger ?
                <UserCard 
                data={props.challenger} 
                color="red"
                player="P2"
                />
                :
                <FakeUserCard
                color="yellow"
                player="P2"
                />
        }
        </div>
    )
}

export default User;