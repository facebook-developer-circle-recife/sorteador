import React, { useState } from "react";
import "./App.css";
import dados from "./data.json";

function App() {
  const [pessoaSortuda, setPessoaSortuda] = useState("");

  // Exemplo: "Otacilio Maia: Aprendi muito"
  // Exemplo: "Otacilio Maia: Gostei muito"

  const sorteie = () => {
    const comentarios = dados.data.map(comentario => {
      const mensagem = comentario.message;
      if (mensagem.includes(":")) {
        return mensagem.split(":")[0];
      } else {
        return "invalido";
      }
    });
    // Eu cai? Vamo pro sorteio! Joga lá no grupo
    // Lembrando, basta apenas comentar "seu nome: o que você aprendeu"
    const comentariosUnicos = [
      ...new Set(comentarios.filter(c => c !== "invalido"))
    ];
    console.log("participantes", comentariosUnicos);
    const quantidade = comentariosUnicos.length;
    const sorteado = Math.floor(Math.random() * quantidade);
    setPessoaSortuda(comentariosUnicos[sorteado]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={sorteie}
          style={{ padding: 8, fontSize: 42, borderRadius: 16 }}
        >
          Sortear
        </button>
        <h1>Comentario sorteado: {pessoaSortuda}</h1>
      </header>
    </div>
  );
}

export default App;
