import React from "react";
import "./style.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const loadImage = require.context("../../assets/img");

  return (
    <div>
      <div className="container-detail glass-effect border">
        <div>
          <img className="img-detail" src={loadImage(`./${item.image}`)} alt="" />
        </div>
        <div className="container-data">
          <div>
            <p className="title-detail">
              {item.product} ${item.price}
            </p>
            <p className="subTitle-detail">{item.description}</p>
          </div>
          <div>
            <ItemCount
              initial={1}
              stock={item.stock}
              onAdd={(count) => {
                console.log(
                  `Se agregaron ${count} item/s ${item.product} al carrito`
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
