import IconButton from './IconButton.jsx';

import linkedin from '../assets/icons/linkedin.png';
import devpost from '../assets/icons/devpost.png';
import github from '../assets/icons/github.png';

function Links(){

    const style = {
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'row',
        justifyContent: 'center',
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

        </div>
    );
}

export default Links