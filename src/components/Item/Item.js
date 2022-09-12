import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = () => {
  return (
    <>
      <div class="container ">
        <div class="notification glass-effect">
          <ItemCount initial={1} stock={10} onAdd={(count) => {console.log(`Se agregaron ${count} item/s al carrito`)}}/>
        </div>
      </div>
    </>
  );
};
