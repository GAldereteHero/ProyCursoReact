import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { CartItem } from "../../CartItem/CartItem";


export const CartContainer = () => {
  const { cart, deleteProduct, clearCart } = useContext(CartContext);

  return (
    <>
      <p>Carrito de compras</p>
      <div>
        {cart.map((producto,index) => {
              return <CartItem key={index} Item={producto} deleteProduct={deleteProduct}/>;
                             
      })}
      <div className="container-button-add">
            <button className='button is-warning is-light' onClick={() => clearCart()} >Borrar Carrito</button>
      </div>
      </div>
    </>
  );
};
