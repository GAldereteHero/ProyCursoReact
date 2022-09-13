import {React, useState, useEffect} from "react";
import "./style.css"
import imgFood from "./organicFood.png";

import { products } from "../../../assets/products.js"
import {  customFetch } from "../../../assets/customFetch.js";
import {  ItemList } from "../../ItemList/ItemList.jsx";

export const ItemListContainer = ({ greeting }) => {

  const [listProduct, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    customFetch(products)
      .then( res => {
        setLoading(false)
        setListProducts(res)
      })
  },[])

  return (
    <>
      <div class="container ">
        <div class="notification glass-effect">
          <div className="columns">
            <div className="column">
              <img className="border-radius" src={imgFood} alt="Comida orgánica" />
            </div>
            <div className="column">
              <h1 className="has-text-centered is-size-1">"{greeting}"</h1>
            </div>
          </div>
        </div>
      </div>
      { loading ? 
        <progress class="progress is-large is-info" max="100">60%</progress>
        : 
        < ItemList listProduct={listProduct} />
      }
    </>
  );
};
