import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { CartItem } from "../../CartItem/CartItem";
import "./style.css";

export const CartContainer = () => {
  const { cart, fullPrice, deleteProduct, clearCart } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <div className="container-cart glass-effect-cart border">
          <div>
            <p className='title'>Carrito</p>
          </div>
          <div>
            {cart.length === 0 ? (
              <div className="container-emptyCart">
                <p>Ups! Su carrito está vacío. Agregue algunos productos</p>
                <div className="buttons m-3">
                  <Link className="button is-warning is-rounded" to={"/"}>
                    Buscar productos
                  </Link>
                </div>
              </div>
            ) :
              (
                <>
                  {cart.map((producto, index) => {
                    return (<CartItem key={index} Item={producto} deleteProduct={deleteProduct} />);
                  })}
                  <div className="container border-footer">
                    <div className="container-button-add">
                      <button className="button is-danger is-light" onClick={() => clearCart()}>
                        Borrar Carrito
                      </button>
                    </div>
                    <p>Precio total ${fullPrice}</p>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};




