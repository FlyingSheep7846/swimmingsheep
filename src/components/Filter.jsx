import React, { useState } from "react";

export default function Filter( {projects} ) {
    
    const [selectedCategory, getSelectedCategory] = useState("All");
    const categories = ["All", "Game Development", "App Development"]
    
    const filteredProjects = projects.filter((project) => 
        selectedCategory === "All" ? true : project.category === selectedCategory    
    );

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    }



    
    return <div>

        {/* Row of Filters */}
        <div className="filter-categories">

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
        
        <div className="projects-container">

            {filteredProjects.map((project) => (
                <div></div>
            )

            )}

        </div>

    </div>; 
}