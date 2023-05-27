import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [customerId, setCustomerId] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <header className="App-header">


        <h2>Cadastro de Clientes</h2>
        <form action="cadastrar_cliente.php" method="POST">

          <label value="customerId">ID:</label>
          <input type="number" value={customerId} onChange={(evt) => setCustomerId(evt.target.value)} placeholder="Digite o ID do cliente" />

          {/* <label for="nome">Nome:</label>
          <input type="text" name="nome" id="nome" placeholder="Digite o nome do cliente" />

          <label for="email">E-mail:</label>
          <input type="email" name="email" id="email" placeholder="Digite o e-mail do cliente" />

          <label for="telefone">Telefone:</label>
          <input type="tel" name="telefone" id="telefone" placeholder="Digite o telefone do cliente" />

          <label for="idade">Idade:</label>
          <input type="number" name="idade" id="idade" placeholder="Digite a idade do cliente" /> */}

          <input type="button" value="Buscar Cliente" />

        </form>
        
        <p>{message}</p>

      </header>
    </div>
  );
}

export default App;
