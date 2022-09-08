import React, {useEffect, useState} from 'react'
import "./ItemListContainer.css"
// import Titulo from '../Titulo/Titulo'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const productos = [
  {id: 1, image: "../assets/img/cortadora.png", title: "Cortadora de fiambre", precio: "$70000"},
  {id: 2, image: "../assets/img/escala.png", title: "Balanza de precisión", precio: "$30000"},
  {id: 3, image: "../assets/img/aacc.png", title: "Aire Acondicionado", precio: "$50000"},
]

const ItemListContainer = ({texto}) => {
  const [data, setData] = useState ([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    getData.then(res => setData(res));
  }, [])

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades`)
  }

  return (
    <div>
      {/* <Titulo greeting={texto} /> */}
      <ItemCount initial={1} stock={7} onAdd={onAdd} />
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer
