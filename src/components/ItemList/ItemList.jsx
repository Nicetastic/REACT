import React from 'react'
import Item from '../Item/Item'

const ItemList = ({item=[]}) => {
  return (
      item.map(producto => <Item key={producto.id} info={producto} />)
  )
}

export default ItemList