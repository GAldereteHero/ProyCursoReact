import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { ItemCount } from "../ItemCount/ItemCount";


export const ItemDetail = ({ item }) => {
  const loadImage = require.context("../../assets/img");


  const [isAdd, setIsAdd] = useState(false);
  const [amountItem, setAmountItem] = useState(0);

  useEffect (() => {
    console.log(`Se agregaron ${amountItem} unid.`)
  }, [amountItem])

  const onAdd = (count) => {
    setAmountItem(count);
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
              {item.product} ${item.price}
            </p>
            <p className="subTitle-detail">{item.description}</p>
          </div>
          <div>
            { isAdd ? 
              (<Link className="button is-warning is-rounded" to={"/cart"}>Terminar mi compra</Link>):
              (<ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};
