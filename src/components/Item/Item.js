import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  const loadImage = require.context("../../assets/img");

  return (
    <>
      <div className="container ">
        <div className="card glass-effect border">
          <Link to={`/product/${product.id}`}>
            <img className="img" src={loadImage(`./${product.image}`)} alt="" />
          </Link>
          <p className="is-size-3">{product.title}</p>
        </div>
      </div>
    </>
  );
};
