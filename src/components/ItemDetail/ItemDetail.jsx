// import React, {useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
// import { Link } from 'react-router-dom'
import React from 'react'

const ItemDetail = ({item}) => {
  
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades`)
  }

  // const [carrito, setCarrito] = (false)
  
  return (
    <div className='ContainerItemDetail d-flex justify-content-center container-xxl text-light bg-primary bg-gradient'>
        <div className='detail'>
            <img className='detail__image my-5' src={item.image} alt="" />
            <div className='content my-4 px-4'>
                <h1>{item.title}</h1>
                <h4>{item.price}</h4>
                <p>{item.desc}</p>
                {/* {
                  carrito 
                  ? Link
                } */}
                <ItemCount initial={1} stock={7} onAdd={onAdd} />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail