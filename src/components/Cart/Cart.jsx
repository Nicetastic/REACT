import React from "react"
import {useCartContext} from "../../context/CartContext"
import {Link}  from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import { getFirestore, addDoc, collection } from "firebase/firestore"

const Cart = () => {
  const {cart, totalPrice} = useCartContext()

  const order = {
    buyer: {
      name: "pablo",
      email: "pablasddaads",
      phone: "123123",
      address: "aadsddas"
    },
    items: cart.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity
    })),
    total: totalPrice()
  }

const handleClick = () => {
  const db = getFirestore()
  const response = collection(db,"orders")
  addDoc(response, order).then(({ id }) => (id));
}

  if (cart.length === 0) {
    return (
    <div className="container-xxl d-flex flex-column flex- align-items-center wrap py-5 bg-warning bg-gradient">
      <p>El carrito está vacio</p>
      <Link to="/">Agregar productos</Link>
    </div>
  )
}

  return (
    <div className="container-xxl pt-3 bg-primary bg-gradient">
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Precio total: ${totalPrice()}</p>
      <button onClick={handleClick}>Finalizar compra</button>
    </div>
    )
  }

export default Cart