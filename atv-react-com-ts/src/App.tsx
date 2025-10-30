import {useState} from "react";
import "./App.css";

type Participante = {id: number; nome: string; idade: number};
type Filtro = "todas" | "maiores" | "menores";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [lista, setLista] = useState<Participante[]>([]);
  const [filtro, setFiltro] = useState<Filtro>("todas")

  const adicionar = () => {
    if (!nome || !idade) return alert("Preencha os campos!");
    const novo = {id: Date.now(), nome, idade: Number(idade)};
    setLista([...lista, novo]);
    setNome("");
    setIdade("");
  };

  const limpar = () => {
    setNome("");
    setIdade("");
  };

  const remover = (id: number) => {
    setLista(lista.filter((p) => p.id !== id));
  };

  const filtrados = lista.filter((p) =>
  filtro === "maiores" ? p.idade >= 18 :
  filtro === "menores" ? p.idade < 18 : true
);

return (
  <div className="container">
    <h2>Cadastro de Participantes</h2>

    <div className="form">
      <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>
      <button onClick={adicionar}>Adicionar</button>
      <button onClick={limpar} className="limpar">Limpar</button>
    </div>

    <div className="filtro">
      <select value={filtro} onChange={(e) => setFiltro(e.target.value as Filtro)}>
        <option value="todas">Todas</option>
        <option value="maiores">Maiores</option>
        <option value="menores">Menores</option>
      </select>
    </div>

    <ul>
      {filtrados.map((p) => (
        <li key={p.id}>
          {p.nome} - {p.idade} anos{" "}
          <span className={p.idade >= 18 ? "maior" : "menor"}>
            {p.idade >= 18 ? "Maior" : "Menor"}
          </span>
          <button onClick={() => remover(p.id)} className="remover">x</button>
        </li>
      ))}
    </ul>

    <p>Total: {lista.length}</p>
    <p>Maiores de Idade: {lista.filter((p) => p.idade >= 18).length}</p>
  </div>
);
}

