const styles = {

    textAlign: "left",
}


function Skill({type, list}){
    return (
        <div style={styles}>
            <h2>{type}</h2>
            <p>{list}</p>
        </div>        
    );
}

export default Skill   