import logo from "../assets/img/logo.png";
import app from "../assets/img/pay/app.jpg";
import play from "../assets/img/pay/play.jpg";
import pay from "../assets/img/pay/pay.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer section-p1">
        <div className="col">
            <img className="logo" src={logo} alt="logo" />
            <h4>Contacto</h4>
            <p><strong>Dirección:</strong> Avénida siempre viva 742</p>
            <p><strong>Teléfono:</strong> +12 3456789101</p>
            <p><strong>Horarios:</strong> 10:00 - 18:00, Lun - Sab</p>
            <div className="follow">
                <h4>Síguenos</h4>
                <div>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className="col">
            <h4>Sobre Nosotros</h4>
            <Link to="/">Sobre Nosotros</Link>
            <Link to="/">Información de envíos</Link>
            <Link to="/">Privacidad y Políticas</Link>
            <Link to="/">Términos y Condiciones</Link>
            <Link to="/">Contáctanos</Link>
        </div>
        <div className="col">
            <h4>Mi cuenta</h4>
            <Link to="/">Iniciar Sesión</Link>
            <Link to="/">Ver carrito</Link>
            <Link to="/">Lista de deseos</Link>
            <Link to="/">Seguir mi pedido</Link>
            <Link to="/">Ayuda</Link>
        </div>
        <div className="col install">
            <h4>Instalar Aplicación</h4>
            <p>Desde la App Store o Google Play</p>
            <div className="row">
                <img src={app} alt="App Store" />
                <img src={play} alt="Google Play" />
            </div>
            <p>Puertos de Pago Seguros</p>
            <img src={pay} alt="Tarjetas disponibles" />
        </div>
        <div className="copyright">
            <p>© 2022, Cara etc - HTML CSS Ecommerce Template</p>
        </div>
    </footer>
  )
}

export default Footer