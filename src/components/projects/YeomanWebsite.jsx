import Header from "../Header"
import yreWebsite from "../images/yre-website.png"

const YeomanWebsite = () => {
    return (
        <div>
            <Header />
            <div className="page">
                <div className="page--container">              
                    <h2 style={{fontSize: "2.8rem"}}>Yeoman Race Engines Website</h2>
                    <p>Website redesign for my family's business.</p>
                    <div className="project--button-container">
                        <a href="https://github.com/CraigYeoman/yre-website" target="_blank" rel="noreferrer">
                            <button className="project--button inverse">Github</button>
                        </a>
                        <a href="https://yeomanraceengines.com/" target="_blank" rel="noreferrer">
                            <button className="project--button inverse">Project Live</button>
                        </a>
                    </div>
                    <h3>Objectives</h3>
                    <p>The main objective was to update thier current website from the last one I built.  The website must show prices of engines and information about the company.</p>
                    <ul className="project--vertical-list" style={{listStyleType: "circle"}}>
                        <li>Show the types of engines they specialize in and price</li>
                        <li>Display achievements of the business and customers</li>
                        <li>Update the visuals</li>
                    </ul>
                    <h3>Developement</h3>
                    <ul className="project--vertical-list">
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                        
                    <h3>Out Come</h3>
                        <p>Web site was revised and deployed.</p>
                    <h3>Future Revisions</h3>
                        <p>The ability for admin to login and update pricing.</p>
                    <div className="project--images">
                        <div className="img-container"><img alt="img1" src={yreWebsite}/></div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default YeomanWebsite