import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

import { ItemDetail } from "../../ItemDetail/ItemDetail.js";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { IdProduct } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, 'products');
    const refDoc = doc(productsCollection, IdProduct);

    getDoc(refDoc)
      .then((el) => {
        setProduct(
          {
            id: el.id,
            ...el.data(),
          }
        )
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
    })

return (
  <>
    <div className="container container-detail">
      {loading ? (
        <progress className="progress is-large is-info" max="100">
          60%
        </progress>
      ) : (
        <ItemDetail item={product} />
      )}
    </div>
  </>
);
};
