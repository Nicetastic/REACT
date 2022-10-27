import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import React, {useState} from "react"
import {useCartContext} from "../../context/CartContext"

const ItemDetail = ({item}) => {
  const [goToCart, setGoToCart] = useState(false)
  const { addItem } = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true)
    addItem(item, quantity)
  }

  return (
    <div className="ItemDetail d-flex align-items-center container-xxl text-light bg-primary bg-gradient">
        <div className="detail">
            <img className="detail__image my-5" src={item.image} alt="" />
            <div className="content my-4 px-4">
                <h1>{item.title}</h1>
                <h4>${item.price}</h4>
                <p>{item.desc}</p>
                {goToCart ?
                  <div className="d-flex align-items-center"> 
                    <Link to="/"><button className="btn btn-light"><h5>Seguir comprando</h5></button></Link>
                    <Link to="/cart"><button className="btn btn-light"><h5>Ir al carro</h5></button></Link>
                  </div>
                    : (<ItemCount initial={0} stock={item.stock} onAdd={onAdd} />)
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail