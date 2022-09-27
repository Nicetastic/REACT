import React from 'react'
import {useCartContext} from "../../context/CartContext"
import {Link}  from "react-router-dom"
import ItemCart from '../ItemCart/ItemCart'

function Cart() {
  const {cart, totalPrice} = useCartContext()

  if (cart.length === 0) {
    return (
    <div className="container-xxl d-flex flex-column flex- align-items-center wrap py-4 bg-warning">
      <p>El carrito está vacio</p>
      <Link to="/" >Página principal</Link>
    </div>
  )
}

  return (
    <div>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: {totalPrice()}</p>
    </div>
    )
  }

export default Cart