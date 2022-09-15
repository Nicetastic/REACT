import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getItemById } from '../customFetch'
// import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({}) 

    const {id} = useParams()

    useEffect(()=> {
      getItemById(id).then(response => {
          setItem(response)
      })
  }, [id])

  // const onAdd = (cantidad) => {
  //   console.log(`Agregaste ${cantidad} unidades`)
  // }

  return (
  <div className='containerDetail'>
      <ItemDetail item={item}/>
      {/* <ItemCount initial={1} stock={7} onAdd={onAdd} /> */}
  </div>
  )
}

  // useEffect (() => { 
  //   const getItem = new Promise (resolve => {
  //     setTimeout (() => {
  //       resolve(productos);
  //     }, 2000)
  //   })

  //   getItem.then(res => setItem(res))
  // },[])
  
  // return (
  //   <div className='containerDetail'>
  //       <ItemDetail item={item}/>
  //       {/* <ItemCount initial={1} stock={7} onAdd={onAdd} /> */}
  //   </div>
  //   )}
    
  

export default ItemDetailContainer