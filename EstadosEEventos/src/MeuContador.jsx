import { useState } from 'react'
import React from 'react'
import styles from './'

export default function MeuContador() {

    const [contador, setContador] = useState(0)

    console.log('Renderizando meus componentes....')


    function aumentar(){
        setContador(contador+1)

    }

    return (
    <> 
        <h1>MeuContador</h1>
        <h3>{contador}</h3>
        <button onClick={aumentar}>Aumentar</button>
    </>

    )
}
