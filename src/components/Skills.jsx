import css from './images/svg/icon_css.svg'
import express from './images/svg/icon_express.svg'
import git from './images/svg/icon_git.svg'
import html from './images/svg/icon_html.svg'
import java from './images/svg/icon_java.svg'
import javascript from './images/svg/icon_javascript.svg'
import jest from './images/svg/icon_jest.svg'
import linux from './images/svg/icon_linux.svg'
import mongodb from './images/svg/icon_mongodb.svg'
import nodejs from './images/svg/icon_nodejs.svg'
import python from './images/svg/icon_python.svg'
import react from './images/svg/icon_react.svg'

const Skills = () => {
    return (
        <div className="skills" id="skills">Skills
            <div className='skills--svg'>
                <img src={html} alt='html' />
                <img src={css} alt='css' />
                <img src={javascript} alt='javascript' />
                <img src={jest} alt='jest' />
                <img src={react} alt='react' />
                <img src={nodejs} alt='nodejs' />
                <img src={express} alt='express' />
                <img src={mongodb} alt='mongodb' />
                <img src={python} alt='python' />
                <img src={java} alt='java' />
                <img src={linux} alt='linux' />
                <img src={git} alt='git' />
            </div>
        </div>
    )
}

export default Skills