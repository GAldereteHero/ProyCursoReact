import React from "react";

export const Item = ({ product }) => {
  const loadImage = require.context("../../assets/img");

  return (
    <>
      <div class="container ">
        <div class="card glass-effect">
          <img className="img" src={loadImage(`./${product.image}`)} alt="" />
          <p className="is-size-3">
            {product.product}
          </p>
        </div>
      </div>
    </>
  );
};
