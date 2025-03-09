import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [racas, setRacas] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/doguinhos')
      .then(resposta => resposta.json())
      .then(dados => {
        setRacas(dados)
      })
  }, [])

  return (
    <div className="App">
      <h1>Bem vindo aos doguinhos!</h1>
      <h4>Confira abaixo uma lista de raças dos doguinhos</h4>
      <ul>
        {racas.map(raca => <li key={raca.nome}>{raca.nome}</li>)}
      </ul>
    </div>
  );
}

export default App;
