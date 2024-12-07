import React from 'react';
import resume from '../assets/misc/resume.pdf';

const PDFViewer = () => {

return (
    <div style={{width: '60%', margin: '0 auto'}}>
        <iframe src={resume} style={{width: '100%', aspectRatio: '9/8'}} />
    </div>
);
};


export default PDFViewer;