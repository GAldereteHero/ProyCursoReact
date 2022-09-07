import React from "react";
import "./style.css"
import imgFood from "./organicFood.png";

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div class="container ">
        <div class="notification glass-effect">
          <div className="columns">
            <div className="column">
              <img className="border-radius" src={imgFood} alt="Comida organica" />
            </div>
            <div className="column">
              <h1 className="has-text-centered is-size-1">"{greeting}"</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
