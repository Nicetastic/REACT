import React from 'react'
import "./Item.css"

const Item = ({info}) => {
  return (
    <div className= "card Producto container-xxl col">
      <img src= {info.image} alt=""/>
      <div className="card-body">
        <h2 className="card-title">{info.title}</h2>
        <h4>Precio: {info.precio}</h4>
        <a href="#" className="btn btn-primary">Más detalles</a>
      </div>
    </div>
  )
}

export default Item