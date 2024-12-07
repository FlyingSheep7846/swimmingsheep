import React from "react";

const styles = {
    backgroundColor : "transparent",
    border : "none",
    cursor : "pointer",
    padding : '10px',
};

const imageStyles = {
    width : "50px",
    height : "auto",
};

const IconButton = ({imageSrc, altText, link}) => {

    return(
        <a href={link} target="_blank" rel="noopener noreferrer" style={styles}>

            <img src={imageSrc} alt={altText} style={imageStyles}/>

        </a>

    )


}

export default IconButton