import React from 'react';
import FollowerCard from './FollowerCard';

const Followers = (props) => {

    return (
        <div>
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