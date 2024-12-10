import React from "react";
import "../stylesheets/InteractiveButton.css";


const PageButton = ({text, altText, link}) => {

    return(
        
        <a href={link} className="page-button">

        {text}

        </a>
        
        

    )


}

export default PageButton