import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
  return (
    <div className='ContainerItemDetail'>
        <div className='detail'>
            <img className='detail__image' src={item.image} alt="" />
            <div className='content'>
                <h1>{item.title}</h1>
                <h4>{item.price}</h4>
                <p>{item.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail