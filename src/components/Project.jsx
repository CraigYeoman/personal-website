import { Link } from "react-router-dom";

const Project = (project) => {

  const { title, img, description, tools, link, github, projectDetails} = project.project;

  return (
    <div className="project" id="project" key={title}>
      <div className="img-container">
        <img alt="img" src={img} />
      </div>
      <div className="project-container">
        <h2 className="project--title">{title}</h2>
        <div className="project--tech">
          {tools.map((tool) => {
            return <div className="project--tech-item" key={tool.name}>{tool.name}</div>;
          })}
        </div>
        <div className="project--description">{description}</div>
        <div className="project--button-container">
          <a href={github} target="_blank" rel="noreferrer">
            <button className="project--button">Github</button>
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <button className="project--button">Project Live</button>
          </a>
          <Link to={projectDetails}><button className="project--button">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
