import React from 'react';

const UserChart = ({login}) => {

    return (
            <img className="chart" 
            src={`http://ghchart.rshah.org/${login}`} 
            alt={`${login} GitHub chart`}/>
    
    )
}

export default UserChart;