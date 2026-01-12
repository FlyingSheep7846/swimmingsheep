import IconButton from './IconButton.jsx';

const linkedin = '/icons/linkedin.png';
const devpost = '/icons/devpost.png';
const github = '/icons/github.png';
const itch = '/icons/itch.png';

function Links(){

    const style = {
        height: '6vh',
        margin: '0 auto',

        display: 'flex',
        gap: '2px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return(

        <div style={style}>

            <IconButton 
                imageSrc={linkedin}
                altText="LinkedIn"
                link="https://www.linkedin.com/in/kevinycbai/"
            />

            <IconButton 
                imageSrc={github}
                altText="GitHub"
                link="https://github.com/FlyingSheep22"
            />

            <IconButton 
                imageSrc={devpost}
                altText="Devpost"
                link="https://devpost.com/flyingsheep22"
            />

            <IconButton
                imageSrc={itch}
                altText="Itch.io"
                link="https://flyingsheep22.itch.io/"
            />

        </div>
    );
}

export default Links