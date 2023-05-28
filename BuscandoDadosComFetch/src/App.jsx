import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

  const tarefas = [
    {id: '1', title: 'Minha Primeira Tarefa'},
    {id: '2', title: 'Minha Segunda Tarefa'},
    {id: '3', title: 'Minha Terceira Tarefa'},
    {id: '4', title: 'Minha Quarta Tarefa'},
  ]


function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(()=> {
    async function buscarDados(){
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
      const resultadoFinal= await resultado.json()
      return resultadoFinal
    }
    buscarDados().then(res=> setTarefas(res))
  },[])


  return (
    <div>
      <h1>Buscando Dados com Fetch</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <div>
              <li key={tarefa.id}>
              {tarefa.title} -{tarefa.completed? <span>Tarefa Concluida</span> : null}</li>
              
            </div>
          )
        })}
      </ol>
    </div>
  )
}

export default App
