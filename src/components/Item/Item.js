import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({product}) => {
  
  const loadImage = require.context('../../assets/img')
  
  return (
    <>
      <div class="container ">
        <div class="notification glass-effect my-2">
          <p className="is-size-3" >{product.product} ${product.price}</p>
          <img src={loadImage(`./${product.image}`)} alt="" />
          <ItemCount initial={1} stock={10} onAdd={(count) => {console.log(`Se agregaron ${count} item/s ${product.product} al carrito`)}}/>
        </div>
      </div>
    </>
  );
};
