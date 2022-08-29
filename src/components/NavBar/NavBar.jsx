import React from 'react'
import logo from "../../assets/img/logoazulsys.png"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='contenedor-menu'>
      <img src={logo} alt="logo" className='logoazul'/>
      <ul className="nav nav-pills justify-content-end">
        <li className="nav-item">
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
      </ul>
    </div>
  )
}

export default NavBar;