import { React } from "react"
import { DiGithubBadge } from "react-icons/di"
import { MdEmail, MdAssignment } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

function Contact() {

  return (
    <div id="contact">
      <div className="contactCards">
        <div className="linkedin">
          <SiLinkedin size={50} />
          <h1>LinkedIn</h1>
          <a href="https://www.linkedin.com/in/leslie-cayas/">Let's Connect!</a>
        </div>

        <div className="github">
          <DiGithubBadge size={50} />
          <h1>GitHub</h1>
          <a href="https://github.com/LeslieCayas">@LeslieCayas</a>
        </div>

        <div className="email">
          <MdEmail size={50} />
          <h1>Email</h1>
          <a href="mailto:leslie.cayas@gmail.com">Leslie.Cayas@gmail.com</a>
        </div>

        <div className="resume">
          <MdAssignment size={50} />
          <h1>Resume</h1>
          <a href="https://www.canva.com/design/DAEmOup5ZN0/ycByq67sZLFbBs-QzFl0Fw/view?utm_content=DAEmOup5ZN0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">Click to View Resume</a>
        </div>

      </div>
    </div>
  )
}

export default Contact