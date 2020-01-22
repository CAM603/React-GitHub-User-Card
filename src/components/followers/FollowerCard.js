import React from 'react';
import { StyledFollower } from '../styles/StyledFollower';

const FollowerCard = (props) => {
    
    return (
        <StyledFollower pic={props.pic} onClick={() => props.change(props.name)}>
            <h5>{props.name}</h5>
        </StyledFollower>
    )
}

export default FollowerCard;