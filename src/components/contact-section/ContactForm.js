import people1 from "../../assets/img/people/1.png";
import people2 from "../../assets/img/people/2.png";
import people3 from "../../assets/img/people/3.png";

const ContactForm = () => {
  return (
    <section id="form-details" className='form-details'>
        <form action="">
            <span>DÉJANOS UN MENSAJE</span>
            <h2>Nos encanta saber de ti</h2>
            <input type="text" placeholder="Tu nombre" />
            <input type="email" placeholder="Tu E-mail" />
            <input type="text" placeholder="Asunto" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Escribe tu mensaje"></textarea>
            <button class="normal">Enviar</button>
        </form>
        <div class="people">
            <div>
                <img src={people1} alt="people" />
                <p><span>John Doe</span> Director de Publicidad <br /> Tel: +12 3456789101 <br /> E-mail: contacto@ejemplo.com</p>
            </div>
            <div>
                <img src={people2} alt="people" />
                <p><span>William Smith</span> Director de Publicidad <br /> Tel: +12 3456789101 <br /> E-mail: contacto@ejemplo.com</p>
            </div>
            <div>
                <img src={people3} alt="people" />
                <p><span>Emma Stone</span> Director de Publicidad <br /> Tel: +12 3456789101 <br /> E-mail: contacto@ejemplo.com</p>
            </div>
        </div>
    </section>
  )
}

export default ContactForm