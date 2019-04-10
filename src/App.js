import React from 'react';
import { connect } from 'react-redux';

import Directory from './components/Directory';
import Form from './components/Form';
import ActionModal from './components/ActionModal';
import Banner from './components/Banner';
import Quota from './components/Quota';

class App extends React.Component {
    render() {
        return (
            <div>
                <ActionModal />
                <Banner {...this.props.banner}/>
                <div className = 'heading'>
                    <h1 className = 'logo'><i class="fas fa-cloud"></i> Cloud Box <span>V1</span></h1>
                    <p className = 'about'>The files in the directory will periodically be reset, and the quota has been arbitrarily set to 9.54MB</p>
                </div>
                <div className = 'flex-2'>
                    <Quota />
                    <Form />
                </div>
                <Directory />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    banner: state.banner,
})

export default connect(mapStateToProps, null)(App);