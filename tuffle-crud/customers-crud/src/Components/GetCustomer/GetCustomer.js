import "./GetCustomer.css";
import React, { useState } from "react";
import Web3 from "web3";
import NavBar from "../../NavBar";
import { abi, myWallet, myPrvKey, contractAddress, ipBlockChain, useCustomerState } from "../constants.js";

function GetCustomer() {
  const { id, setId, name, setNome, email, setEmail, phone, setTelefone, age, setIdade, customers, setCustomers, web3 } = useCustomerState();


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
  };

  return (
    <NavBar />,
    <div className="CreateContract">
      <header className="CreateContract-header">
        <h2>Escolher Um Cliente</h2>
        <label>
          Id:
          <input type="number" value={id} onChange={(event) => setId(event.target.value)} />
        </label>
        <br />
        <button onClick={getCustomer}>getCustomer</button><br></br>
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
      </header>
    </div>
  );
}

export default GetCustomer;
