const styles = {
    footer : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        bottom: 0,
        left: 0,
        width: '100vw',
        height: '25vh',
        color: 'white',
        backgroundColor : 'black',
        margin: 0,
    },

    contactInfo : {
        lineHeight: '1.6rem',
        margin: '8px',
        color: 'white',
    }
}


function Footer(){
    return (
        <footer style={styles.footer}>
            <center>
            
            <h2 style={{marginBottom: '0px'}}>Contact Me:</h2>
            <h3 style={styles.contactInfo}>(613) 265-1862 <br></br>
                <a style={{color: 'white'}} href="mailto:kevinycbai@gmail.com">kevinycbai@gmail.com</a></h3>

            <h4>&copy; {new Date().getFullYear()} SwimmingSheep</h4>
            </center>
        </footer>
    );
}

export default Footer   