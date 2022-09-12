import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const productos = {id: 1, image: "../assets/img/cortadora.png", title: "Cortadora de fiambre", precio: "$70000"}

const ItemDetailContainer = () => {
  const [data, setData] = useState ({})

  useEffect (() => { 
    const getData = new Promise (resolve => {
      setTimeout (() => {
        resolve(productos)
      }, 3000)
    })

    getData.then(res => setData(res))
  },[])
  
  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer