import React from "react"
import {useCartContext} from "../../context/CartContext"
import {Link}  from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import "./Cart.css"

const Cart = () => {
  const {cart, totalPrice, clearCart} = useCartContext()

  if (cart.length === 0) {
    return (
    <div className="container-xxl d-flex flex-column flex- align-items-center wrap py-5 bg-warning bg-gradient">
      <p>El carrito está vacio</p>
      <Link to="/">Agregar productos</Link>
    </div>
  )
}
  return (
    <div className="container-xxl d-flex align-items-stretch py-4 bg-primary bg-gradient">
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <h3>Precio total: ${totalPrice()}</h3>
      <button><Link to="/checkout">Finalizar compra</Link></button> <br />
      <button onClick={() => clearCart()} >Vaciar carro</button>
    </div>
    )
  }

export default Cart