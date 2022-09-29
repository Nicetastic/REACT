import React, {useEffect, useState} from 'react'
import "./ItemListContainer.css"
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
// import Productos from '../Productos'
import Loading from "../Loading/Loading"
import {getFirestore, collection, getDocs } from "firebase/firestore"


const ItemListContainer = ({texto}) => {
  const [item,setItem] = useState ([])
  const {id} = useParams ()
  const [loading,setLoading] = useState (true)

  useEffect(() => {
    // const getItem = new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(Productos)
    //     setLoading (false)
    //   }, 2000)
    // })

    // if (id) {
    //   getItem.then(res => setItem(res.filter(producto => producto.category === id)))
    // } else {
    //   getItem.then(res => setItem(res))
    // }
    const db = getFirestore()
    const response = collection(db, "items")
    getDocs(response).then((res) => setItem(res.docs.map((product) => ({ id: product.id, ...product.item() }))))
      console.log(item.exists())
      console.log(response.item())
  }, [id])

  return (
    <div className='container-xxl p-2 bg-primary'>
      <div className='row'>
        {loading ? <Loading /> : <ItemList item={item}/>}
      </div>
    </div>
  )
}

export default ItemListContainer