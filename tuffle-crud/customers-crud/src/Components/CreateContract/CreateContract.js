import "./CreateContract.css";
import React, { useState } from "react";
import Web3 from "web3";

function CreateContract() {
  const [id, setId] = useState(0);

  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setTelefone] = useState('');
  const [age, setIdade] = useState('');

  const abi = [ { "inputs": [ { "internalType": "uint32", "name": "", "type": "uint32" } ], "name": "customers", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "phone", "type": "string" }, { "internalType": "uint256", "name": "age", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "finalCount", "outputs": [ { "internalType": "uint32", "name": "", "type": "uint32" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "components": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "phone", "type": "string" }, { "internalType": "uint256", "name": "age", "type": "uint256" } ], "internalType": "struct StoreCustomers.Customer", "name": "newCustomer", "type": "tuple" } ], "name": "addCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint32", "name": "_id", "type": "uint32" } ], "name": "getCustomer", "outputs": [ { "components": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "phone", "type": "string" }, { "internalType": "uint256", "name": "age", "type": "uint256" } ], "internalType": "struct StoreCustomers.Customer", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "getAllCustomers", "outputs": [ { "components": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "phone", "type": "string" }, { "internalType": "uint256", "name": "age", "type": "uint256" } ], "internalType": "struct StoreCustomers.Customer[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "internalType": "uint32", "name": "_id", "type": "uint32" }, { "components": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "phone", "type": "string" }, { "internalType": "uint256", "name": "age", "type": "uint256" } ], "internalType": "struct StoreCustomers.Customer", "name": "customer", "type": "tuple" } ], "name": "updateCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint32", "name": "_id", "type": "uint32" } ], "name": "deleteCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ];
  const myWallet = "0xC9B2ABC2De3759A1c54639A389B6786aE1A284D4";
  const myPrvKey = "0x2e9cd6e1524e56858f35a06a3ec439c8cb07376b24a7fa8e878cee955fe6bb08";

  const contractAddress = "0x0274132B70F983748c236Aed272754d4E1243220";
  const [customers, setCustomers] = useState([]);

  const web3 = new Web3("http://127.0.0.1:7545");

  async function getAllCustomers() {
    console.log("Iniciando -> getAllCustomers");
    let contrato = new web3.eth.Contract(abi, contractAddress);
    let receipt = await contrato.methods.getAllCustomers().call();
    setCustomers(receipt);
    console.log(receipt);
  }
  async function getCustomer() {
    console.log("Iniciando -> getCustomer");
    let contrato = new web3.eth.Contract(abi, contractAddress);
    let receipt = await contrato.methods.getCustomer(id).call();
    console.log(receipt);
    setId(receipt.id);
    setNome(receipt.name);
    setEmail(receipt.email);
    setTelefone(receipt.phone);
    setIdade(receipt.age);
  }
  async function createCustomer() {
    console.log("Iniciando -> createCustomer");
    // Cria um novo objeto cliente com os dados do formulário
    let contrato = new web3.eth.Contract(abi, contractAddress);
    let receipt =  await contrato.methods.addCustomer({id,name,email,phone,age}).send({ from: myWallet, gas: 3000000 });
    setId('')
    setNome('');
    setEmail('');
    setTelefone('');
    setIdade('');
  };
  async function updateCustomer() {
    console.log("Iniciando -> updateCustomer");
    let contrato = new web3.eth.Contract(abi, contractAddress);
    let receipt = await contrato.methods.updateCustomer(id,{id,name, email, phone, age}).send({ from: myWallet, gas: 3000000 });
    console.log(receipt);
  }
  async function deleteCustomer() {
    console.log("Iniciando -> deleteCustomer");
    let contrato = new web3.eth.Contract(abi, contractAddress);
    let receipt = await contrato.methods.deleteCustomer(id).send({ from: myWallet, gas: 3000000 });
    console.log(receipt);
    setId('')
    setNome('');
    setEmail('');
    setTelefone('');
    setIdade('');
  }

  return (
    <div className="CreateContract">
      <header className="CreateContract-header">
        <h2>Trazer Clientes!</h2>
        <button onClick={getAllCustomers}>getAllCustomers</button><br></br>
        <h3>Lista de Clientes</h3>
        <ul>
          {customers.map((customer, index) => (
            <li key={index}>
              Id: {customer.id}<br></br>Nome: {customer.name}<br></br> Email: {customer.email}<br></br> Telefone: {customer.phone}<br></br> Idade: {customer.age}
            </li>
          ))}
        </ul>
        <h2>Escolher Um Cliente</h2>
        <label>
          Id:
          <input type="number" value={id} onChange={(event) => setId(event.target.value)} />
        </label>
        <br />
        <button onClick={getCustomer}>getCustomer</button><br></br>
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
        <h2>Modificar um Cliente</h2>
        <button onClick={updateCustomer}>updateCustomer</button><br></br>
        <h2>Deletar um Cliente</h2>
        <button onClick={deleteCustomer}>deleteCustomer</button><br></br>

      </header>
    </div>
  );
}

export default CreateContract;
