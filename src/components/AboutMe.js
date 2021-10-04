import { React } from "react"
import '../css/AboutMe.scss'
import aboutImg from '../img/about_image.svg'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function AboutMe() {
  return (
    <div className="aboutCard">
      <h1>About Me</h1>
      <div className="aboutInfo">
      <img src={aboutImg} alt="" />
        <p>
          I am a <a href="https://github.com/LeslieCayas">Software Engineer</a> based in Sydney, Australia! With a background in Life Sciences, I have dedicated my time to learning how different infections are detected in the human body and how this information impacts patient care.
          <br /><br />
          Turning into a new chapter of my career, I have committed myself to learning Full-Stack Software Engineering with General Assembly, where I have developed several projects of interest. Coming into the Software Engineering environment, I hope to bring my can-do attitude, my committment to understanding clients and my desire to continuously improve.
          <br /><br />
          With the skills that I have and my solid foundation in current tools and tech, I aim to pursue my goal of being the one of the most impactful members of any team I find myself in! I hope that as I build upon my current skillset as a Software Engineer, that I can find opportunities to lead various projects for my team.</p>
      </div>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}>
          <button>Next</button>
      </Link>
    </div>
  )
}

export default AboutMe