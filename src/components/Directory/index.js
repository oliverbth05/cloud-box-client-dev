import React from 'react';
import { connect } from 'react-redux';
import { fetchFiles, changeLayout, selectFile } from '../../store/actions';

import FileTable from '../FileTable';
import FileGrid from '../FileGrid';
import Loader from '../Loader';
import NoFiles from '../NoFiles';

class Directory extends React.Component {
    
    componentDidMount() {
        this.props.fetchFiles()
    }

    renderFiles() {
        if (this.props.layout === 'table') {
            return <FileTable selectFile = {this.props.selectFile} files = {this.props.files}/>
        }
        else {
            return <FileGrid selectFile = {this.props.selectFile} files = {this.props.files} />
        }
    }
    
    render() { 
        
        if (this.props.loading) return <Loader />
        if (this.props.files.length === 0) return <NoFiles />
        
        return (
            <section className = 'directory-section'>
                <h3>Your Files</h3>
                <div className = 'directory-buttons'>
                    <button onClick = {() => {this.props.changeLayout('table')}} className = {this.props.layout === 'table' ? 'directory-button-active' : ''} ><i class="fas fa-table"></i></button>
                    <button onClick = {() => {this.props.changeLayout('grid')}} className = {this.props.layout === 'grid' ? 'directory-button-active' : ''}><i class="fas fa-th-large"></i></button>
                </div>
                {this.renderFiles()}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    files: state.files,
    loading: state.filesLoading,
    layout: state.layout
})

export default connect(mapStateToProps, {fetchFiles, changeLayout, selectFile})(Directory);