export const iconResolve = (ext) => {
    switch(ext) {
        case ('.svg' || '.png' || '.jpg' || '.jpeg' || '.svg' || '.ico') :
            return 'fas fa-file-image'
        
        case ('.mp3' || '.flac' || '.aac' || '.wav' || '.ogg' ) :
            return 'fas fa-file-audio'
        
        case ('.flv' || '.mp4' ):
            return 'fas fa-file-video'
            
        case ('.docx' ):
            return 'fas fa-file-word'
        
        case ('.pptx' ):
            return 'fas fa-file-powerpoint'
        
        case ('.xlsx' ):
            return 'fas fa-file-excel'
            
        case ('.csv' ):
            return 'fas fa-file-csv'
            
        case ('.pdf' ):
            return 'fas fa-file-pdf'
            
        case ('.css' || '.scss' || '.js' || '.html' ):
            return 'fas fa-file-code'
            
        case ('.txt' ):
            return 'fas fa-file-alt'
            
        default :
            return 'fas fa-file'
    }
}