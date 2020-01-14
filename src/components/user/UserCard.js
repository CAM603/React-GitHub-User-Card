import React from 'react';

const UserCard = (props) => {
    console.log(props.data)
    return (
        <div>
            <img style={{height: '150px'}} src={props.data.avatar_url}/>
            <p>Name: {props.data.name} AKA: {props.data.login}</p>
            <p>Bio: {props.data.bio}</p>
            <p>Location: {props.data.location}</p>
            <p>Joined: {props.data.created_at}</p>
            <p>Followers: {props.data.followers}</p>
            <p>Following: {props.data.following}</p>
            <p>Public Repositories: {props.data.public_repos}</p>
        </div>
    )
}

export default UserCard