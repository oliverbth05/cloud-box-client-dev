import React from 'react';
import filesize from 'filesize';
import moment from 'moment';

import { iconResolve } from '../../util';


export default function FileTable(props) {

    const rowsMapped = props.files.map(file => {
        return (
            <tr onClick = {() => {props.selectFile(file)}}>
                <td><i className = {iconResolve(file.fileType)}></i> {file.fileName}</td>
                <td>{file.fileType}</td>
                <td>{filesize(file.size)}</td>
                <td>{ new moment(file.dateUploaded).fromNow() }</td>
            </tr>
        )
    })
    
    return (
        <div className = 'file-container'>
            <table className = 'file-table'>
                <th>Name</th>
                <th>Type</th>
                <th>Size</th>
                <th>Date Added</th>
                {rowsMapped}
            </table>
        </div>
    )
}