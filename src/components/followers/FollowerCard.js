import React from 'react';

const FollowerCard = (props) => {
    
    return (
        <div>
            <img 
            style={{height: '100px'}} 
            src={props.pic} 
            alt="follower"
            onClick={() => props.change(props.name)}
            />
        </div>
    )
}

export default FollowerCard;