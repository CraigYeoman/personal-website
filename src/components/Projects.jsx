import Project from "./Project";
import yreApp from "./images/erp-app.png";
import hrApp from "./images/hr-app.png"
import yreWebsite from "./images/yre-website.png"

const projects = [
  {
    title: "Work Order App",
    img: yreApp,
    tools: [
      { name: "node-js" },
      { name: "express" },
      { name: "react" },
      { name: "mongoDB" },
      { name: "mongoose" },
      { name: "material ui" },
    ],
    description:
      "An application built to track work orders and store information on parts, customers, vendors, and labor.  At my family's business all work orders were tracked using paper.  The main objectives were to reduce time spent searching through paper work orders and the ability to better visualize the volume and types of work orders. ",
    github: "https://github.com/CraigYeoman/erp-yre",
    link: "https://yre-erp.onrender.com/",
    projectDetails: "/WorkOrderApp",
  },
  {
    title: "HR Management App",
    img: hrApp,
    tools: [
      { name: "C#" },
      { name: ".Net Core" },
      { name: "Entity Framework Core" },
      { name: "MVC" },
      { name: "bootstrap" },
    ],
    description:
      "This is a .Net 6 application used to track employee leave. Employees can login and request time off. Administrators can review, approve, and deny requests.",
    github: "https://github.com/CraigYeoman/HRManagementWebNet6",
    link: "https://hrmanagementweb20230818105522.azurewebsites.net/",
    projectDetails: "/HRManagement ",
  },
  {
    title: "Yeoman Race Engines Website",
    img: yreWebsite,
    tools: [
      { name: "React" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
    ],
    description:
      "The latest website I built for my family's business.  In bewtween projects I'm working on another iteration.",
    github: "https://github.com/CraigYeoman/yre-website",
    link: "https://yeomanraceengines.com/",
    projectDetails: "/YeomanWebsite",
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="section--title">Projects</h2>
      {projects.map((project) => {
        return <Project project={project} key={project.title} />;
      })}
    </div>
  );
};

export default Projects;
