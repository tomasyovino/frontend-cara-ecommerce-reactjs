import { Link } from "react-router-dom";
import appVideo from "../../assets/img/about/1.mp4";

const AboutApp = () => {
  return (
    <section id="about-app" class="about-app section-p1">
        <h1>Descarga Nuestra <Link to="/">Aplicación</Link></h1>
        <div class="video">
            <video src={appVideo} autoplay muted loop></video>
        </div>
    </section>
  )
}

export default AboutApp