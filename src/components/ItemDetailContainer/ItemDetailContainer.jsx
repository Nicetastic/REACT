import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getItemById } from '../customFetch'

const ItemDetailContainer = () => {
  const [item, setItem] = useState ({}) 

  const {id} = useParams()

  useEffect(()=> {
    getItemById(id).then(response => {
        setItem(response)
    })
}, [id])

return (
<div className='containerDetail'>
    <ItemDetail {...item}/>

</div>
)

  // useEffect (() => { 
  //   const getItem = new Promise (resolve => {
  //     setTimeout (() => {
  //       resolve(productos);
  //     }, 2000)
  //   })

  //   getItem.then(res => setItem(res))
  // },[])
  
  // return (
  //   <ItemDetail item={item} />
  // )
}

export default ItemDetailContainer