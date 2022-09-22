import React from "react";
import "./style.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ product }) => {
  const loadImage = require.context("../../assets/img");
  console.log(product.product);

  return (
    <div>
      <div className="container-detail glass-effect border">
        <div>
          <img className="img-detail" src={loadImage(`./${product.image}`)} alt="" />
        </div>
        <div className="container-data">
          <div>
            <p className="title-detail">
              {product.product} ${product.price}
            </p>
            <p className="subTitle-detail">{product.description}</p>
          </div>
          <div>
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
    </div>
  );
};
