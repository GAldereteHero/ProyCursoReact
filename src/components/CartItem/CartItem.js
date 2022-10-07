import React from 'react'
import "./style.css";
import { Link } from "react-router-dom";


export const CartItem = ({ Item, deleteProduct }) => {
  const loadImage = require.context("../../assets/img");

  return (
    <div>

      <div className='container-item'>
          <Link to={`/product/${Item.item.id}`}>
            <img className="img-cart" src={loadImage(`./${Item.item.image}`)} alt="" />
          </Link>
        <div>
          <p className="sub-title">
            {Item.item.product}
          </p>
          <p>{Item.item.description} </p>
        </div>
        <div>
          <p>Cantidad: {Item.count}</p>
        </div>
        <button
          className="button is-warning is-light"
          onClick={() => deleteProduct(Item)}
        >
          Eliminar Item
        </button>
        <div>
          <p>${Item.item.price * Item.count}</p>
        </div>
      </div>
    </div>
  );
}
