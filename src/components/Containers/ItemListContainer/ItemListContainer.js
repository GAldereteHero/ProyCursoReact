import { React, useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

import { db } from "../../../firebase/firebase";
import { getDocs, collection, query, where} from "firebase/firestore";

import { ItemList } from "../../ItemList/ItemList.jsx";
import { MainTitle } from "../../MainTitle/MainTitle";

export const ItemListContainer = () => {
  const msj = "Los alimentos órganicos de la tierra a tu mesa";
  const [listProduct, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {nameCategory} = useParams();

  useEffect(() => {
    const productsCollection = collection(db, 'products');
    const oneCategory = query(productsCollection, where('category','==',`${nameCategory}`));
 
    const getProduct = async () => {
      try{
        const data = await getDocs(nameCategory ? oneCategory : productsCollection);
        const products = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          }
        });
        setListProducts(products);
      }
      catch{
        setError(true);
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }
    getProduct();
  },[nameCategory, error])

  return (
    <>
      <MainTitle greeting={msj} />
      <div className="container">
        {loading ? (<progress className="progress is-large is-info" max="100">60%</progress>
        ) : (<ItemList listProduct={listProduct} />)}
      </div>
    </>
  );
};
