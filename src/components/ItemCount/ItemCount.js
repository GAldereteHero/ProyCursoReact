import React, {useState } from 'react'
import "./style.css";

export const ItemCount = ({initial, stock, onAdd}) => {

  const [count, setCount] = useState(initial)

  const decrease = () => count > initial && (setCount(count - 1))
  const increase = () => count < stock && (setCount(count + 1))
  
  return (
    <>

    <div className="container-count">
        <div className="container-item-buttons">
              <button className='button  is-success is-light' disabled={count === initial} onClick={decrease} >-</button>
              <p className='is-size-2'>{`${count}`}</p>
              <button className='button  is-success is-light' disabled={count === stock} onClick={increase}>+</button>
        </div>
        <div className="container-button-add">
            <button className='button is-warning is-light' onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    </div>
    
    </>
  )
}