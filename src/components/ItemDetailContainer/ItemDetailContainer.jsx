import React, {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"
import {getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({}) 
    const {id} = useParams()
    const [loading,setLoading] = useState (true)

    useEffect(() => {
      const db = getFirestore()
      const response = doc(db, "items", id)
      getDoc(response).then((res) => setItem({id: res.id, ...res.data()}))
      setLoading(false)
    }, [id])

  return (
    <div className="containerDetail">
      {loading ? <Loading /> : <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer