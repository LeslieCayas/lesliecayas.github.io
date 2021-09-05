import {React} from "react"
import './NavBar.scss'
function NavBar() {
  return (
    <div className="navContainer">
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
