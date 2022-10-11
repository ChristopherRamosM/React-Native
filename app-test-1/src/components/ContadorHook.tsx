import React from 'react'
//import {useState} from 'react';
import { useCounter } from './hooks/useCounter';

export const ContadorHook = () => {

    /*const [valor, setValor] = useState(0);

    const acumular = (numero:number) => {
        setValor(valor + numero);
    }*/

    //const {valor, acumular} = useCounter();
    const {valor, acumular} = useCounter(77);

    return (
        <div>
            <h3>Contador Hook: <small>{valor}</small></h3>
            <button className="CRButton1"
                    onClick={() => acumular(1)}
            >
                    Sumar (+1)
            </button>
            &nbsp;
            <button className="CRButton2"
                    onClick={() => acumular(-1)}
            >
                    Restar (-1)
            </button>
        </div>
    )
}
