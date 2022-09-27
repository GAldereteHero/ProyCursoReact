import React from 'react'
import imgFood from "./organicFood.png";


export const MainTitle = ({ greeting }) => {
  return (
    <div>
        <div className="container ">
        <div className="notification glass-effect border">
          <div className="columns">
            <div className="column">
              <img className="border-radius" src={imgFood} alt="Comida orgánica" />
            </div>
            <div className="column">
              <h1 className="has-text-centered is-size-1">"{greeting}"</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
