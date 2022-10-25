import React from 'react'
import Carrito from "../../assets/img/carro-de-la-carretilla.png"
import { useCartContext } from '../../context/CartContext'
import "./CartWidget.css";  

const CartWidget = () => {
  const {totalProducts} = useCartContext()


  return (
    <button className='btn btn-info position-relative'>
      <img src={Carrito} alt="Carrito" />
      <span className="position-absolute top-1 start-35 translate-middle badge rounded-pill bg-primary btn">{totalProducts() || ""}</span>
    </button>
  )
}

export default CartWidget                           