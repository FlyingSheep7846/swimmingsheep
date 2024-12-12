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
            margin: '0 0.5rem',
            textDecoration: 'none',
            display: 'inline',
            color: 'black',
            background: 'none',
            border: 'none',
            fontSize: 'medium',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            
        },
            
    }

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      };

    return(
    

        <header style={styles.navbar}>

            <h1>Kevin Bai</h1>
            <nav>
                <ul style={styles.links}>
                    <li style={styles.link}><Link className="header-link" to="/">Home</Link></li>
                    <li style={styles.link}><Link className="header-link" to="/projects">Projects</Link></li>
                    <li style={styles.link}><Link className="header-link" to="/about">About Me</Link></li>
                    <li><button onClick={scrollToBottom} 
                        style={styles.link}
                    >Contact</button></li>
                </ul>
            </nav>

        </header>
    );

}

export default Header