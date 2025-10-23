import { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState("");
  const [logado, setLogado] = useState(false);

  function entrar() {
    if (nome.trim() === "") {
      alert("Por favor, digite seu nome, ele é obrigatório!!");
      return;
    }
    setLogado(true);
  }

  function sair() {
    setNome("");
    setLogado(false);
  }

  const telaInicial = (
    <div>
      <h1>Digite seu nome:</h1>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" /><br></br>
      <button onClick={entrar}>Entrar</button>
    </div>
  );

  const telaBoasVindas = (
    <div>
      <h1>Bem-vindo(a), {nome}!</h1>
      <button onClick={sair}>Sair</button>
    </div>
  );

  return (
    <div className='container'>
      {logado ? telaBoasVindas : telaInicial}
    </div>
  );
}


export default App
