import family from './images/family.jpeg'
import racing from './images/racing.jpg'
import threedprinting from './images/3dprinting.jpg'
import raspberry from './images/raspberry.jpg'
import Header from './Header'

const About = () => {
    return (
        <div>
            <Header></Header>
        <div className="page">
            <div>
            <div className='page--container'>
                <h2 style={{marginBottom: 0}}>Who Am I?</h2>
                <h3>As a person</h3>
                <p style={{lineHeight: "1.5"}}>I’m curious by nature and enjoy learning how things work. I was told when I was younger my favorite question was “Why?”. 
                I’ve been taking things apart and rebuilding them for as long as I can remember. 
                Mechanical or digital I love learning how systems work and the process of building them.
                </p>
                <h3>As a coworker</h3>
                <p style={{lineHeight: "1.5"}}>I’m a team player, I’m always looking to help out my coworkers in whatever way possible. 
                I’ve been told I’m a great listener and am very coachable. I’m very easy going and get along with everyone. 
                If I don’t understand a problem I always speak up and make sure I’m heading in the right direction. 
                I grew up in a family of entrepreneurs who instilled initiative and creativity into my work ethic. 
                I always give what I’m working on 110% and go the extra mile.
                </p>
                <h3>As a developer</h3>
                <p style={{lineHeight: "1.5"}}>I do my best to write clean, consistent, readable and maintainable code. 
                I personally enjoy improving the efficiency of applications and the user experience. 
                It is important to me that my code has reusability and sustainability. 
                I welcome constructive criticism and I have no issues revising or reworking projects. 
                “Some of the best lessons we ever learn, we learn from our mistakes and failures. The error of the past is the success and wisdom of the future.” Tryon Edwards
                </p>
                </div>
            <div className='hobbies--container'>
                <div className='row' style={{gap: "10px", marginBottom: "20px"}}>
                    <h2 className="section--title" style={{marginRight: "50px"}}>Hobbies</h2>
                    <div className='hobbies--racing'>
                        <img src={racing} alt='racing' />
                        <h3>Racing</h3>
                    </div>
                    
                </div>
                <div className='row' style={{gap: "50px"}}>
                    <div className='hobbies--family'>                        
                        <img src={threedprinting} alt='3d printing' />
                        <h3>3d Printing</h3>
                    </div>
                    <div className='hobbies--3d'>
                    <img src={family} alt='family' />
                        
                        <h3>Family</h3>
                    </div>
                    <div className='hobbies--rasp'>
                        <img src={raspberry} alt='rasperry pi' />
                        <h3>Raspberry Pi, Arduino</h3>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default About