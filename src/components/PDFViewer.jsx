import React from 'react';
import resumeGeneral from '../assets/misc/resume_general.pdf';
import resumeGamedev from '../assets/misc/resume_gamedev.pdf';

import resumeGeneralUpdated from '../assets/misc/resume_general_updated.pdf';
import resumeGamedevUpdated from '../assets/misc/resume_dec2025.pdf';
import "../stylesheets/InteractiveButton.css";

const PDFViewer = () => {

return (
    <>
    <div style={{
        height: '80vh',
        width: '60vw',
        maxWidth: '100%', // Prevents exceeding the screen width
        maxHeight: '100%', // Prevents exceeding the screen height
        margin: 'auto auto',
        overflow: 'hidden',
        border: 'solid 2px black'}}>
        
        <iframe src={resumeGamedevUpdated} style={{
            width: '100%', 
            height: '100%',}} />
    </div>

    <center style={{
        scale: '0.8',
        padding: '10px',
    }}>
        <a className='page-button'
            href={resumeGamedevUpdated}
            download="KEVINBAI_RESUME.pdf"
        >
            Download Resume
        </a>
    </center>
        

    </>
);
};


export default PDFViewer;