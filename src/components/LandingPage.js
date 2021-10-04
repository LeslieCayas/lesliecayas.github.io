import dp from '../img/LeslieCayas_img.png'
import '../css/LandingPage.scss'
import background from '../img/landing_background.jpg'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function LandingPage() {

  return (
    <div className="landingPageContent">
      <div className="title">
        <h1>
          Leslie
            <br />
          Cayas:
          </h1>
        <h2>
        Scientist &
          <br />
        Software Engineer
        </h2>
        <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}>
          <button>Get To Know Me</button>
        </Link>
      </div>

      <img src={dp} alt="" />

    </div>
  )
}
export default LandingPage