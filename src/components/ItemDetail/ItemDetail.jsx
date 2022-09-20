// import React, {useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import React, {useState} from 'react'

const ItemDetail = ({item}) => {
  const [carrito, setCarrito] = useState(false)

  const onAdd = (cantidad) => {
    setCarrito(true)
  }

  return (
    <div className='ItemDetail d-flex justify-content-center container-xxl text-light bg-primary bg-gradient'>
        <div className='detail'>
            <img className='detail__image my-5' src={item.image} alt="" />
            <div className='content my-4 px-4'>
                <h1>{item.title}</h1>
                <h4>{item.price}</h4>
                <p>{item.desc}</p>
                {
                  carrito 
                    ? <Link to="/"><h5>Terminar compra</h5></Link>
                    :<ItemCount initial={1} stock={7} onAdd={onAdd} />
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail