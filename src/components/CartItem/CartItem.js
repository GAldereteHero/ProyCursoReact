import React from 'react'
import "./style.css";

export const CartItem = ({Item, deleteProduct}) => {
  return (
    <div>
      <div className='container-item'>
        <p className="title">
          {Item.item.product} Cantidad: {Item.count}
        </p>
        <div className="container-button-add">
          <button
            className="button is-warning is-light"
            onClick={() => deleteProduct(Item)}
          >
            Eliminar Item
          </button>
        </div>
      </div>
    </div>
  );
}
