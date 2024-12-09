import React from "react";
import Profile from "../components/Profile";
import PDFViewer from "../components/PDFViewer";
import Footer from "../components/Footer";

function Home(){

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            minHeight: '100vh',
            gap: '20px', 
            padding: '20px', 
        }}>

            <div>
                <Profile/>
            </div>
            
            <div>
                <PDFViewer/>
            </div>

            <Footer/>
        
        </div>

    )

}

export default Home