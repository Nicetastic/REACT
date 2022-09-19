import React, {useEffect, useState} from 'react'
import "./ItemListContainer.css"
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Productos from '../Productos'

const ItemListContainer = ({texto}) => {
  const [item,setItem] = useState ([])
  const {id} = useParams ()

  useEffect(() => {
    const getItem = new Promise(resolve => {
      setTimeout(() => {
        resolve(Productos)
      }, 2000)
    })

    if (id) {
      getItem.then(res => setItem(res.filter(producto => producto.category === id)))
    } else {
      getItem.then(res => setItem(res))
    }
  }, [id])

  return (
    <div className='container-xxl mt-4 pl-3'>
      <div className=' row'>
      <ItemList item={item} />
      </div>
    </div>
  )
}

export default ItemListContainer
