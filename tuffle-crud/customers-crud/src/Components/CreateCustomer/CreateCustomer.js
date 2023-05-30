import "./CreateCustomer.css";
import React, { useState } from "react";
import Web3 from "web3";
import NavBar from "../../NavBar";
import { abi, myWallet, myPrvKey, contractAddress, ipBlockChain } from "../constants.js";

function CreateCustomer() {
  const [id, setId] = useState(0);

  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setTelefone] = useState('');
  const [age, setIdade] = useState('');

  const [customers, setCustomers] = useState([]);

  const web3 = new Web3(ipBlockChain);

  async function createCustomer() {
    console.log("Iniciando -> createCustomer");
    // Cria um novo objeto cliente com os dados do formulário
    let contrato = new web3.eth.Contract(abi, contractAddress);
    setId('')
    setNome('');
    setEmail('');
    setTelefone('');
    setIdade('');
  };

  return (
    <NavBar />,
    <div className="CreateContract">
      <header className="CreateContract-header">
        
        <h2>Cadastrar um Cliente</h2>
        <label>
          Nome:
          <input type="text" value={name} onChange={(event) => setNome(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Telefone:
          <input type="text" value={phone} onChange={(event) => setTelefone(event.target.value)} />
        </label>
        <br />
        <label>
          Idade:
          <input type="number" value={age} onChange={(event) => setIdade(event.target.value)} />
        </label>
        <br />
        <button onClick={createCustomer}>createCustomer</button><br></br>

      </header>
    </div>
  );
}

export default CreateCustomer;
