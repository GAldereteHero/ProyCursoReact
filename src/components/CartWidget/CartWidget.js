import React from "react";
import { Link } from "react-router-dom";
import iconCart from "./shopping-cart.png";

export const CartWidget = () => {
  return (
    <div className="navbar-item">
      <div className="buttons">
        <Link className="button is-warning is-rounded " to={"/cart"}>
          <img src={iconCart} alt="Icono de carrito" />
        </Link>
      </div>
    </div>
  );
};
