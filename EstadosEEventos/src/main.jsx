import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MeuContador from './MeuContador.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MeuContador />
  </React.StrictMode>,
)
