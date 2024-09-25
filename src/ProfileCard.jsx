import profileImg from './assets/profileimg.jpg'

function ProfileCard(){

    return(

        <div className="card">
            <img className='cardImage' src={profileImg} alt="profile image"></img>
            <h2>SwimmingSheep</h2>
            <p>Hello, welcome to my portfolio website</p>

        </div>
    );

}

export default ProfileCard