import profileImg from './images/photo.jpeg'

const Main = () => {
    return (
        <div className="main">
            <div className='main--title'>Craig Yeoman</div>
            <div>
                <img className='main--profile-pic' src={profileImg} alt='profile-pic'/>
            </div>
        </div>
    )
}

export default Main