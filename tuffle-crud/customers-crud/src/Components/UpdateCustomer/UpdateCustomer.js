import "./UpdateCustomer.css";
import React, { useState } from "react";
import Web3 from "web3";
import { abi, myWallet, myPrvKey, contractAddress, ipBlockChain, useCustomerState } from "../constants.js";

function UpdateCustomer() {
  const { id, setId, name, setNome, email, setEmail, phone, setTelefone, age, setIdade, customers, setCustomers } = useCustomerState();
  
  const web3 = new Web3(ipBlockChain);

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
;
  async function updateCustomer() {
    console.log("Iniciando -> updateCustomer");
    let contrato = new web3.eth.Contract(abi, contractAddress);
    let receipt = await contrato.methods.updateCustomer(id, { id, name, email, phone, age }).send({ from: myWallet, gas: 3000000 });
    console.log(receipt);
  }

  return (
    <div className="CreateContract">
      <header className="CreateContract-header">
        
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
        <h2>Modificar um Cliente</h2>
        <button onClick={updateCustomer}>updateCustomer</button><br></br>

      </header>
    </div>
  );
}

export default UpdateCustomer;
