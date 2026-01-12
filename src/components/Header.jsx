import React from 'react';
import Link from 'next/link';

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

            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <h1 style={{marginBottom: 0}}>Kevin Bai</h1>
                <hr style={{margin: 0,
                            width: '60%',
                }}></hr>
            </div>
            
            
            <nav>
                <ul style={styles.links}>
                    <li style={styles.link}><Link className="header-link" href="/">Home</Link></li>
                    <li style={styles.link}><Link className="header-link" href="/projects">Projects</Link></li>
                    <li style={styles.link}><Link className="header-link" href="/about">About Me</Link></li>
                    {/* <li style={styles.link}><Link className="header-link" href="/personal">Personal</Link></li> */}
                    <li><button onClick={scrollToBottom} 
                        style={styles.link}
                    >Contact</button></li>
                </ul>
            </nav>

        </header>
    );

}

export default Header