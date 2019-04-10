import React from 'react';
import filesize from 'filesize';
import { iconResolve } from '../../util';

export default function File(props) {
    console.log(props.fileType)
    return (
        <div className = 'file' onClick = {() => {props.selectFile({...props})}}>
            <i className = {iconResolve(props.fileType)}></i>
            <p className = 'file__name'>{`${props.fileName.slice(0 ,15)}...`}</p>
            <p className = 'file__size'>{filesize(props.size)}</p>
        </div>
    )    
}