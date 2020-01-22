import React from 'react';
import FollowerCard from './FollowerCard';
import Fight from '../../containers/Fight';

const Followers = (props) => {

    return (
        <div className="followers-container">
            {props.fighting ? <Fight user={props.user} challenger={props.challenger}/> :
            props.followers.map(follower => (
                <FollowerCard
                key={follower.id}
                pic={follower.avatar_url}
                name={follower.login}
                change={props.change}
                />
            ))
            }
        </div>
    )
}

export default Followers;