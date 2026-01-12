import React from "react";
import styles from "../src/stylesheets/Personal.module.css";
const profileImage = "/images/IMG_3868.jpg";

import Song from "../src/components/Song.jsx"
import Skill from "../src/components/Skill.jsx";

import { useState, useEffect } from 'react'
import Layout from "../src/components/Layout.jsx";

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

            <div style={{paddingBottom: '20px'}}>
                {/* Your existing profile section */}
                <div className={styles.profile}>
                    <div className={styles.name}>
                        <h1>Hey &#128075;<br></br>I'm Kevin</h1>
                    </div>
                        
                    <div className={styles.imageContainer}>
                        <Song songInfo={notionData}/>
                    </div>
                </div>



                {/* Your existing info section */}
                <div className={styles.infoBox}>
                {/* ... existing content ... */}
                </div>

            </div>
        </Layout>

    )

}

export default Personal