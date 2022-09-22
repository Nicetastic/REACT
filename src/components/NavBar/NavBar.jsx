import React from 'react'
import Logo from "../../assets/img/logoazulsys.png"
import Cartwidget from "../Cartwidget/Cartwidget"
import "./NavBar.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='contenedor-menu container-xxl'>
      <NavLink className="carrito" to="/"><img src={Logo} alt="logo" className='logoAzul'/></NavLink>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/Hogar">Hogar</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/Comercio">Comercio</NavLink>
        </li>
        <li>
          <NavLink className="carrito" to="/"><Cartwidget /></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;