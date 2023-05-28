import { useState } from 'react'

import './App.css'
import MinhaLista from './components/MinhaLista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Listas no react</h1>

      <MinhaLista />
    </>
  )
}

export default App
