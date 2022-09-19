import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Productos from '../Productos'

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({}) 
    const {id} = useParams()

    useEffect(()=> {
    const getItem = new Promise(resolve => {
      setTimeout(() => {
        resolve(Productos)
      }, 1000)
    })

    getItem.then(res => setItem(res.find(Producto => Producto.id === parseInt(id))))
  }, [id])

  return (
  <div className='containerDetail'>
      {item ? <ItemDetail item={item}/> : <h1>Cargando...</h1>}
  </div>
  )
}

export default ItemDetailContainer