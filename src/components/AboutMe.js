import { React } from "react"
import dp from '../img/LeslieCayas_img.png'
import '../css/AboutMe.scss'

function AboutMe() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <div className="about-card">
        <div className="about-img">
          <img src={dp} alt="" />
        </div>
        <div className="about-info">
          <h1>Leslie Cayas: Software Engineer</h1>
          <p>I am a Software Engineer based in Sydney, Australia! With a background in Life Sciences, I have dedicated my time to learning how different infections are detected in the human body and how this information impacts patient care.
          <br />
          Turning into a new chapter of my career, I have committed myself to learning Full-Stack Software Engineering with General Assembly, where I have developed several projects of interest. Coming into the Software Engineering environment, I hope to bring my can-do attitude, my understanding of patient-care and my desire to continuously improve.
          <br />
          With the skills that I have and my solid foundation in current tools and tech, I aim to pursue my goal of being the one of the most impactful members of any team I find myself in! I hope that as I build upon my current skillset as a Software Engineer, that I can find opportunities to lead various projects for my team.</p>
        </div>

      </div>
    </div>
  )
}

export default AboutMe