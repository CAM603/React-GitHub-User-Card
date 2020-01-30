import React from 'react';

const UserChart = ({login, chart}) => {

    return (
            <img className="chart" 
            src={chart} 
            alt={`${login} GitHub chart`}/>
    
    )
}

export default UserChart;