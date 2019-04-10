import React from 'react';
import ReactDOM from 'react-dom';

const Banner = props => {
    
    if (!props.message) return null
    
    return ReactDOM.createPortal(
        <div className = {props.type === 'success' ? 'banner banner-success' : 'banner banner-warning'}>
            <h1>{props.type === 'success' ? <i class="fas fa-check-circle"></i> : <i class="fas fa-exclamation-circle"></i> } {props.message}</h1>
        </div>, document.querySelector('#banner')
    )
    
}

export default Banner;