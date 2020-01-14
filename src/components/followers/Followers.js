import React from 'react';
import FollowerCard from './FollowerCard';

const Followers = (props) => {

    return (
        <div>
            {props.followers.map(follower => (
                <FollowerCard
                key={follower.id}
                pic={follower.avatar_url}
                />
            ))}
        </div>
    )
}

export default Followers;