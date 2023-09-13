import { useEffect } from "react";
import profileImg from "./images/photo.jpeg";

const Main = () => {

  

  const particleEffect = () => {
    let sizeW = Math.random() * 12;
    let duration = Math.random() * 3;
    let particles = document.createElement('div');
    let hero = document.getElementById("main");
    particles.setAttribute('class', 'particles')  
    hero.appendChild(particles);
    particles.style.width = 2+sizeW+'px';   
    // eslint-disable-next-line no-restricted-globals
    particles.style.top = Math.random() * + innerHeight + 'px';
    particles.style.animationDuration = 3 + duration + 's';
    setTimeout(() => {
      hero.removeChild(particles)
    },5000)
  }

  useEffect(() => {
    setInterval(() => {
      particleEffect()
    }, 400)
    
  },[])

  return (
    <div id="main" className="main">
      <div className="main--profile-container">
        <div className="main--title">Craig Yeoman</div>    
        <div className="main--subtitle">Software Engineer</div>     
        <div className="main--text">I enjoy creating things and solving problems.  I'm always looking forward to learning something new.</div>
      </div>
    </div>
  );
};

export default Main;
