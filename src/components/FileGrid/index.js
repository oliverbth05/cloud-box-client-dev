import React from 'react';
import File from '../File';

export default function FileGrid(props) {
    
    const filesMapped = props.files.map(file => {
        return <File selectFile = {props.selectFile} {...file} />
    })
    
    return (
        <div className = 'file-grid'>
            {filesMapped}
        </div>
    )
}