import React from "react"
import "./Item.css"
import { Link } from "react-router-dom"


const Item = ({info}) => {

  return (
    <div className= "card Producto">
      <img src= {info.image} alt=""/>
      <div className="card-body">
        <h4 className="card-title">{info.title}</h4>
        <h6>Precio: ${info.price}</h6>
        <Link to={`/item/${info.id}`} className="btn btn-primary">Detalles</Link>
      </div>
    </div>
  )
}

export default Item