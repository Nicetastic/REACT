import React, { useState, useContext } from 'react'
import { useCartContext } from '../../context/CartContext'
import { getFirestore, collection, addDoc, serverTimestamp} from "firebase/firestore"
import Success from '../Success/Success'
import ItemCart from '../ItemCart/ItemCart'

const Checkout = () => {
  const {cart, clearCart, totalProducts, totalPrice} = useCartContext(useContext)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [orderId, setOrderId] = useState("")

  const sendOrder = () => {
    if ((nombre !== "") && (email !== "") && (telefono !== "")) {
      const buyer = {name:nombre, email:email, phone:telefono}
      const items = []
      cart.forEach(item => {
        items.push({id:item.id, title:item.title, price:item.price, quantity:item.quantity})
    });
      const order = {buyer:buyer, items:items, date:serverTimestamp(), total:totalPrice()}
      const db = getFirestore()
      const orderCollection =  collection(db, "orders")
      addDoc(orderCollection, order).then(({id}) => {
              setOrderId(id);
              clearCart();
            });
          }
        }

  return (
    <div className='container-xxl'>
      {totalProducts() > 0 ?
      <div className="row">
        <div className='col-md-5 p-5 bg-primary'>
          <div className='mb-3'>
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" required onInput={(e) => setNombre(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" required onInput={(e) => setEmail(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="telefono" class="form-label">Teléfono</label>
            <input type="text" class="form-control" id="telefono" required onInput={(e) => setTelefono(e.target.value)} />
          </div>
          <button type="button" class="btn btn-light" onClick={() => {sendOrder()}}>Finalizar compra</button>
          <h3>Precio total: ${totalPrice()}</h3>
        </div>
        

        <div className='col-md-7 pt-4 pb-4 bg-primary'>
        {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
        </div>
      </div>
    : orderId !== "" ? <Success id={orderId} /> 
    : <div className="alert alert-primary text-center container-xxl" role="alert">No se encontraron Productos!</div>}
    </div>
  )
}

export default Checkout