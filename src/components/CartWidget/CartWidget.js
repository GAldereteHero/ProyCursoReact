import React from "react";
import iconCart from "./shopping-cart.png";

export const CartWidget = () => {
  return (
    <div class="navbar-item">
      <div class="buttons">
        <a class="button is-warning is-rounded ">
          <img src={iconCart} alt="Icono de carrito" />
        </a>
      </div>
    </div>
  );
};
