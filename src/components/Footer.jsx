const styles = {
    footer : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        bottom: 0,
        left: 0,
        width: '100vw',
        height: '10vh',
        color: 'white',
        backgroundColor : 'black',
        margin: 0,
    }
}


function Footer(){
    return (
        <footer style={styles.footer}>
            <center>
            <p>&copy; {new Date().getFullYear()} SwimmingSheep</p>
            </center>
        </footer>
    );
}

export default Footer   