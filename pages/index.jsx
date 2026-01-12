import React from "react";
import Profile from "../src/components/Profile";
import PDFViewer from "../src/components/PDFViewer";
import Footer from "../src/components/Footer";
import PageButton from "../src/components/PageButton";
import Layout from "../src/components/Layout";

function Home(){

    return (
        <Layout>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '10px', 
                padding: '25px 0px', 
            }}>

                <div style={{
                    flex:2,
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
                    <PageButton text={"See Projects"} altText={"Projects"} link={"#/projects"}/>
                    {/* <PageButton text={"Contact Me"} altText={"what"} link={"Contact Me"}/> */}
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
        </Layout>

    )

}

export default Home