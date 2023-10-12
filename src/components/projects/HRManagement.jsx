import Header from "../Header"
import View from "../images/View.PNG"
import View2 from "../images/View2.PNG"
import View3 from "../images/View3.PNG"

const HRManagement = () => {
    return (
        <div>
            <Header />
            
            <div className="page">
                <div className="page--container">              
                    <h2>HR Management Website</h2>
                    <p className="project--description">An application built to track employee leave.</p>
                    <div className="project--button-container">
                        <a href="https://github.com/CraigYeoman/HRManagementWebNet6" target="_blank" rel="noreferrer">
                            <button className="project--button inverse">Github</button>
                        </a>
                        <a href="https://hrmanagementweb20230818105522.azurewebsites.net/" target="_blank" rel="noreferrer">
                            <button className="project--button inverse">Project Live</button>
                        </a>
                    </div>
                    <h3>Objectives</h3>
                    <p>The main goal was to allow the administrator to track, review, approve, and deny employee leave requests.  Employees would also need the ability to view and request time off.</p>
                    <ul className="project--vertical-list" style={{listStyleType: "circle"}}>
                        <li>Track types of employee leave (sick, vacation, etc.)</li>
                        <li>Let employees see how much leave they are allocated and leave remaining</li>
                        <li>Store customer, parts, vendors, and labor information in one location</li>
                        <li>Allow admin to approve or reject request of leave</li>
                    </ul>
                    <h3>Development</h3>
                    <ul className="project--vertical-list" style={{paddingInlineStart: 15}} >
                        <li>ASP.NET Core</li>
                        <li>Entity Framework Core</li>
                        <li>C# and .Net Core Web Syntax</li>
                        <li>MVC (Models, Views and Controllers) Pattern</li>
                        <li>Repository and Unit Of Work Patterns and Dependency Injection</li>
                        <li>User Authentication using ASP.NET Core Identity</li>
                        <li>Manage Packages with NuGet Manager</li>
                        <li>Bootstrap to style and manipulate the overall layout</li>
                    </ul>
                    <h3>Out Come</h3>
                        <p>The application goals were met and it is deployed on Azure.</p>
                    <h3>Future Revisions</h3>
                        <p>The ability for employees to clock in-out.</p>
                        <div className="project--images">
                            <div className="img-container"><img src={View}/></div>
                            <div className="img-container"><img src={View2}/></div>
                            <div className="img-container"><img src={View3}/>  </div>
                        </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default HRManagement