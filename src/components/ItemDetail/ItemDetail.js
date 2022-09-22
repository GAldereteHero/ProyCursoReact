import React from "react";

import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ product }) => {

  const loadImage = require.context("../../assets/img");

  console.log(product.product);
  
  return (
    <div>
      <div className="container ">
        <div className="notification glass-effect my-2">
          <p className="">{product.product} ${product.price}</p>
          <img src={loadImage(`./${product.image}`)} alt="" />
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(count) => {
              console.log(
                `Se agregaron ${count} item/s ${product.product} al carrito`
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};
