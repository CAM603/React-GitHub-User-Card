import React from 'react';
import UserChart from './UserChart';

import { StyledUser } from '../styles/StyledUser'

const UserCard = (props) => {
    console.log(props.data)
    return (
        <div className="user-card-container">
            <StyledUser 
            pic={props.data.avatar_url}
            color={props.color}>
                <p>{props.data.login}</p>
                {/* <p>Bio: {props.data.bio}</p>
                <p>Location: {props.data.location}</p>
                <p>Joined: {props.data.created_at}</p>
                <p>Followers: {props.data.followers}</p>
                <p>Following: {props.data.following}</p>
                <p>Public Repositories: {props.data.public_repos}</p> */}
            </StyledUser>
            <UserChart name={props.data.login}/>
        </div>
    )
}

export default UserCard