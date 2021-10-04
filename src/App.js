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
      <div id="components">
        <div id="about">
          <Element name="about">
            <AboutMe />
          </Element>
        </div>

        <div id="projects">
          <Element name="projects">
            <Projects />
          </Element>
        </div>

        <div id="skills">
          <Element name="skills">
            <Skills />
          </Element>
        </div>

        <div id="contact">
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </div>


    </div>
  );
}

export default App;
