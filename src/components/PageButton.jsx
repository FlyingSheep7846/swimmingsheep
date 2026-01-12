import React from "react";

const PageButton = ({text, altText, link}) => {

    return(

        <a href={link} className="page-button">
            {text}
        </a>
    )


}

export default PageButton