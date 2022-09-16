import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades`)
  }
  
  return (
    <div className='ContainerItemDetail'>
        <div className='detail'>
            <img className='detail__image' src={item.image} alt="" />
            <div className='content'>
                <h1>{item.title}</h1>
                <h4>{item.price}</h4>
                <p>{item.desc}</p>
                <ItemCount initial={1} stock={7} onAdd={onAdd} />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail