const Header = () => {
    return (
        <div className="header">
            <ul>
                <li>
                    <a className="header--link" href="#home" to='/'>Home</a>
                </li>
                <li>
                    <a className="header--link" href="#about" to='/'>About</a>
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