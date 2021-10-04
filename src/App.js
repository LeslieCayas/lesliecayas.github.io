import './App.css';
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Skills from './components/Skills'
import LandingPage from './components/LandingPage'
import './css/Elements.scss'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="landingPage">
        <Element name="landing">
          <LandingPage />
        </Element>
      </div>

      <div id="about">
        <Element name="about">
          <AboutMe />
        </Element>
      </div>


      <Element name="projects">
        <Projects />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
