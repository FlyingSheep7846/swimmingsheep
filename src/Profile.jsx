import React from 'react';
import profileImg from './assets/profileimg.jpg'
import profileImg2 from './assets/1696462724208.jpg'

function Profile(){


    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40vh',
            width: 'auto',
            maxWidth: '450px',
            margin: '0 auto',
            fontFamily: `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sansSerif`
        },

        textContainer: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },

        imageContainer: {
            flex: 1,
        },

        image: {
            width: '100%',
            height: 'auto',
            maxWidth: '200px',
            borderRadius: '50%'
        },

        headerBox: {
            flex: 2,
            marginBottom: '5px'
        },

        textBox: {
            flex: 1
        }

    }

    return(

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

    );
}

export default Profile