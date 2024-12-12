import React from "react";
import styles from "../stylesheets/About.module.css";
import profileImage from "../assets/images/IMG_3868.jpg";
import Skill from "../components/Skill.jsx";

function About(){

    return (
        <div style={{paddingBottom: '20px'}}>
            <div className={styles.profile}>
                
                <div className={styles.name}>
                    <h1>Hey &#128075;<br></br>I'm Kevin</h1>
                </div>
                
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={profileImage}></img>
                </div>
                
            </div>

            <div className={styles.infoBox}>
                <div className={styles.infoParagraph}>
                    <p>
                        I'm a second year student in Software Engineering Co-op (B.Eng) at McGill University. My main focuses are game programming and web/app development, but I am always open and passionate to exploring new technologies in software.
                    </p>
                    <p>
                        In my spare time, I love to draw, attend concerts, and of course make games :)
                    </p>
                </div>
                <div className={styles.skillsOverview}>
                    <Skill type={"Programming Languages"}
                        list={"Java, C#, C++, HTML, CSS, JavaScript, Python, C"}
                    />

                    <Skill type={"Frameworks and Libaries"}
                        list={"Unity, SpringBoot, PostgreSQL, React, NodeJS"}
                    />

                    <Skill type={"Dev Tools and Environments"}
                        list={"Git/GitHub/Gitea, Jira, IceScrum, Visual Studio Code, Eclipse, Jetbrains"}
                    />                    
                </div>
            </div>
            
        
        </div>

    )

}

export default About