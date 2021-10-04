import dp from '../img/LeslieCayas_img.png'
import '../css/LandingPage.scss'
import background from '../img/landing_background.jpg'

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
        </div>

        <img src={dp} alt="" />

      </div>
  )
}
export default LandingPage