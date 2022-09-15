import React from 'react'
import Logo from "../../assets/img/logoazulsys.png"
import CartWidget from "../Cartwidget/Cartwidget"
import "./NavBar.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='contenedor-menu container-xxl'>
      <img src={Logo} alt="logo" className='logoAzul'/>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/:id">Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/:id">Nosotros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/item/:id">Contacto</NavLink>
        </li>
        <li>
          <NavLink className="carrito" to="/"><CartWidget /></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;