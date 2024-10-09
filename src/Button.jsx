import React from "react";

function Button(type){

    const styles = {
        borderWidth: '2px',
        borderRadius: '10%',
        margin: '20px auto'
    }

    return(

        <button style={styles} formAction={type.link}>{type.name}</button>
        

    );
}

export default Button