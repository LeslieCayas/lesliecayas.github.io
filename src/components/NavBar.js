import { React } from "react"
import '../css/NavBar.scss'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


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
        {/* <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul> */}
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>

      </nav>
    </div>
  )
}

export default NavBar
