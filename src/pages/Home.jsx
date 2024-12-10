import React from "react";
import Profile from "../components/Profile";
import PDFViewer from "../components/PDFViewer";
import Footer from "../components/Footer";
import PageButton from "../components/PageButton";

function Home(){

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            minHeight: '100vh',
            gap: '20px', 
            padding: '40px 0px', 
        }}>

            <div style={{
                flex:1,
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                }}>
                <Profile/>
            </div>

            <div style={{
                flex: 1,
                paddingBottom: '20px',
            }}>
                <PageButton text={"See Projects"} altText={"what"} link={"See Projects"}/>
                <PageButton text={"Contact Me"} altText={"what"} link={"Contact Me"}/>
            </div>

            <div style={{
                flex:1,
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                }}>
                <PDFViewer/>
            </div>
        
        </div>

    )

}

export default Home