import React, {useEffect, useState} from 'react'
import "./ItemListContainer.css"
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Loading from "../Loading/Loading"
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore"

const ItemListContainer = () => {
  const [item,setItem] = useState ([])
  const {id} = useParams ()
  const [loading,setLoading] = useState (true)

  useEffect(() => {
    const db = getFirestore()
    const response = collection(db, "items")
    if (id) {
        const queryFilter = query(
          response,
          where("category","==", id))
        getDocs(queryFilter).then((res) =>
          setItem(res.docs.map((product) => ({ id: product.id, ...product.data() }))))}
    else {
      getDocs(response).then((res) =>
        setItem(res.docs.map((product) => ({ id: product.id, ...product.data() }))))}
      setLoading(false)
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