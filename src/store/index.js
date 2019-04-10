import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    files: [],
    usageData: null,
    selectedFile: null,
    filesLoading: false,
    formLoading: false,
    modalLoading: false,
    layout: 'table',
    banner: {
        message: null,
        type: null
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'UPLOAD_FILE' :
            return {
                ...state,
                files: state.files.concat(action.payload),
                usageData: {
                    quota: 10000000,
                    used: state.usageData.used + action.payload.size
                }
            }
            
        case 'DELETE_FILE' :
            const deleted = state.files.filter(file => file.id === action.payload)[0]
            return {
                ...state,
                files: state.files.filter(file => file.id !== action.payload),
                selectedFile: null,
                usageData: {
                    quota: 10000000,
                    used: state.usageData.used - deleted.size
                }
            }
        
        case 'FETCH_FILES' :
            return {
                ...state, 
                files: action.payload.files,
                usageData: action.payload.usageData
            }
            
        case 'MODAL_LOADING' :
            return {
                ...state,
                modalLoading: true
            }
            
        case '!MODAL_LOADING' :
            return {
                ...state,
                modalLoading: false
            }
            
        case 'FILES_LOADING' :
            return {
                ...state,
                filesLoading: true
            }
            
        case '!FILES_LOADING' :
            return {
                ...state,
                filesLoading: false
            }
            
        case 'FORM_LOADING' :
            return {
                ...state,
                formLoading: true
            }
            
        case '!FORM_LOADING' :
            return {
                ...state,
                formLoading: false
            }
            
        case 'SELECT_FILE' :
            return {
                ...state,
                selectedFile: action.payload
            }
            
        case 'UNSELECT_FILE' :
            return {
                ...state,
                selectedFile: null
            }
            
        case 'CHANGE_LAYOUT' :
            return {
                ...state,
                layout: action.payload
            }
            
        case 'SHOW_BANNER' :
            return {
                ...state,
                banner: {
                    message: action.payload.message,
                    type: action.payload.type
                }
            }
            
        case 'RESET_BANNER' :
            return {
                ...state,
                banner: {
                    message: null,
                    type: null
                }
            }
            
        default: 
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk));