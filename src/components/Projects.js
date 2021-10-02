import { React } from "react"
import { projectData } from '../projectData'

function Projects(props) {
  return (
    <div id="projects">
      {projectData.map(project => {
        return (
          <div className="project-card">
            <h1>{project.title}</h1>
            <h2>{project.tools}</h2>
            <p>{project.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Projects