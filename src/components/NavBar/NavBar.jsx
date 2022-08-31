import React from 'react'
import Logo from "../../assets/img/logoazulsys.png"
import CartWidget from "../Cartwidget/Cartwidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='contenedor-menu container-xxl'>
      <img src={Logo} alt="logo" className='logoAzul'/>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href=".">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=".">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=".">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=".">Contacto</a>
        </li>
        <li>
          <a className="carrito" href="."><CartWidget /></a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;