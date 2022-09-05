import React from 'react'
import "./ItemListContainer.css"
import Titulo from '../Titulo/Titulo'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({texto}) => {
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades`)
  }

  return (
    <div>
      <Titulo greeting={texto} />
      <ItemCount initial={1} stock={7} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer
