import React from 'react';

const FollowerCard = (props) => {

    return (
        <div>
            <img style={{height: '150px'}} src={props.pic} alt="follower"/>
        </div>
    )
}

export default FollowerCard;