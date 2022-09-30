import "./ItemCount.css"
import React,{useState, useEffect} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(parseInt(initial))

  const decrementar = () => {
    setCount(count-1)
  }

  const aumentar = () => {
    setCount(count+1)
  }

  useEffect(() => {
    setCount(parseInt(initial))
  },[initial])

  return (
    <div className="counter">
      <button className="btn btn-light btn-lg " disabled={count<=0} onClick={decrementar}>-</button>
      <span>{count}</span>
      <button className="btn btn-light btn-lg" disabled={count>=stock} onClick={aumentar}>+</button>
      <div>
        <button className="btn btn-light btn-m" disabled={count<=0} onClick={() => onAdd(count)}>Agregar</button>
      </div>
    </div>
  )
}

export default ItemCount