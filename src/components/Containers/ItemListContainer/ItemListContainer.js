import { React, useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

import { db } from "../../../firebase/firebase";
import { getDocs, collection, query, where} from "firebase/firestore";

import { products } from "../../../assets/products.js";
import { customFetch } from "../../../assets/customFetch.js";
import { ItemList } from "../../ItemList/ItemList.jsx";
import { MainTitle } from "../../MainTitle/MainTitle";

export const ItemListContainer = () => {
  const msj = "Los alimentos órganicos de la tierra a tu mesa";
  const [listProduct, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState(true);
  const [error, setError] = useState(false);
  const {nameCategory} = useParams();


  useEffect(() => {
    const productsCollection = collection(db, 'products');
    const ask = query(productsCollection, where('category','==',`${nameCategory}`));

    console.log(nameCategory);

    if(nameCategory){
      getDocs(ask)
      .then((data) => {
        const listProducts = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id
          }
        })
        setListProducts(listProducts)
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
    }else{
      getDocs(productsCollection)
      .then((data) => {
        const listProducts = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id
          }
        })
        setListProducts(listProducts)
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
    }

    
  },[nameCategory])

  // useEffect(() => {
  //   customFetch(products).then((res) => {
  //     setLoading(false);
  //     nameCategory ? (setListProducts(res.filter((e) => e.category === nameCategory))) : (setListProducts(res))
  //   });
  // }, [nameCategory]);

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
