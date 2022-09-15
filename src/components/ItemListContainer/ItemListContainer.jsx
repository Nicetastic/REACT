import React, {useEffect, useState} from 'react'
import "./ItemListContainer.css"
// import Titulo from '../Titulo/Titulo'
import ItemList from '../ItemList/ItemList'

const productos = [
  {id: 1, image: "../assets/img/cortadora.png", title: "Cortadora de fiambre", precio: "$70000"},
  {id: 2, image: "../assets/img/escala.png", title: "Balanza de precisión", precio: "$30000"},
  {id: 3, image: "../assets/img/aacc.png", title: "Aire Acondicionado", precio: "$50000"},
  {id: 4, image: "../assets/img/tvled.png", title: "Televisión LED", precio: "$55000"},
]

const ItemListContainer = ({texto}) => {
  const [data, setData] = useState ([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
    getData.then(res => setData(res))
  }, [])

  return (
    <div className='container-xxl'>
      <div className=' row'>
      {/* <Titulo greeting={texto} /> */}
      <ItemList data={data} />
      </div>
    </div>
  )
}

export default ItemListContainer
