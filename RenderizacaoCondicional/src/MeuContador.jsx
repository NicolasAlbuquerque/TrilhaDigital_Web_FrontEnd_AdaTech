import { useState } from 'react'
import React from 'react'
import './assets/MeuContador.css'

export default function MeuContador() {

    const [contador, setContador] = useState(0)

    console.log('Renderizando meus componentes....')


    function aumentar(){
        setContador(contador + 1)

    }

    function diminuir(){
        setContador(contador - 1)
    }

    if (contador > 5){
        return(
        <div className='cont'>
            <h1>Contador muito alto</h1>
            <button>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
    )
} 


    return (
    <> 
        <h1>MeuContador</h1>
        <h3>{contador}</h3>
        {contador > 9 ? <h1>Valor muito Grande</h1> : null}
        <button onClick={aumentar}>aumentar</button>
        <button onClick={diminuir}>diminuir</button>
    </>

    )
}
