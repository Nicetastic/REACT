import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Productos from './ProductosDetallado'

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({}) 
    const {id} = useParams()

    useEffect(()=> {
    const getItem = new Promise(resolve => {
      setTimeout(() => {
        resolve(Productos)
      }, 2000)
    })

    getItem.then(res => setItem(res.find(Producto => Producto.id === parseInt(id))))
  }, [id])

  return (
  <div className='containerDetail'>
      <ItemDetail item={item}/>
  </div>
  )
}

export default ItemDetailContainer