import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { CartItem } from "../../CartItem/CartItem";
import "./style.css";
import { db } from "../../../firebase/firebase"
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { FormBuyer } from "../FormBuyer/FormBuyer";

export const CartContainer = () => {
  const { cart, fullPrice, deleteProduct, clearCart } = useContext(CartContext);
  const [dataBuy, setDataBuy] = useState(false);
  const [buyId, setBuyId] = useState('');

  const finishBuy = (buyer) => {
    const salesCollection = collection(db, 'sales');
    addDoc(salesCollection, {
      buyer,
      items: cart,
      date: serverTimestamp(),
      fullPrice,
    })
      .then(response => {
        setBuyId(response.id);
        updateStock();
        clearCart();
        setDataBuy(true);
      })
  }

  const updateStock = () => {
    cart.map((i) => {
      const updateItem = doc(db, 'products', i.item.id)
      updateDoc(updateItem, { stock: (i.item.stock - i.count) })
    })
  }

  return (
    <>
      {
        dataBuy ?
          (
            <div className="container">
              <div className="container-cart glass-effect-cart border">
                <div className="container-emptyCart">
                  <p>Su compra se realizo con exito</p>
                  <p>Id de su compra: {buyId}</p>
                  <div className="buttons m-3">
                    <Link className="button is-warning is-rounded" to={"/"}>
                      Volver al home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
          :
          (
            cart.length === 0 ? (
              <div className="container">
                <div className="container-cart glass-effect-cart border">
                  <div className="container-emptyCart">
                    <p>Ups! Su carrito está vacío. Agregue algunos productos</p>
                    <div className="buttons m-3">
                      <Link className="button is-warning is-rounded" to={"/"}>
                        Buscar productos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) :
              (
                <>
                  <div className="container">
                    <div className="container-cart glass-effect-cart border">
                      {cart.map((producto, index) => {
                        return (<CartItem key={index} Item={producto} deleteProduct={deleteProduct} />);
                      })}
                      <div className="container border-footer ">
                        <div className="container-button-add mx-5">
                          <button className="button is-danger is-light" onClick={() => clearCart()}>
                            Borrar Carrito
                          </button>
                        </div>
                        <p>Precio total ${fullPrice}</p>
                      </div>
                    </div>
                  </div>
                    <div className="container-cart glass-effect-cart border">
                      < FormBuyer finishBuy={finishBuy} />
                    </div>
                </>
              )
          )
      }

    </>
  );
};




