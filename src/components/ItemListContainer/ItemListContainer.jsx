import React, {useEffect, useState} from 'react'
import "./ItemListContainer.css"
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
// import Titulo from '../Titulo/Titulo'

const productos = [
  {id: 1, image: "../assets/img/cortadora.png", title: "Cortadora de fiambre", category: "Comercio", precio: "$70000"},
  {id: 2, image: "../assets/img/escala.png", title: "Balanza de precisión", category: "Comercio", precio: "$30000"},
  {id: 3, image: "../assets/img/aacc.png", title: "Aire Acondicionado", category: "Hogar", precio: "$50000"},
  {id: 4, image: "../assets/img/tvled.png", title: "Televisión LED", category: "Hogar", precio: "$55000"},
]

const ItemListContainer = ({texto}) => {
  const [item,setItem] = useState ([])
  const {id} = useParams ()

  useEffect(() => {
    const getItem = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })

    if (id) {
      getItem.then(res => setItem(res.filter(productos => productos.category === id)))
    } else {
      getItem.then(res => setItem(res))
    }
  }, [id])

  return (
    <div className='container-xxl'>
      <div className=' row'>
      {/* <Titulo greeting={texto} /> */}
      <ItemList item={item} />
      </div>
    </div>
  )
}

export default ItemListContainer
