import React from 'react';
import Links from './Links';
const profileImg2 = '/images/1696462724208.jpg'

function Profile(){

    const styles = {
        overall :{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2vh',

            height: '80vh',
            width: '60vw',
            margin: 'auto auto',
            overflow: 'hidden',
        },

        container: {
            flex: 2,
            maxHeight: '35%',
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sansSerif`
        },

        textContainer: {
            flex: 1,
            height: '30vh',
            width: '30vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            fontSize: 'calc(1vw + 1vh)',
        },

        imageContainer: {
            flex: 1,
            height: '50vh',
            width: '50vw',
            maxHeight: '100%',
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
            maxWidth: '15vw',
        },

        links: {
            flex: 1,
            maxHeight: '8vh',
            maxWidth: '100%',
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