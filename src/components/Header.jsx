import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

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
                    <HashLink className="header--link" to='/personal-website#main'>Home</HashLink>
                </li>
                
                <li>
                    <HashLink className="header--link" to='/personal-website#skills'>Skills</HashLink>
                </li>
                <li>
                    <HashLink className="header--link" to='/personal-website#projects'>Projects</HashLink>
                </li>
                <li>
                    <HashLink className="header--link" to='/personal-website#contact'>Contact</HashLink>
                </li>
            </ul>
        </div>
    )
}

export default Header