import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [tempo, setTempo] = useState(0);
  const intervaloRef = useRef(null);

  function iniciar() {
    if (intervaloRef.current !== null) return;

    intervaloRef.current = setInterval(() => {
      setTempo((t) => t + 1);
    }, 1000);
  }


function pausar() {
  clearInterval(intervaloRef.current);
  intervaloRef.current = null;
}

function zerar() {
  clearInterval(intervaloRef.current);
  intervaloRef.current = null;
  setTempo(0);
}

  return (
    <div className="container">
      <h1>Cronômetro</h1>
      <p className="tempo">{tempo} s</p>

      <div className="botoes">
        <button onClick={iniciar}>Iniciar</button>
        <button onClick={pausar}>Pausar</button>
        <button onClick={zerar}>Zerar</button>
      </div>
    </div>
  );
}

export default App
