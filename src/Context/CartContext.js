import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    let qty = 0;
    let fullPrice = 0;
    cart.map((producto) => { 
      qty = qty + producto.count;
      fullPrice = fullPrice + producto.count * producto.item.price;
    })
    setQty(qty);
    setFullPrice(fullPrice);
  }, [cart]);

  const isInCart = (id) => {
    return cart.some((product) => product.item.id === id);
  };

  const addToCart = (item, count) => {
    if (isInCart(item.id)) {
      const addedItem = cart.filter((producto) => {
        return producto.item.id === item.id;
      });
      addedItem.forEach(
        (producto) => (producto.count = producto.count + count)
      );
      const newCart = cart.filter((producto) => {
        return producto.item.id !== item.id;
      });
      setCart([...addedItem,...newCart]);
    } else {
      setCart([...cart, { item, count }]);
    }
  };

  const deleteProduct = (item) => {
    const newCart = cart.filter((producto) => {
      return producto.item.id !== item.item.id;
    });
    setCart([...newCart])
  };
  
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, qty, fullPrice, addToCart, deleteProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider