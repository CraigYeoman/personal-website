import css from "./images/svg/icon_css.svg";
import express from "./images/svg/icon_express.svg";
import git from "./images/svg/icon_git.svg";
import html from "./images/svg/icon_html.svg";
import csharp from "./images/svg/icon_csharp.svg";
import javascript from "./images/svg/icon_javascript.svg";
import jest from "./images/svg/icon_jest.svg";
import linux from "./images/svg/icon_linux.svg";
import mongodb from "./images/svg/icon_mongodb.svg";
import nodejs from "./images/svg/icon_nodejs.svg";
import python from "./images/svg/icon_python.svg";
import react from "./images/svg/icon_react.svg";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="section--title">Skills</h2>
      <div className="skills--svg--container">
        <div className="skills--svg">
          <img src={html} alt="html" />
          HTML
        </div>
        <div className="skills--svg">
          <img src={css} alt="css" />
          CSS
        </div>
        <div className="skills--svg">
          <img src={javascript} alt="javascript" />
          Javascript
        </div>
        <div className="skills--svg">
          <img src={jest} alt="jest" />
          Jest
        </div>
        <div className="skills--svg">
          <img src={react} alt="react" />
          React
        </div>
        <div className="skills--svg">
          <img src={nodejs} alt="nodejs" />
          Nodejs
        </div>
        <div className="skills--svg">
          <img src={express} alt="express" />
          Express
        </div>
        <div className="skills--svg">
          <img src={mongodb} alt="mongodb" />
          Mongodb
        </div>
        <div className="skills--svg">
          <img src={python} alt="python" />
          Python
        </div>
        <div className="skills--svg">
          <img src={csharp} alt="csharp" />
          C#
        </div>
        <div className="skills--svg">
          <img src={linux} alt="linux" />
          Linux
        </div>
        <div className="skills--svg">
          <img src={git} alt="git" />
          Git
        </div>
      </div>
    </div>
  );
};

export default Skills;
