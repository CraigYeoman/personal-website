import Header from "../Header"
import erpApp1 from "../images/erp-1.png"
import erpApp2 from "../images/erp-2.png"
import erpApp3 from "../images/erp-3.png"


const WorkOrderApp = () => {
    return (
        <div>
            <Header />
            <div className="page">
                <div className="page--container">              
                    <h2>Work Order App</h2>
                    <p >An application built to track work orders and store information on parts, customers, vendors, and labor.</p>
                    <div className="project--button-container">
                        <a href="https://github.com/CraigYeoman/erp-yre" target="_blank" rel="noreferrer">
                            <button className="project--button inverse">Github</button>
                        </a>
                        <a href="https://yre-erp.onrender.com/" target="_blank" rel="noreferrer">
                            <button className="project--button inverse" >Project Live</button>
                        </a>
                    </div>
                    <h3>Objectives</h3>
                    <p>The main goal was to reduce time spent searching through paper work orders and the ability to better visualize the volume and types of work orders.</p>
                    <ul className="project--vertical-list" style={{listStyleType: "circle"}}>
                        <li>Ability to visualize volume and types of work orders.</li>
                        <li>Filter through work orders by date, customer name, job type, price</li>
                        <li>Store customer, parts, vendors, and labor information in one location</li>
                        <li>See which work orders are past due</li>
                    </ul>
                    <h3>Development</h3>
                    <ul className="project--horizontal-list">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Mongoose</li>
                        <li>MongoDB</li>
                        <li>Postman</li>
                        <li>Material UI</li>
                        <li>ESLint</li>
                        <li>Prettier</li>
                    </ul>
                        
                    <h3>Out Come</h3>
                        <p>Most objectives were completed.  Due to time constraints some were postponed and will be implemented at a later date.  The application is deployed and hosted on Render.com.  New features have been requested and bugs identified by employees using the app.</p>
                    <h3>Future Revisions</h3>
                        <p>The ability to track inventory and orders.</p>  
                    <div className="project--images">
                        <div className="img-container"><img alt="img1" src={erpApp1}/></div>
                        <div className="img-container"><img alt="img2" src={erpApp2}/></div>
                        <div className="img-container"><img alt="img3" src={erpApp3}/>  </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkOrderApp