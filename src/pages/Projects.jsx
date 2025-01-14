import React, { useState } from "react";
import Project from "../components/Project"
import { projects } from "../components/Projects.js";

import lastcall from "../assets/images/projects/LastCall.png";
import site from "../assets/images/projects/site_home.png";
import siteAbout from "../assets/images/projects/site_aboutme.png";
import duck from "../assets/images/projects/proDUCKtive.jpg";
import duckView from "../assets/images/projects/proDUCKtive_view.png";



const Projects = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Game Development", "App Development"]
    
    const filteredProjects = projects.filter((project) => 
        selectedCategory === "All" ? true : project.category === selectedCategory    
    );

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };


    return <div>

        {/* Row of Filters */}
        <div className="category-filters">
            {categories.map((category) => (
                <button 
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={selectedCategory === category ? "active" : ""}
                    >
                        {category}
                    </button>
            ))}
        </div>


        {/* Projects List */}
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            gap: '20px', 
            padding: '25px 0px', 
            }}>

            {filteredProjects.map((project) => (
                <Project 
                    name={project.name}
                    tools={project.tools}
                    images={project.images}
                    description={project.description}
                    link={project.link}
                    linkName={project.linkName}
                />
            ))}
        </div>
    </div>

};

export default Projects;

