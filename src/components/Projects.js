import { React } from "react"
import { projectData } from '../projectData'
import { SiGithub } from "react-icons/si";
import { GrPersonalComputer } from "react-icons/gr";

import '../css/Projects.scss'

function Projects(props) {
  return (
    <div id="projects">
      <div id="projectTitle"><h1>Projects</h1></div>
      {projectData.map(project => {
        return (
          <div className="project-card">
            <div className="projectInfo" id={project.projectNumber}>
              <h1>{project.title}</h1>
              <h2>{project.tools}</h2>
              <p>{project.description}</p>
              <span>
                <a href={project.repo}><SiGithub/></a>
                <a href={project.site}><GrPersonalComputer /></a>
              </span>
            </div>

            <div className="projectImage">
              <img src={project.image} alt="" />
            </div>
          </div>
        )
      }).reverse()}
    </div>
  )
}

export default Projects