import { React } from "react"
import '../css/NavBar.scss'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'

function NavBar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const scrollTo = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <div className="navContainer">
      <nav>
        <ul>
          <li>
          <Link
              activeClass="active"
              to="landing"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}>
              <h1>LC</h1>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
