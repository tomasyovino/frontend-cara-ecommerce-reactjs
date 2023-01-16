import React from 'react'

const ContactDetails = () => {
  return (
    <section id="contact-details" className="contact-details section-p1">
        <div className="details">
            <span>CONTÁCTANOS</span>
            <h2>Visita una de nuestras agencias o contáctanos hoy mismo</h2>
            <h3>Sede Central</h3>
            <div>
                <li>
                    <i className="fa fa-map-o" aria-hidden="true"></i>
                    <p>S6 General Paz, Glasgow G1 1UL - Buenos Aires</p>
                </li>
                <li>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <p>contacto@ejemplo.com</p>
                </li>
                <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>+12 3456789101</p>
                </li>
                <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <p>10:00 - 18:00, Lun - Sab</p>
                </li>
            </div>
        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.064054033765!2d-58.48495404957663!3d-34.62782156618417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc994e1ad733b%3A0xc547518c9b089649!2sOxford%20College!5e0!3m2!1ses-419!2sar!4v1661368711895!5m2!1ses-419!2sar" title='hola' width="600" height="450" style={{width: "600px", height: "450px", border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default ContactDetails