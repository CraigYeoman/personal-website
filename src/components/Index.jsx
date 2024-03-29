import Header from './Header'
import Main from './Main'
import Skills from './Skills'
import Projects from './Projects'
import Contact from "./Contact";
import Footer from './Footer'

const Index = () => {
    return (
    <div className="App">
      <Header />
      <Main id="main"/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
      <Footer />
    </div>
    )
}

export default Index