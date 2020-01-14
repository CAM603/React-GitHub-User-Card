import React from 'react';
import FollowerCard from './FollowerCard';

const Followers = (props) => {

    return (
        <div style={{width: '100%', border: 'solid black 1px', display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
            {props.followers.map(follower => (
                <FollowerCard
                key={follower.id}
                pic={follower.avatar_url}
                name={follower.login}
                change={props.change}
                />
            ))}
        </div>
    )
}

export default Followers;