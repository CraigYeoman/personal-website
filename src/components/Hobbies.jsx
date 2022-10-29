import family from './images/family.JPG'
import racing from './images/racing.jpg'
import threedprinting from './images/3dprinting.jpg'
import raspberry from './images/raspberry.jpg'

const Hobbies = () => {
    return (
        <div className="hobbies">
            <div className='hobbies--container'>
                <h2 className="section--title">Hobbies</h2>
                
                <div className='hobbies--family'>
                    <h3>Family</h3>
                    <img src={family} alt='family' />
                </div>
                <div className='hobbies--racing'>
                    <img src={racing} alt='racing' />
                    <h3>Racing</h3>
                </div>
                <div className='hobbies--3d'>
                    <img src={threedprinting} alt='3d printing' />
                    <h3>3d Printing</h3>
                </div>
                <div className='hobbies--rasp'>
                    <img src={raspberry} alt='rasperry pi' />
                    <h3>Raspberry Pi, Arduino</h3>
                </div>
            </div>
        </div>
    )
}

export default Hobbies