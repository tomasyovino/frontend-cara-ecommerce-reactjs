import { Link } from "react-router-dom";
import appVideo from "../../assets/img/about/1.mp4";

const AboutApp = () => {
  return (
    <section id="about-app" className="about-app section-p1">
        <h1>Descarga Nuestra <Link to="/">Aplicación</Link></h1>
        <div className="video">
            <video src={appVideo} autoPlay muted loop></video>
        </div>
    </section>
  )
}

export default AboutApp