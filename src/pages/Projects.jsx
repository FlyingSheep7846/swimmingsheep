import React from "react";
import Project from "../components/Project"

import site from "../assets/images/projects/site_home.png";
import siteAbout from "../assets/images/projects/site_aboutme.png";
import duck from "../assets/images/projects/proDUCKtive.jpg";
import duckView from "../assets/images/projects/proDUCKtive_view.png";


function Projects(){

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            gap: '20px', 
            padding: '25px 0px', 
        }}>
        
            <Project 
                name={"SwimmingSheep.com"}
                tools={"React, HTML/CSS, Node.js"}
                images={[site, siteAbout]}
                description={"The current wesbite you are visiting! Self taught and developed fully with React.js as a first step into web dev."}
                link={"https://github.com/FlyingSheep22/swimmingsheep"}
                linkName={"Github Repository"}
            />

            <Project 
                name={"ProDUCKtive"}
                tools={"Unity, C#, Github"}
                description={"Desktop Overlay Companion with Pomodoro and wellness checks through periodic self-care reminders."}
                images={[duck, duckView]}
                link={"https://devpost.com/software/producktive"}
                linkName={"Devpost Page"}
            />

        </div>


    )

}

export default Projects