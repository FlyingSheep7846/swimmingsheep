import Button from './Button.jsx'

function Links(){

    const style = {
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'row',
        justifyContent: 'center',
    }

    return(

        <div style={style}>
            <Button name = "LinkedIn" link ="https://www.linkedin.com/in/kevinycbai/"/>
            <Button name = "PlaceHolder" link = "huh"/>

        </div>
    );
}

export default Links