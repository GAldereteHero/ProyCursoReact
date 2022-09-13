import React from 'react'

import { Item } from '../Item/Item.js';

export const ItemList = ({listProduct}) => {

  return (
    <>
      { listProduct.map( (prod, i) => <Item key={`${prod.product}-${i}`} product={prod}/>)}
    </>
  )
}
