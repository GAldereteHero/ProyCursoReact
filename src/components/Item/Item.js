import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({product}) => {
  
  const loadImage = require.context('../../assets/img')
  
  return (
    <>
      <div class="container ">
        <div class="notification glass-effect">
          <p>{product.product}</p>
          <img src={loadImage(`./${product.image}`)} alt="" />
          <p>{product.price}</p>
          <ItemCount initial={1} stock={10} onAdd={(count) => {console.log(`Se agregaron ${count} item/s al carrito`)}}/>
        </div>
      </div>
    </>
  );
};
