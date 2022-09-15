import React from 'react'
import "./Item.css"
import ItemCount from '../ItemCount/ItemCount'

const Item = ({info}) => {

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades`)
  }

  return (
    <div className= "card Producto">
      <img src= {info.image} alt=""/>
      <div className="card-body">
        <h4 className="card-title">{info.title}</h4>
        <h6>Precio: {info.precio}</h6>
        <a href="#" className="btn btn-primary">Más detalles</a>
        <ItemCount initial={1} stock={7} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default Item