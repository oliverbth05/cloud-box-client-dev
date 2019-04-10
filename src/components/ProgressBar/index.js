import React from 'react';

const ProgressBar = props => {
    const {quota, used} = props;
    const proportionUsed = ((used / quota) * 100).toFixed(2);
    
    const width = {
        width: `${proportionUsed}%`
    }
    
    return (
        <div className = 'progress-bar__container'>
            <div className = 'progress-bar__outer'>
                <div className = 'progress-bar__inner' style = {width}></div>
                <h3>{proportionUsed}%</h3>
            </div>
        </div>
    )
}

export default ProgressBar