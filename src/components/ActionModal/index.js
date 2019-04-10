import React from 'react';
import ReactDOM from 'react-dom';
import { iconResolve } from '../../util';
import filesize from 'filesize';
import Loader from '../Loader';
import { connect } from 'react-redux';
import { unselectFile, downloadFile, deleteFile } from '../../store/actions';

class ActionModal extends React.Component {
    
    unselectFile(e) {
        if (!this.props.loading) {
            this.props.unselectFile();
        }
    } 
    
    downloadFile(id) {
        window.open(`https://news-agg-oliverbth05.c9users.io:8081/download/${id}`)
        this.props.unselectFile();
    }
    
    render() {
        
        if (!this.props.file) return null
    
        const {fileType, fileName, size, id} = this.props.file
    
        return ReactDOM.createPortal(
            <div className = 'action-modal__backdrop' onClick = {this.unselectFile.bind(this)}>
                <div className = 'action-modal' onClick = {(e) => {e.stopPropagation()}}>
                    { !this.props.loading ?
                    <React.Fragment>
                        <i className = {`${iconResolve(fileType)} action-modal__icon`}></i>
                        <h3>{fileName}</h3>
                        <p>{filesize(size)}</p>
                        
                        <div className = 'action-modal__buttons'>
                            <button className = 'button-delete' onClick = {() => {this.props.deleteFile(id)}}>Delete</button>
                            <button className = 'button-download' onClick = {() => {this.downloadFile(id)}}><i class="fas fa-cloud-upload-alt"></i> Download</button>
                        </div>
                    </React.Fragment>
                    : <Loader /> }
                    
                </div>
            </div>, document.querySelector('#modal')
        )
    }
}

const mapStateToProps = state => ({
    file: state.selectedFile,
    loading: state.modalLoading
})

export default connect(mapStateToProps, {unselectFile, downloadFile, deleteFile})(ActionModal);