import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/logo.png";

const Header = () => {
  const [ active, setActive ] = useState(false);
  let connected = true;
  console.log(active)
  return (
    <header id="header" className='header'>
       <Link to="/"><img src={Logo} class="logo" alt="logo" /></Link> 
        
       <div>
            <ul id="navbar" className={active ? "navbar active" : "navbar"}>
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
                <li>
                  <NavLink
                    to={ connected ? "/profile" : "/login" }
                    className={({ isActive }) => isActive ? "active" : undefined}
                  >
                    <i class="fa-solid fa-user"></i>
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
                <span id="close" className="close" onClick={() => setActive(false)} ><i class="fa fa-times"></i></span>
            </ul>
       </div>
       <div id="mobile" className='mobile'>
            <NavLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
            <i id="bar" className="fas fa-outdent" onClick={() => setActive(true)}></i>
       </div>
    </header>
  )
}

export default Header