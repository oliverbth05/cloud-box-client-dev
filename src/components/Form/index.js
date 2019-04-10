import React from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../../store/actions';

import Loader from '../Loader';

class Form extends React.Component {
    
    state = {
        file: null
    }
    
    fileChangeHandler(e) {
        this.setState({
            file: e.target.files[0]
        })
    }
    
    uploadFile(e) { 
        e.preventDefault();
        if (this.state.file) {
            const data = new FormData();
            data.append('file', this.state.file);
            data.append('fieldName', this.state.file.name);
            data.append('size', this.state.file.size);
           this.props.uploadFile(data)
           
           this.setState({
               file: null
           })
        }
    }
    
    render() {
        return (
            <section className = 'form-section'>
                { !this.props.loading ? 
                <div className = 'form-container'>
                    <h3>Upload a new file</h3>
                    <form onSubmit = {this.uploadFile.bind(this)}>
                        <input type = 'file' onChange = {this.fileChangeHandler.bind(this)}/>
                        <button type = 'submit'><i class="fas fa-cloud-upload-alt"></i> Upload</button>
                    </form>
                </div>
                :
                <Loader /> 
                }   
            </section>
        )
    }
}

const mapStateToProps = state => ({ 
    loading: state.formLoading
})

export default connect(mapStateToProps, {uploadFile})(Form);