import { useState } from 'react'
import React from 'react'
import './assets/style.css'
import styles from './assets/button.module.css'
export default function App() {

    const [contador, setContador] = useState(0)

    console.log('Renderizando meus componentes....')


    function aumentar(){
        setContador(contador+1)

    }

    return (
    <div className='container'> 
        <h1>MeuContador</h1>
        <h3>{contador}</h3>
        <button className={styles.MyButton} onClick={aumentar}>Aumentar</button>
    </div>

    )
}
