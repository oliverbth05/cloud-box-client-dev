import axios from 'axios';

export const fetchFiles = () => dispatch => {
    dispatch({type: 'FILES_LOADING'})
    axios.get('https://cloud-box-api.herokuapp.com/files')
    .then(res => {
        dispatch({type: '!FILES_LOADING'})
        dispatch({type: 'FETCH_FILES', payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: '!FILES_LOADING'})
    })
}
 
export const uploadFile = (formData) => dispatch => {
    dispatch({type: 'FORM_LOADING'})
    axios.post('https://cloud-box-api.herokuapp.com/new', formData)
    .then(res => {
        dispatch({type: 'UPLOAD_FILE', payload: res.data})
        dispatch({type: 'SHOW_BANNER', payload: {message: 'File Uploaded Successfully', type: 'success'}})
        dispatch({type: '!FORM_LOADING'})
        setTimeout(() => {
            dispatch({type: 'RESET_BANNER'})
        }, 2000)
    })
    .catch(err => {
        dispatch({type: '!FORM_LOADING'})
        dispatch({type: 'SHOW_BANNER', payload: {message: 'Quota exceeded', type: 'warning'}})
        setTimeout(() => {
            dispatch({type: 'RESET_BANNER'})
        }, 2000)
    })
}

export const downloadFile = id => dispatch => {
    axios.get(`https://cloud-box-api.herokuapp.com/download/${id}`)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

export const deleteFile = id => dispatch => {
    dispatch({type: 'MODAL_LOADING'})
    axios.delete(`https://cloud-box-api.herokuapp.com/download/${id}`)
    .then(res => {
        dispatch({type: '!MODAL_LOADING'})
        dispatch({type: 'DELETE_FILE', payload: id})
        dispatch({type: 'SHOW_BANNER', payload: {message: 'File Deleted Successfully', type: 'success'}})
        setTimeout(() => {
            dispatch({type: 'RESET_BANNER'})
        }, 2000)
    })
    .catch(err => {
        dispatch({type: '!MODAL_LOADING'})
        console.log(err)
    })
}

export const changeLayout = layout => {
    return ({type: 'CHANGE_LAYOUT', payload: layout})
}

export const selectFile = file => {
    return ({type: 'SELECT_FILE', payload: file})
}

export const unselectFile = () => {
    return ({type: 'UNSELECT_FILE'})
}