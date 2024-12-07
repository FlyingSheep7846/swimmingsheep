import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Header(){

    const styles = {
        
        navbar : {
            display : 'flex',
            justifyContent : 'space-between',
            position : 'sticky',
            padding: '0rem 2rem'
        },

        links : {
            display : 'flex',
            listStyle : 'none',
        },

        link : {
            margin : '0 0.5rem',
            fontFamily: 'Helvetica',
            textDecoration : 'none',
            color : 'white',
        },

    }

    return(
    

        <header style={styles.navbar}>

            <h1>Kevin Bai</h1>
            <nav>
                <ul style={styles.links}>
                    <li style={styles.link}><Link className="header-link" to="/">Home</Link></li>
                    <li style={styles.link}><Link className="header-link" to="/about">About Me</Link></li>
                    <li style={styles.link}><Link className="header-link" to="/contact">Contact</Link></li>
                </ul>
            </nav>

        </header>
    );

}

export default Header