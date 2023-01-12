import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

const Header = () => {
  const [ active, setActive ] = useState(false);
  const cartProductQuantity = useSelector((state) => state.cart.quantity);

  let connected = true;

  return (
    <header id="header" className='header'>
       <Link to="/"><img src={Logo} className="logo" alt="logo" /></Link> 
        
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
                    <i className="fa-solid fa-user"></i>
                  </NavLink>
                </li>
                <li id="lg-bag">
                  <NavLink 
                    to="/cart"
                    className={({ isActive }) => isActive ? "active" : undefined}
                  >
                    <Badge badgeContent={cartProductQuantity} color= "primary">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Badge>
                  </NavLink>
                </li>
                <span id="close" className="close" onClick={() => setActive(false)} ><i className="fa fa-times"></i></span>
            </ul>
       </div>
       <div id="mobile" className='mobile'>
            <NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink>
            <i id="bar" className="fas fa-outdent" onClick={() => setActive(true)}></i>
       </div>
    </header>
  )
}

export default Header