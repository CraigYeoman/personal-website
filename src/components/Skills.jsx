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
import postman from "./images/svg/postman.svg";
import react from "./images/svg/icon_react.svg";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="section--title-inverse">Skills</h2>
      <div className="row" style={{gap: "30px"}}>
        <div className="column">
            <div className="skills--about">
              <p className="section--text-inverse" style={{marginTop: 0}}>I've always enjoyed computers and technology.  
              From making things with Arduino and Raspberry Pi, writing custom macros for CNC, python scripts for productivity in excel, 
              building websites, and creating applications, I offer a diverse skill set.</p>
            
            <div>

            </div>
            
            </div>
          </div>
        <div className="skills--svg--container">
        <div className="skills--svg">
            <img src={javascript} alt="javascript" />
            Javascript
          </div>
          <div className="skills--svg">
            <img src={csharp} alt="csharp" />
            C#
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
            <img src={html} alt="html" />
            HTML
          </div>
          <div className="skills--svg">
            <img src={css} alt="css" />
            CSS
          </div>
          
          <div className="skills--svg">
            <img src={jest} alt="jest" />
            Jest
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
            <img src={postman} alt="postman" />
            Postman
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
      <div className="row" style={{width:"30vw", marginTop:"30px"}}>              
              <Link className="link-inverse" to="/CV" target="_blank" rel="noopener noreferrer">
              <div className="project--button" style={{width:"100px"}}>CV</div>
              </Link>
              
              <Link className="link-inverse" to="/About">
                <div className="project--button">About Me
                
                </div>
              </Link>
            </div>
    </div>
  );
};

export default Skills;
