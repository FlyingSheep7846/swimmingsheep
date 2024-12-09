import React from 'react';
import resume from '../assets/misc/resume.pdf';

const PDFViewer = () => {

return (
    <div style={{
        height: '100vh',
        width: '60vw',
        maxWidth: '100%', // Prevents exceeding the screen width
        maxHeight: '100%', // Prevents exceeding the screen height
        margin: 'auto',
        overflow: 'hidden',}}>
        
        <iframe src={resume} style={{width: '100%', height: '100%',}} />
    </div>
);
};


export default PDFViewer;