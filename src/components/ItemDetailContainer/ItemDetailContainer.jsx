import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const productos = {
  id: 1,
  image: "../assets/img/cortadora.png",
  title: "Cortadora de fiambre",
  price: "$70000",
  desc: "Construcción en aluminio anodizado Afilador incorporado con protector Cuchilla de acero inoxidable Funcionamiento por gravedad con plano a 45 Patas de goma anti deslizantes",
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState ({}) 

  useEffect (() => { 
    const getItem = new Promise (resolve => {
      setTimeout (() => {
        resolve(productos);
      }, 2000)
    })

    getItem.then(res => setItem(res))
  },[])
  
  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer