import { React } from "react"
import '../css/Skills.scss'
import {
  SiPostgresql, SiReact, SiRuby, SiSass, SiJest, SiPostman, SiGithub, SiKotlin, SiSwift, SiJava, SiTypescript
} from "react-icons/si";
import express from '../img/express.svg'
import nodedotjs from '../img/nodedotjs.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Skills() {
  return (
    <div id="skillsSection">
      <h1>Skills</h1>
      <p>Over the past 6 months at General Assembly, I have learned and practised several languages, tools and frameworks!</p>

      <div className="skillsList">
        <div className="currentTechStack">
          <h2>Front-End</h2>
          <p>
            <SiReact />
            <SiRuby />
            <SiSass />
          </p>

          <h2>Back-End</h2>
          <p>
            <img src={express} alt=""/>
            <img src={nodedotjs} alt=""/>
            <SiRuby />
          </p>

          <h2>Other</h2>
          <p>
            <SiPostgresql />
            <SiJest />
            <SiPostman />
            <SiGithub />
          </p>
        </div>
        <div className="wishList">
          <h1>Wish List</h1>
          <p>As I continue to grow as a Software Engineer, I plan on adding these technologies to my skillset!</p>
          <div id="wishlistTech">
          <SiKotlin />
          <SiSwift />
          <SiJava />
          <SiTypescript />

          </div>
        </div>
      </div>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}>
          <button>Next</button>
      </Link>
    </div>
  )
}

export default Skills