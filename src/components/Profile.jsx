import React from 'react';
import Links from './Links';
import profileImg2 from '../assets/images/1696462724208.jpg'

function Profile(){

    const styles = {
        overall :{
            height: '40vh',
            width: '60vw',
            maxHeight: '100%',
            margin: 'auto auto',
            overflow: 'hidden'
        },

        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '30vh',
            maxHeight: '100%',
            width: '30vw',
            maxWidth: '100%',
            margin: '0 auto',
            paddingBottom : '10px',
            fontFamily: `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sansSerif`
        },

        textContainer: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontSize: 'x-large',
        },

        imageContainer: {
            flex: 1,
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'center',
        },

        image: {
            width: '100%',
            height: 'auto',
            maxWidth: '13vw',
            borderRadius: '50%'
        },

        headerBox: {
            flex: 2,
            fontSize: '3vh',
            textAlign : 'bottom',
        },

        textBox: {
            flex: 1,
            fontSize: '3vh'
        },

        links: {
            height: '3vh',
            maxHeight: '100%',
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
                        
                    <div style={styles.textBox}>
                        <p style={{margin:0}}>Software Engineering Student</p>
                    </div>
                </div>
            </div>

            <div style={styles.links}>
                <Links/>
            </div>
            
        </div>
    );
}

export default Profile