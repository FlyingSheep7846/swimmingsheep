import "../stylesheets/Project.css";

function Project({name, images, link, linkName, description, tools}){
    return (
        <>
        <div className="projectBox">

            <h1 className="title">{name}</h1>
            <h2 className="text">Created with: {tools}</h2>
        
            <p>{description}</p>

            <div className="imagesGrid">
                {images.map((image,index) => (
                    <img className="image" key={index} src={image} />
                ))}
            </div>

            <center>
                <a href={link}>
                    {linkName}
                </a>
            </center>

        </div>

        </>
    );
}

export default Project