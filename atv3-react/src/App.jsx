import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);
  const [incremento, setIncremento] = useState(1);

  function somar() {
    setContador(contador + incremento);
  }

  function subtrair() {
    setContador(contador - incremento);
  }

  function zerar() {
    setContador(0);
  }

  return (
    <div className="container">
      <h1>Contador Personalizado</h1>
      <p>Valor atual: {contador}</p>
      <label>Incremento:{" "}
        <input type="number" value={incremento} onChange={(e) => setIncremento(Number(e.target.value))} min="1"/>
      </label>

      <div className="botoes">
        <button onClick={somar}>Somar</button>
        <button onClick={subtrair}>Subtrair</button>
        <button onClick={zerar}>Zerar</button>
      </div>
    </div>
  );
}

export default App;
