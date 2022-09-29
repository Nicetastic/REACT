import React from 'react'
import Carrito from "../../assets/img/carro-de-la-carretilla.png"
import { useCartContext } from '../../context/CartContext'

const Carwidget = () => {
  const {totalProducts} = useCartContext()


  return (
    <div>
      <img src={Carrito} alt="Carro de Compras"/>
      <span>{totalProducts() || ""}</span>
    </div>
  )
}

export default Carwidget