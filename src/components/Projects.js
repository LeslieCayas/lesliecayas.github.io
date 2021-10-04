import { React } from "react"
import { projectData } from '../projectData'
import { SiGithub } from "react-icons/si";
import { MdComputer } from "react-icons/md";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import '../css/Projects.scss'

function Projects(props) {
  return (
    <div className="projects">
      <div id="projectTitle"><h1>Projects</h1></div>
      <div id="projectsList">
        {projectData.map(project => {
          return (
            <div className="project-card">
              <div className="projectInfo" id={project.projectNumber}>
                <h1>{project.title}</h1>
                <h2>{project.tools}</h2>
                <p>{project.description}</p>
                <span>
                  <a href={project.repo}><SiGithub /></a>
                  <a href={project.site}><MdComputer /></a>
                </span>
              </div>

              <div className="projectImage">
                <img src={project.image} alt="" />
              </div>
            </div>
          )
        }).reverse()}
      </div>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
          <button>Next</button>
      </Link>
    </div>
  )
}

export default Projects