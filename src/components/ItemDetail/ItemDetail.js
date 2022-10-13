import {React, useState, useContext} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { ItemCount } from "../ItemCount/ItemCount";
import {CartContext} from "../../Context/CartContext";



export const ItemDetail = ({ item }) => {
  const loadImage = require.context("../../assets/img");

  const [isAdd, setIsAdd] = useState(false);

  const {addToCart} = useContext(CartContext); 

  const onAdd = (count) => {
    addToCart(item,count);
    setIsAdd(true);
  };


  return (
    <div>
      <div className="container-detail glass-effect border">
        <div>
          <img className="img-detail" src={loadImage(`./${item.image}`)} alt="" />
        </div>
        <div className="container-data">
          <div>
            <p className="title-detail">
              {item.title} ${item.price}
            </p>
            <p className="subTitle-detail">{item.description}</p>
          </div>
          <div>
            { isAdd 
              ? (<Link className="button is-warning is-rounded" to={"/cart"}>Ver carrito</Link>)
              : (<ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};
