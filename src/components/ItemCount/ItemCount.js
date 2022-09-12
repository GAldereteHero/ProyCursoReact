import React, {useState } from 'react'

export const ItemCount = ({initial, stock, onAdd}) => {

  const [count, setCount] = useState(initial)

  const decrease = () => count > initial && (setCount(count - 1))
  const increase = () => count < stock && (setCount(count + 1))
  const reset = () => {
    setCount(initial);
    onAdd(count);
  }
  
  return (
    <>

    <div className="columns is-vcentered is-centered">
        <div className="column ">
              <button className='button  is-success is-light' disabled={count === initial} onClick={decrease} >-</button>
        </div>
        <div className="column">
              <p className='is-size-2'>{`${count}`}</p>
        </div>
        <div className="column ">
              <button className='button  is-success is-light' disabled={count === stock} onClick={increase}>+</button>
        </div>
      <div className="column">
            <button className='button  is-warning is-light' onClick={reset} >Agregar al carrito</button>
      </div>
    </div>
    
    </>
  )
}
