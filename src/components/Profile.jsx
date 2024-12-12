import React from 'react';
import Links from './Links';
import profileImg2 from '../assets/images/1696462724208.jpg'

function Profile(){

    const styles = {
        overall :{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '2vh',

            height: '30vh',
            width: '60vw',
            maxHeight: '100%',
            margin: 'auto auto',
            overflow: 'hidden',
            paddingBottom: '2vh',
        },

        container: {
            flex: 2,
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
            fontFamily: `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sansSerif`
        },

        textContainer: {
            flex: 1,
            height: '20vh',
            width: '20vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            fontSize: 'calc(1vw + 1.5vh)',
        },

        imageContainer: {
            flex: 1,
            height: '20vh',
            width: '20vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
        },

        image: {
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            borderRadius: '50%'
        },

        headerBox: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            flex: 1,
            textAlign : 'left',
            
        },

        textBox: {
            flex: 1,
        },

        links: {
            flex: 1,
            height: '1vh',
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