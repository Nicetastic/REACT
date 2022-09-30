import React from 'react'
import {useCartContext} from "../../context/CartContext"
import {Link}  from "react-router-dom"
import ItemCart from '../ItemCart/ItemCart'

function Cart() {
  const {cart, totalPrice} = useCartContext()

  if (cart.length === 0) {
    return (
    <div className="container-xxl d-flex flex-column flex- align-items-center wrap py-5 bg-warning bg-gradient">
      <p>El carrito está vacio</p>
      <Link to="/">Agregar productos</Link>
    </div>
  )
}

  return (
    <div className='container-xxl pt-3 bg-primary bg-gradient'>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Precio total: {totalPrice()}</p>
    </div>
    )
  }

export default Cart