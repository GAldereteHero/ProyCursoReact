import React from 'react'
import imgFood from "../../assets/img/organicFood.png";


export const MainTitle = ({ greeting }) => {
  return (
    <div>
      <div className="container">
        <div className="notification glass-effect border">
          <p className="has-text-centered is-size-1">"{greeting}"</p>
          <img className="img-main" src={imgFood} alt="Comida orgánica" />
        </div>
      </div >
    </div >
  )
}
