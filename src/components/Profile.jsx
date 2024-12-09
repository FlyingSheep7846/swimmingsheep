import React from 'react';
import Links from './Links';
import profileImg2 from '../assets/images/1696462724208.jpg'

function Profile(){

    const styles = {
        overall :{
            height: '35vh',
        },

        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto',
            maxWidth: '500px',
            margin: '0 auto',
            paddingBottom : '10px',
            fontFamily: `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sansSerif`
        },

        textContainer: {
            flex: 1,
            padding: '0px 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontSize: 'x-large',
        },

        imageContainer: {
            flex: 1,
            padding: '0px 10px',
        },

        image: {
            width: '100%',
            height: 'auto',
            maxWidth: '240px',
            borderRadius: '50%'
        },

        headerBox: {
            flex: 2,
            textAlign : 'bottom',
        },

        textBox: {
            flex: 1
        }

    }

    return(
        <div style= {styles.overall}>
            <div style={styles.container}>

                {/* Left Side Image */}
                <div style={styles.imageContainer}>
                    <img style={styles.image} src={profileImg2}></img>
                </div>

                {/* Right Side Boxes */}
                <div style={styles.textContainer}>
                    
                    <div style={styles.headerBox}>
                        <h1 style={{margin:0}}>Kevin Bai</h1>
                    </div>
                        <p style={{margin:0}}>Software Engineering Student</p>
                    <div style={styles.textBox}>

                    </div>
                </div>
            </div>

            <Links/>
        </div>
    );
}

export default Profile