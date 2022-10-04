import { logDOM } from "@testing-library/react";
import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  const isInCart = (id) => {
    return cart.some((product) => product.item.id === id);
  };

  const addToCart = (item, count) => {

    if (isInCart(item.id)) {
      setCart([...cart, { item, count }]);
    } else {
      setCart([...cart, { item, count }]);
    }
  };

  const deleteProduct = (id) => {
    console.log('Eliminamos el producto');
    const updateCart = cart.filter((producto) => {
      return producto.id !== id;
    });
    setCart(updateCart);
  };
  
  const clearCart = () => {
    console.log('Eliminamos el carrito');
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider