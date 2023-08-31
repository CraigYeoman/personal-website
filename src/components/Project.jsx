const Project = (project) => {
  console.log(project);
  const { title, img, description, tools, link, github } = project.project;
  console.log(project);
  console.log(project.title);
  return (
    <div className="project" id="project">
      <img alt="img" src={img} />
      <div className="project-container">
        <h2 className="project--title">{title}</h2>
        <div className="project--tech">
          {tools.map((tool) => {
            return <div className="project--tech-item">{tool.name}</div>;
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
        </div>
      </div>
    </div>
  );
};

export default Project;
