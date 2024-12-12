const styles = {
    footer : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        bottom: 0,
        left: 0,
        width: '100vw',
        height: '20vh',
        color: 'white',
        backgroundColor : 'black',
        margin: 0,
    },

    contactInfo : {
        lineHeight: '1.6rem',
    }
}


function Footer(){
    return (
        <footer style={styles.footer}>
            <center>
            
            <h3 style={styles.contactInfo}>Contact Me:<br></br>(613) 265-1862 <br></br>
                <a href="mailto:kevinycbai@gmail.com">kevinycbai@gmail.com</a></h3>

            <h3>&copy; {new Date().getFullYear()} SwimmingSheep</h3>
            </center>
        </footer>
    );
}

export default Footer   