import React from 'react'
import Logo from "../../assets/img/logoazulsys.png"
import Carrito from "../../assets/img/carro-de-la-carretilla.png"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='contenedor-menu'>
      <img src={Logo} alt="logo" className='logoAzul'/>
      <ul className="nav nav-pills">
        <li className="nav-item ">
          <a className="nav-link" href="">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="carrito" href=""><img src={Carrito} alt="Carrito"/></a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;