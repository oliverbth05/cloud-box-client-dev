import React from 'react';
import ProgressBar from '../ProgressBar';
import Loader from '../Loader';
import filesize from 'filesize';

import { connect } from 'react-redux';

class Quota extends React.Component {
    
    
    
    render() {
        if (!this.props.usageData) return <div className = 'quota-section'><Loader /></div>
        
        const {quota, used} = this.props.usageData
        
        return (
            <div className = 'quota-section'>
                <h3>Usage Stats</h3>
                <p>{filesize(used)} out of {filesize(quota)} used.</p>
                <ProgressBar {...this.props.usageData} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    usageData: state.usageData
})

export default connect(mapStateToProps, {})(Quota);