import React from "react";
import { Link } from "react-router-dom";
import iconCart from "./shopping-cart.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const CartWidget = () => {

  const { qty } = useContext(CartContext);

  return (
    <div className="navbar-item mx-2">
      <div className="buttons">
        <Link className="button is-warning is-rounded " to={"/cart"}>
          <img className="mr-2" src={iconCart} alt="Icono de carrito" />
          { qty !== 0 && <>{qty}</>}
        </Link>
      </div>
    </div>
  );
};
