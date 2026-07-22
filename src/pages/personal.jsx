import React from "react";
import styles from "@/stylesheets/Personal.module.css";
const profileImage = "/images/IMG_3868.jpg";

import Layout from "@/components/Layout/LayoutNew";
import SongsCard from "@/components/SongsCard/SongsCard";

import IntroBlock from "@/blocks/IntroBlock";

import { useState, useEffect } from 'react'
// import Layout from "@/components/Layout.jsx";

function Personal(){

    const [notionData, setNotionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch('/api/notion-data')
        .then(res => {
        console.log('Response status:', res.status);
        return res.text(); // Get as text first to see what it is
        })
        .then(text => {
        console.log('Raw response:', text);
        const data = JSON.parse(text); // Try to parse
        setNotionData(data);
        setLoading(false);
        })
        .catch(err => {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Layout>

            <IntroBlock songInfo={notionData}/>
            {/* <div style={{paddingBottom: '20px'}}>
                 Your existing profile section 
                <SongsCard songInfo={notionData}/>



                Your existing info section 
                <div className={styles.infoBox}>
                ... existing content ... 
                </div>
            </div> 
        */}
        </Layout>

    )

}

export default Personal