import Project from "./Project";
import yreApp from "./images/yre-app.png";

const projects = [
  {
    title: "Work Order App",
    img: "https://res.cloudinary.com/ddcqxstsp/video/upload/v1685453235/erp-app_wavdic.gif",
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
  },
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
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="section--title">Projects</h2>
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
};

export default Projects;
