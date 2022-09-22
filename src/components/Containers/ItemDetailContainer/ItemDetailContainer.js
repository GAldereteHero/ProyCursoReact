import { React, useState, useEffect } from "react";

import { singleProduct } from "../../../assets/singleProduct.js";
import { customFetch } from "../../../assets/customFetch.js";
import { ItemDetail } from "../../ItemDetail/ItemDetail.js"

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch(singleProduct).then((resp) => {
      setLoading(false);
      setProduct(resp[0]);
    });
  }, []);

  return (
    <>
      <div class="container container-detail">
        {loading ? ( <progress className="progress is-large is-info" max="100">60%</progress>) 
        : (<ItemDetail product={product} />)}
      </div>
    </>
  );
};
