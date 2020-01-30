import React from 'react';

import { StyledUser } from '../styles/StyledUser'

const FakeUserCard = (props) => {
    
    return (
        <div className="user-card-container">
            <StyledUser 
            pic={`#`}
            color={props.color}>
                <p>Fake</p>
                {/* <p>Bio: {props.data.bio}</p>
                <p>Location: {props.data.location}</p>
                <p>Joined: {props.data.created_at}</p>
                <p>Followers: {props.data.followers}</p>
                <p>Following: {props.data.following}</p>
                <p>Public Repositories: {props.data.public_repos}</p> */}
                <p>Fake</p>
            </StyledUser>
        </div>
    )
}

export default FakeUserCard