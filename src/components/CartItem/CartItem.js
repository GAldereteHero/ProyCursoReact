import React from 'react'

export const CartItem = ({Item, deleteProduct}) => {
  return (
    <div>
        <p>{Item.item.product} Cantidad: {Item.count}</p>
        <div className="container-button-add">
            <button className='button is-warning is-light' onClick={() => deleteProduct(Item)}>Eliminar Item</button>
      </div>
    </div>
  )
}
