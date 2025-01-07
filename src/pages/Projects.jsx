import React from "react";
import Project from "../components/Project"

import lastcall from "../assets/images/projects/LastCall.png";
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
                description={"The current wesbite you are visiting! Fully developed with React.js."}
                link={"https://github.com/FlyingSheep22/swimmingsheep"}
                linkName={"Github Repository"}
            />

            <Project
                name={"Last Call"}
                tools={"Unity, C#, Cinemachine, Unity UI, Aseprite"}
                images={[lastcall, lastcall]}
                description={"Roguelike survival game solo developed in Unity, with assets created in Aseprite and Procreate. Extensively explored Unity's UI and cinemachine frameworks to create custom menus and camera effects."}
                link={"https://flyingsheep22.itch.io/last-call"}
                linkName={"Itch.io page (Try it out!)"}
            />

            <Project 
                name={"ProDUCKtive"}
                tools={"Unity, C#, Github"}
                description={"Desktop Overlay Companion with Pomodoro and wellness checks through periodic self-care reminders. Developed fully in Unity alongside two teammates during McGill CodeJam 2024."}
                images={[duck, duckView]}
                link={"https://devpost.com/software/producktive"}
                linkName={"Devpost Page"}
            />

        </div>


    )

}

export default Projects