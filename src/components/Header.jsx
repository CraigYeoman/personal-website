import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li>
                    <a className="header--link" href="https://github.com/CraigYeoman" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                </li>
                <li>
                    <a className="header--link" href="https://www.linkedin.com/in/craig-yeoman-10341a8b/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                </li>
                <li>
                    <Link className="header--link" to="/CV" target="_blank" rel="noopener noreferrer"><IoMdDocument /></Link>        
                </li>
            </ul>
            
            <ul>
                <li>
                    <a className="header--link" href="/personal-website#main" to='/'>Home</a>
                </li>
                
                <li>
                    <a className="header--link" href="/personal-website#skills" to='/'>Skills</a>
                </li>
                <li>
                    <a className="header--link" href="/personal-website#projects" to='/'>Projects</a>
                </li>
                <li>
                    <a className="header--link" href="/personal-website#contact" to='/'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Header