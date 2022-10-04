import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../../../assets/products.js";
import { customFetch } from "../../../assets/customFetch.js";
import { ItemDetail } from "../../ItemDetail/ItemDetail.js";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { IdProduct } = useParams();

  useEffect(() => {
    customFetch(products).then((resp) => {
      setLoading(false);
      setProduct(resp.filter((e) => (e.id == IdProduct)));
    });
  }, [IdProduct]);

  return (
    <>
      <div className="container container-detail">
        {loading ? (
          <progress className="progress is-large is-info" max="100">
            60%
          </progress>
        ) : (
          <ItemDetail item={product[0]} />
        )}
      </div>
    </>
  );
};
