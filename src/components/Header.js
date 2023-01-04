import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Header = () => {
  
  return (
    <header id="header" className='header'>
       <Link to="/"><img src={Logo} class="logo" alt="logo" /></Link> 

       <div>
            <ul id="navbar" className='navbar'>
                <li>
                  <NavLink
                    to="/" 
                    className={({ isActive }) => isActive ? "active" : undefined}
                  >
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/shop"
                    className={({ isActive }) => isActive ? "active" : undefined}
                  >
                    Tienda
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/blog"
                    className={({ isActive }) => isActive ? "active" : undefined}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about"
                    className={({ isActive }) => isActive ? "active" : undefined}
                  >
                    Sobre Nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact"
                    className={({ isActive }) => isActive ? "active" : undefined}
                  >
                    Contáctanos
                  </NavLink>
                </li>
                <li id="lg-bag">
                  <NavLink 
                    to="/cart"
                    className={({ isActive }) => isActive ? "active" : undefined}
                  >
                    <i class="fa-solid fa-cart-shopping"></i>
                  </NavLink>
                </li>
                <span id="close"><i class="fa fa-times"></i></span>
            </ul>
       </div>
       <div id="mobile" className='mobile'>
            <NavLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
            <i id="bar" class="fas fa-outdent"></i>
       </div>
    </header>
  )
}

export default Header