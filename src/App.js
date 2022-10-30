import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from "./components/Contact";
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <Main />
      <Skills />
      <Projects />
      <About />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
