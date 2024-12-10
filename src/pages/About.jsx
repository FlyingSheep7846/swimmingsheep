import React from "react";
import "../stylesheets/About.css";
import profileImage from "../assets/images/IMG_3868.jpg";
import Skill from "../components/Skill.jsx";

function About(){

    return (
        <div style={{paddingBottom: '20px'}}>
            <div className="profile">
                
                <div className="name">
                    <h1>Hey &#128075;<br></br>I'm Kevin</h1>
                </div>
                
                <div className="imageContainer">
                    <img className="image" src={profileImage}></img>
                </div>
                
            </div>

            <div className="infoBox">
                <div className="infoParagraph">
                    <p>
                        I'm a second year student in Software Engineering Co-op (B.Eng) at McGill University. My main focuses are game programming and web/app development, but I am always open and passionate to exploring new technologies in software.
                    </p>
                    <p>
                        In my spare time, I love to draw, attend concerts, and of course make games :)
                    </p>
                </div>
                <div className="skillsOverview">
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