import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";

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
                <a className="header--link" href="https://www.linkedin.com/in/craig-yeoman-10341a8b/" target="_blank" rel="noopener noreferrer"><IoMdDocument /></a>
                </li>
            </ul>
            
            <ul>
                <li>
                    <a className="header--link" href="#main" to='/'>Home</a>
                </li>
                
                <li>
                    <a className="header--link" href="#skills" to='/'>Skills</a>
                </li>
                <li>
                    <a className="header--link" href="#projects" to='/'>Projects</a>
                </li>
                <li>
                    <a className="header--link" href="#contact" to='/'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Header