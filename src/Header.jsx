
function Header(){

    const styles = {
        paddingTop: "200px"
    }


    return(
        <header style={styles}>

            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );

}

export default Header