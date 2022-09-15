import { React, useState, useEffect } from "react";
import "./style.css";

import { products } from "../../../assets/products.js";
import { customFetch } from "../../../assets/customFetch.js";
import { ItemList } from "../../ItemList/ItemList.jsx";

export const ItemListContainer = () => {
  const [listProduct, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch(products).then((res) => {
      setLoading(false);
      setListProducts(res);
    });
  }, []);

  return (
    <>
      <div class="container ">
        {loading ? (
          <progress className="progress is-large is-info" max="100">
            60%
          </progress>
        ) : (
          <ItemList listProduct={listProduct} />
        )}
      </div>
    </>
  );
};
