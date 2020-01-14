import React from 'react';

const UserChart = (props) => {

    return (
            <img className="chart" 
            src={`http://ghchart.rshah.org/${props.name}`} 
            alt={`${props.name} GitHub chart`}/>
    
    )
}

export default UserChart;