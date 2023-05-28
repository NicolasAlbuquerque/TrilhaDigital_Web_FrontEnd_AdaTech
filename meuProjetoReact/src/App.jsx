import MeuComponent from "./components/MeuComponent"




function App() {// todas as funções começando com letra maiuscula

  return (
    
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponent />
      <MyButton conteudo='Me Clique' />
      <MyButton conteudo='Depois aqui'/>
      <MyButton conteudo='e Por fim em mim'/>
    </div>
    
  )
}



function MyButton(props) {


  return (
    <button>{props.conteudo}</button>
  )
  
  
}

export default App//exporta [para o mains tsx]

