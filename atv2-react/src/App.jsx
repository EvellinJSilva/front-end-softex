import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
  }

  return (
    <div className="container">
      <h1>Contador de Cliques</h1>
      <p>Você clicou {contador} vezes!</p>
      <button onClick={incrementar}>Clique aqui</button>
    </div>
  )
}

export default App
