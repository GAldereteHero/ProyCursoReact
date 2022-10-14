import {React, useState} from 'react'
import "./style.css";

export const FormBuyer = ({ finishBuy }) => {

    const [buyer, setBuyer] = useState({
        'nombre':'Pepe',
        'apellido': 'Argento',
        'email': 'argento@gmail.com',
      });
    
      const handlerInput = (even) => {
        const name = even.target.name;
        const value = even.target.value;
        setBuyer({...buyer, [name]:value});
    }
    
    const handlerSubmit = (event) => {
        event.preventDefault();
        finishBuy(buyer);
      }

    return (
        <>
            <form className='container-form' onSubmit={handlerSubmit}>
                <label>Ingrese sus datos personales</label>
                <label>Nombre<input type="text" name='nombre' placeholder={buyer.nombre} onChange={handlerInput} /></label>
                <label>Apellido<input type="text" name='apellido' placeholder={buyer.apellido} onChange={handlerInput} /></label>
                <label>Email<input type="text" name='email' placeholder={buyer.email} onChange={handlerInput} /></label>
                <input  className='button is-success is-light' type="submit" value='Terminar Compra' />
            </form>
        </>
    )
}
